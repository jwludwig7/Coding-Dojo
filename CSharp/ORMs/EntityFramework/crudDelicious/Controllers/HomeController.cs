using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using crudDelicious.Models;

namespace crudDelicious.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    private MyContext _context;

    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;

        _context = context;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        List<Dish> AllDishes = _context.Dishes.ToList();
        return View(AllDishes);
    }

    [HttpGet("dishes/new")]
    public IActionResult Privacy()
    {
        return View();
    }

    [HttpPost("dishes/create")]
    public IActionResult Create(Dish newDish)
    {
        System.Console.WriteLine("in thee create method");
        if(ModelState.IsValid)
        {
            _context.Add(newDish);
            _context.SaveChanges();
            return RedirectToAction("Index");
        } else {
            return View("Privacy");
        }
    }

    [HttpGet("dishes/{id}")]
    public IActionResult ShowDish(int id)
    {
        Dish? OneDish = _context.Dishes.FirstOrDefault(a => a.DishId == id);
        return View(OneDish);
    }

    [HttpPost("dishes/{DishId}/destroy")]
    public IActionResult DestroyDish(int DishId)
    {
        Dish? DishTODelete = _context.Dishes.SingleOrDefault(i => i.DishId == DishId);
        _context.Dishes.Remove(DishTODelete);
        _context.SaveChanges();
        return RedirectToAction("Index");
    }

    [HttpGet("dishes/{DishId}/edit")]
    public IActionResult EditDish(int DishId)
    {
        Dish? DishToEdit = _context.Dishes.FirstOrDefault(i => i.DishId == DishId);
        return View(DishToEdit);
    }

    [HttpPost("dishes/{DishId}/update")]
    public IActionResult UpdateDish(Dish newDish, int DishId)
    {
        if(ModelState.IsValid)
        {
            Dish? OldDish = _context.Dishes.FirstOrDefault(i => i.DishId == DishId);
            OldDish.Name = newDish.Name;
            OldDish.Chef = newDish.Chef;
            OldDish.Calories = newDish.Calories;
            OldDish.Tastiness = newDish.Tastiness;
            OldDish.Description = newDish.Description;
            OldDish.UpdatedAt = DateTime.Now;
            _context.SaveChanges();
            return RedirectToAction("ShowDish", new {id=DishId});
        } else {
            return View("EditDish", newDish);
        }
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
