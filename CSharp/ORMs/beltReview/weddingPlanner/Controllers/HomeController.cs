using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using weddingPlanner.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;


namespace weddingPlanner.Controllers;

public class HomeController : Controller
{
    private MyContext _context;

    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("/")]
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
            return RedirectToAction("Dashboard");
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
                return RedirectToAction("Dashboard");
            }
        } else {
            return View("Index");
        }
    }

    [SessionCheck]
    [HttpGet("dashboard")]
    public IActionResult Dashboard()
    {
        MyViewModel MyModel = new MyViewModel
        {
            AllPlannedWeddings = _context.PlanWeddings.Include(a => a.GuestList).ToList(),
            PlannedWeddings = _context.Resonses.Include(a => a.PlanWedding).ToList()
        };
        // not sure i am using this on the dashboard
        ViewBag.AllPlannedWeddings = _context.PlanWeddings.Include(a => a.GuestList).ToList();
        //going into table of planweddings and including the guest list which is a list of responses
        ViewBag.LoggedUser = _context.Users.FirstOrDefault(a => a.UserId == HttpContext.Session.GetInt32("UserId"));
        // logged user is taking the usersId from User table setting it equal to session Userid
        ViewBag.RSVPS = _context.Resonses.Include(a => a.PlanWedding).Where(a => a.UserId == HttpContext.Session.GetInt32("UserId"));
        // rsvp is going into Responses table and including (joining) PlanWedding where the userId is equal to the session id
        return View();
    }

    [HttpPost("logout")]
    public IActionResult Logout()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
        // logout button is just clearing the session
    }

    [SessionCheck]
    [HttpGet("weddings/new")]
    public IActionResult NewWedding()
    {
        ViewBag.LoggedUser = _context.Users.FirstOrDefault(a => a.UserId == HttpContext.Session.GetInt32("UserId"));
        // going into the users table and grabing the UserId that matches the sesssion userId
        return View("NewWedding");
    }

    [HttpPost("weddings/create")]
    public IActionResult CreateWedding(PlanWedding newWedding)
    {
        if(ModelState.IsValid)
        {
            _context.Add(newWedding);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
            // if all goes well and is valid will create the new wedding , redirect to dashboard
        } else {
            return NewWedding();
        }
    }

    [SessionCheck]
    [HttpGet("weddings/{id}")]
    public IActionResult OneWedding(int id)
    {
        MyViewModel MyModel = new MyViewModel
        {
            PlanWedding = _context.PlanWeddings
                                                .Include(a => a.GuestList)
                                                .ThenInclude(a => a.User)
                                                .FirstOrDefault(a => a.PlanWeddingId == id),
            // adding PlanWedding to the MyModel and going into planWedding table include the GuestList in response, then include
            // user table and grab thee planWeddingId that equals the id of the wedding
        };
        ViewBag.LoggedUser = _context.Users.FirstOrDefault(a => a.UserId == HttpContext.Session.GetInt32("UserId"));
        // grabbing logged user which is the user that is linked with the session userId
        return View(MyModel);
    }

    [HttpPost("weddings/rsvp")]
    public IActionResult RSVPWedding(int id, Response newRSVP)
    {
        if(ModelState.IsValid)
        {
            _context.Add(newRSVP);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
            // just changing the bool
        } else {
            return View("Dashboard");
        }
    }

    [HttpPost("weddings/{id}/destroy")]
    public IActionResult DestroyWedding(int id)
    {
        PlanWedding? WeddingDestroy = _context.PlanWeddings.SingleOrDefault(a => a.PlanWeddingId == id);
        // grabing the wedding to destroy then passing it into the remove property
        _context.PlanWeddings.Remove(WeddingDestroy);
        _context.SaveChanges();
        return RedirectToAction("Dashboard");
    }

    [HttpPost("rsvp/{id}/destroy")]
    public IActionResult UnRSVP(int id)
    {
        if(ModelState.IsValid)
        {
            Response? RSVPDestroy = _context.Resonses
                                                    .Where(a => a.UserId == HttpContext.Session.GetInt32("UserId"))
                                                    .SingleOrDefault(a => a.PlanWeddingId == id);
            // grabing the rsvp to change back or destroy, grabing where the userid and sessino id match, and the wedding that matches the id
            ViewBag.LoggedUser = _context.Users
                                                .FirstOrDefault(a => a.UserId == HttpContext.Session.GetInt32("UserId"));
            // logged user is just the userId that is match with the session UserId
            _context.Resonses.Remove(RSVPDestroy);
            // adding RSVPDestroy to the removee prop 
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        } else {
            return View("Dashboard");
        }
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

// session check 
