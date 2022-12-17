using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using sessionWorkshop.Models;

namespace sessionWorkshop.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        HttpContext.Session.SetInt32("MyNum", 22);

        return View();
    }


    [HttpPost("Login")]
    public IActionResult Login(string NewName)
    {
        if(NewName == null)
        {
            return RedirectToAction("Index");
        }
        HttpContext.Session.SetString("Username", NewName);
        return RedirectToAction("Privacy");
    }

    public IActionResult Privacy()
    {
        if(HttpContext.Session.GetString("Username") == null)
        {
            return RedirectToAction("Index");
        }
        int? Number = HttpContext.Session.GetInt32("MyNum");

        return View();
    }

    [HttpPost("plusone")]
    public IActionResult PlusOne()
    {
        int? Num = HttpContext.Session.GetInt32("MyNum");
        Num+=1;
        HttpContext.Session.SetInt32("MyNum", (int)Num);
        return RedirectToAction("Privacy");
    }

    [HttpPost("minusone")]
    public IActionResult MinusOne()
    {
        int? Num = HttpContext.Session.GetInt32("MyNum");
        Num-=1;
        HttpContext.Session.SetInt32("MyNum", (int)Num);
        return RedirectToAction("Privacy");
    }

    [HttpPost("timestwo")]
    public IActionResult TimesTwo()
    {
        int? Num = HttpContext.Session.GetInt32("MyNum");
        Num*=2;
        HttpContext.Session.SetInt32("MyNum", (int)Num);
        return RedirectToAction("Privacy");
    } 

    
    [HttpPost("random")]
    public IActionResult Random()
    {
        Random rand = new Random();
        int random = rand.Next(1,10);
        int? Num = HttpContext.Session.GetInt32("MyNum");
        Num+= random;
        HttpContext.Session.SetInt32("MyNum", (int)Num);
        return RedirectToAction("Privacy");
    } 

        [HttpPost("reset")]
    public IActionResult reset()
    {
        int? Num = HttpContext.Session.GetInt32("MyNum");
        Num= 22;
        HttpContext.Session.SetInt32("MyNum", (int)Num);
        return RedirectToAction("Privacy");
    } 




    [HttpPost("logout")]
    public IActionResult Logout()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
