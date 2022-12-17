using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using beltExamCSharp.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;

namespace beltReview.Controllers;

public class HomeController : Controller
{
    private MyContext _context;
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        return View();
    }

    [HttpPost("users/create")]
    public IActionResult CreateUser(User newUser)
    {
        if(ModelState.IsValid)
        {
            PasswordHasher<User> Hasher = new PasswordHasher<User>();
            newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
            _context.Add(newUser);
            _context.SaveChanges();
            HttpContext.Session.SetInt32("UserId", newUser.UserId);
            return RedirectToAction("Project");
        } else {
            return View("Index");
        }
    }

    [HttpPost("users/login")]
    public IActionResult LoginUser(LogUser loginUser)
    {
        if(ModelState.IsValid)
        {
            User? userInDb = _context.Users.FirstOrDefault(u => u.Email == loginUser.LEmail);
            if(userInDb == null)
            {
                ModelState.AddModelError("LEmail", "Invalid Email or Password... You tell me :)");
                return View("Index");
            }
            PasswordHasher<LogUser> hasher = new PasswordHasher<LogUser>();
            var result = hasher.VerifyHashedPassword(loginUser, userInDb.Password, loginUser.LPassword);
            if(result == 0)
            {
                ModelState.AddModelError("LEmail", "Invalid Email or Password... You tell me :)");
                return View("Index");
            } else {
                HttpContext.Session.SetInt32("UserId", userInDb.UserId);
                return RedirectToAction("Project");
            }
        } else {
            return View("Index");
        }
    }

    [SessionCheck]
    [HttpPost("logout")]
    public IActionResult Logout()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
    }

    [SessionCheck]
    [HttpGet("projects")]
    public IActionResult Project()
    {
        MyViewModel MyModel = new MyViewModel
        {
            AllProjects = _context.Projects
                                            .Include(a => a.Supported)
                                            .Include(a => a.Creator)
                                            // .ThenInclude(a => (double)a.Amount)
                                            // .Where(a => a.UserId == (int)HttpContext.Session.GetInt32("UserId"))
                                            .ToList(),
        };
        ViewBag.LoggedUser = _context.Users.FirstOrDefault(a => a.UserId == HttpContext.Session.GetInt32("UserId"));
        return View(MyModel);
    }

    [SessionCheck]
    [HttpGet("projects/new")]
    public IActionResult NewProject()
    {
        return View();
    }

    [SessionCheck]
    [HttpPost("projects/create")]
    public IActionResult CreateProject(Project newProject)
    {
        if(ModelState.IsValid)
        {
            newProject.UserId = (int)HttpContext.Session.GetInt32("UserId");
            _context.Add(newProject);
            _context.SaveChanges();
            return RedirectToAction("Project");
        } else {
            return View("NewProject");
        }
    }

    [SessionCheck]
    [HttpPost("projects/{id}/destroy")]
    public IActionResult DestroyProject(int id)
    {
        Project? ProjectDestroy = _context.Projects.SingleOrDefault(a => a.ProjectId == id);
        _context.Projects.Remove(ProjectDestroy);
        _context.SaveChanges();
        return RedirectToAction("Project");
    }

    [SessionCheck]
    [HttpGet("projects/{id}")]
    public IActionResult OneProject(int id)
    {
        // MyViewModel MyModel = new MyViewModel
        // {
        //     Project = _context.Projects
        //                                 .Include(a => a.Supported)
        //                                 .ThenInclude(a => a.User)
        //                                 .FirstOrDefault(a => a.ProjectId == id),
        // };
        Project? OneProject = _context.Projects
                                        .Include(a => a.Supported)
                                        .FirstOrDefault(a => a.ProjectId == id);
        ViewBag.OneProject = _context.Projects.FirstOrDefault(a => a.ProjectId == id);
        ViewBag.LoggedUser = _context.Users.FirstOrDefault(a => a.UserId == HttpContext.Session.GetInt32("UserId"));

        return View(OneProject);
    }

    [SessionCheck]
    [HttpPost("projects/create/support")]
    public IActionResult CreateSupport(Support newSupport)
    {
        if(ModelState.IsValid)
        {
            newSupport.UserId = (int)HttpContext.Session.GetInt32("UserId");
            Project? ProjectSupport = _context.Projects.FirstOrDefault(a => a.ProjectId == newSupport.ProjectId);
            _context.Add(newSupport);
            _context.SaveChanges();
            return RedirectToAction("Project");
        } else {
            return View("Project", newSupport.ProjectId);
        }
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}

public class SessionCheckAttribute : ActionFilterAttribute
{
    public override void OnActionExecuted(ActionExecutedContext context)
    {
        int? userId = context.HttpContext.Session.GetInt32("UserId");
        if(userId == null)
        {
            context.Result = new RedirectToActionResult("Index", "Home", null);
        }
    }
}
