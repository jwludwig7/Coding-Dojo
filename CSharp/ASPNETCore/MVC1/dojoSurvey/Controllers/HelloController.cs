using Microsoft.AspNetCore.Mvc;
namespace dojoSurvey.Controllers;
public class HelloController : Controller
{
    [HttpGet("")]
    public ViewResult Index()
    {
        return View();
    }

    [HttpPost("process")]
    public IActionResult Process(string name, string location ,string fav, string comment)
    {
        return RedirectToAction("Results", new {name = name, location = location, fav = fav, comment = comment});
    }
    
    [HttpGet("results")]
    public ViewResult Results(string name, string location ,string fav, string comment)
    {
        ViewBag.name = name;
        ViewBag.location = location;
        ViewBag.fav = fav;
        ViewBag.comment = comment;
        return View();
    }

}