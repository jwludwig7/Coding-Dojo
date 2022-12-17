using Microsoft.AspNetCore.Mvc;
namespace portfolio2.Controllers;
public class HelloController : Controller
{
    [HttpGet("")]
    public ViewResult Index()
    {
        return View();
    }

    [HttpGet("projects")]
    public ViewResult Projects()
    {
        return View();
    }

    [HttpGet("contact")]
    public ViewResult Contact()
    {
        return View();
    }
}