using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MtMDemo.Models;

namespace MtMDemo.Controllers;

public class HomeController : Controller
{
    private MyContext _context;
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        MyViewModel MyModels = new MyViewModel
        {
            AllPokemon = _context.Pokemon.ToList()
        };
        return View(MyModels);
    }

    [HttpPost("pokemon/create")]
    public IActionResult CreatePokemon(Pokemon newPokemon)
    {
        if(ModelState.IsValid)
        {
            _context.Add(newPokemon);
            _context.SaveChanges();
            return RedirectToAction("Index");
        } else {
            MyViewModel MyModels = new MyViewModel
            {
                AllPokemon = _context.Pokemon.ToList()
            };
            return View("Index", MyModels);
        }
    }

    [HttpGet("moves")]
    public IActionResult Moves()
    {
        MyViewModel MyModels = new MyViewModel
        {
            AllMoves = _context.Moves.ToList()
        };
        ViewBag.AllMoves = new List<string>() {"Bug", "Dark", "Dragon", "Electric", "Fairy", "Fighting", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water"};
        return View(MyModels);
    }

    [HttpPost("moves/create")]
    public IActionResult CreateMove(Move newMove)
    {
        if(ModelState.IsValid)
        {
            _context.Add(newMove);
            _context.SaveChanges();
            return RedirectToAction("Moves");
        } else {
            MyViewModel MyModels = new MyViewModel
            {
                AllMoves = _context.Moves.ToList()
            };
            ViewBag.AllMoves = new List<string>() {"Bug", "Dark", "Dragon", "Electric", "Fairy", "Fighting", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water"};
            return View("Index", MyModels);
        }
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
