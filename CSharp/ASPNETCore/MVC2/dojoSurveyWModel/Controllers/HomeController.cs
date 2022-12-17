using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using dojoSurveyWModel.Models;

namespace dojoSurveyWModel.Controllers;

public class HomeController : Controller
{
    // public static List<Model.Survey> Pets = new List<Model.Survey>();

    static Survey user;

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
    public IActionResult Process(Survey newUser)
    {
        user = newUser;
        return RedirectToAction("Results");
    }

    [HttpGet("results")]
    public IActionResult Results()
    {
        return View(user);
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

