using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using dojoSurveyWValidations.Models;

namespace dojoSurveyWValidations.Controllers;

public class HomeController : Controller
{
    // static Survey user;
    public static List<Survey> User = new List<Survey>();

    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        return View();
    }

    [HttpPost("process")]
    // public IActionResult Process(Survey newUser)
    public IActionResult Process(Survey newUser)

    {
        if(ModelState.IsValid)
        {
            // user = newUser;
            User.Add(newUser);
            return RedirectToAction("Results");
        }
        else
        {
            return View("Index");
        }
    }

    [HttpGet("results")]
    public IActionResult Results()
    {
        return View(User);
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
