using Microsoft.AspNetCore.Mvc;
namespace countdown.Controllers;
public class HelloController : Controller
{
    [HttpGet("")]
    public ViewResult Index()
    {
        return View();
    }
}
