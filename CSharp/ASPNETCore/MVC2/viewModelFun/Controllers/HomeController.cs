using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using viewModelFun.Models;

namespace viewModelFun.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        string message = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae minima sit ex quo autem ad veritatis deserunt incidunt ratione, esse, consequuntur dolorum explicabo nemo! Molestias sapiente iusto doloremque deserunt inventore!. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem optio vel similique rem. Doloremque cupiditate asperiores sit, ullam quo quis officiis molestias sint reprehenderit ex. Repellendus, voluptatem! Beatae, nam debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam earum, animi tempora quibusdam possimus hic non optio beatae numquam exercitationem enim quam architecto accusamus. Tempora maxime ipsam eos quidem voluptatum!";
        return View("Index", message);
    }

    [HttpGet("numbers")]
    public IActionResult Numbers()
    {
        int[] numbers = new int[] { 1, 2, 3, 4, 5, 6, 7, 8 };
        return View(numbers);
    }

    [HttpGet("Home/user")]
    public IActionResult OneUser()
    {
        User user = new User()
        {
            FirstName = "Jordan",
            LastName = "Ludwig"
        };
        return View(user);
    }

    [HttpGet("Home/users")]
    public IActionResult AllUsers()
    {
        List<User> AllUsers = new List<User>();
        AllUsers.Add(new User() { FirstName = "Jordan", LastName = "Ludwig" });
        AllUsers.Add(new User() { FirstName = "Nick", LastName = "Roche" });
        AllUsers.Add(new User() { FirstName = "Nash", LastName = "Coleman" });
        AllUsers.Add(new User() { FirstName = "Sean", LastName = "McIntyre" });
        AllUsers.Add(new User() { FirstName = "Ashlee", LastName = "Coleman" });
        return View(AllUsers);
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
