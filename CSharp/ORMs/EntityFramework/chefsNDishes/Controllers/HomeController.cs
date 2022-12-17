using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using chefsNDishes.Models;
using Microsoft.EntityFrameworkCore;

namespace chefsNDishes.Controllers;

public class HomeController : Controller
{
    private MyContext _context;

    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _context = context;
        _logger = logger;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        MyViewModel MyModel = new MyViewModel
        {
            AllChefs = _context.Chefs.Include(chef => chef.AllDishes).ToList()
        };
        return View(MyModel);
    }

    [HttpGet("dishes")]
    public IActionResult Privacy()
    {   
        MyViewModel MyModel = new MyViewModel
        {
            AllDishes = _context.Dishes.Include(dish => dish.Chef).ToList()
        };
        return View(MyModel);
    }

    [HttpGet("chefs/new")]
    public IActionResult AddAChef()
    {
        return View();
    }

    [HttpPost("chefs/create")]
    public IActionResult CreateChef(Chef newChef)
    {
        if(ModelState.IsValid)
        {
            _context.Add(newChef);
            _context.SaveChanges();
            return RedirectToAction("Index");
        } else {
            return View("AddAChef");
        }
    }

    [HttpGet("dishes/new")]
    public IActionResult AddADish()
    {
        // MyViewModel MyModel = new MyViewModel
        // {
        //     AllDishes = _context.Dishes.ToList()
        // };
        ViewBag.AllChefs = _context.Chefs.ToList();
        return View();
    }

    [HttpPost("dishes/create")]
    public IActionResult CreateDish(Dish newDish)
    {
        if(ModelState.IsValid)
        {
            _context.Add(newDish);
            _context.SaveChanges();
            return RedirectToAction("Privacy");
        } else {
            ViewBag.AllChefs = _context.Chefs.ToList();
            return View("AddADish");
        }

    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
