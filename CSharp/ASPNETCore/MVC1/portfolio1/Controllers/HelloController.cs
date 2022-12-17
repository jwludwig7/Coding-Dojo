using Microsoft.AspNetCore.Mvc;
namespace Portfolio1.Controllers;
public class HelloController : Controller
{
    [HttpGet("")]
    public string Index()
    {
        return "This is my Index!!!!!";
    }

    [HttpGet("projects")]
    public string Projects()
    {
        return "This is my projects mannnggggggg!!!!";
    }

    [HttpGet("contact")]
    public string Contact()
    {
        return "This is my contacts bang my line!";
    }
}