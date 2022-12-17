using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using productsAndCategories.Models;
using Microsoft.EntityFrameworkCore;

namespace productsAndCategories.Controllers;

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
        // MyViewModel MyModel = new MyViewModel
        // {
        //     AllProducts = _context.Products.ToList()
        // };
        ViewBag.AllProducts = _context.Products.ToList();
        return View();
    }

    [HttpPost("products/create")]
    public IActionResult CreateProduct(Product newProduct)
    {
        if (ModelState.IsValid)
        {
            _context.Add(newProduct);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        else
        {
            // MyViewModel MyModel = new MyViewModel
            // {
            //     AllProducts = _context.Products.ToList()
            // };
            ViewBag.AllProducts = _context.Products.ToList();
            return View("Index");
        }
    }

    [HttpGet("categories")]
    public IActionResult Privacy()
    {
        ViewBag.AllCategories = _context.Categories.ToList();
        return View();
    }

    [HttpPost("categories/create")]
    public IActionResult CreateCategory(Category newCategory)
    {
        if (ModelState.IsValid)
        {
            _context.Add(newCategory);
            _context.SaveChanges();
            return RedirectToAction("Privacy");
        }
        else
        {
            // MyViewModel MyModel = new MyViewModel
            // {
            //     AllProducts = _context.Products.ToList()
            // };
            ViewBag.AllCategories = _context.Categories.ToList();
            return View("Privacy");
        }
    }


    [HttpGet("products/{id}")]
    public IActionResult OneProduct(int id)
    {
        Product? OneProduct = _context.Products
                                                .Include(a => a.ProductsToCategory)
                                                .ThenInclude(a => a.Category)
                                                .FirstOrDefault(a => a.ProductId == id);
        // Association? emptyAss = new Association();
        // emptyAss.ProductId = OneProduct.ProductId;
        MyViewModel MyModel = new MyViewModel
        {
            // Association = emptyAss,
            Product = OneProduct,
            AllAssociations = _context.Associations
                                                    .Include(a => a.Category)
                                                    .Where(a => a.ProductId == id)
                                                    .ToList()
        };
        ViewBag.OneProduct = _context.Products.FirstOrDefault(s => s.ProductId == id);
        ViewBag.AllCategories = _context.Categories
                                                    .OrderBy(s => s.Name)
                                                    .Include(a => a.CategoryToProduct)
                                                    .Where(a => a.CategoryToProduct
                                                    .All(b => b.ProductId != id))
                                                    .ToList();
        return View(MyModel);
    }

    [HttpPost("products/add")]
    public IActionResult AddProduct(int id, Association newAdd)
    {
        if (ModelState.IsValid)
        {
            _context.Add(newAdd);
            _context.SaveChanges();
            return RedirectToAction("OneProduct", new { id = newAdd.ProductId });
        }
        else
        {
            ViewBag.OneProduct = _context.Products.FirstOrDefault(s => s.ProductId == id);
            ViewBag.AllCategories = _context.Categories
                                                        .OrderBy(s => s.Name)
                                                        .Include(a => a.CategoryToProduct)
                                                        .Where(a => a.CategoryToProduct
                                                        .All(b => b.ProductId != id))
                                                        .ToList();
            return View("OneProduct");
        }
    }

    [HttpGet("categories/{id}")]
    public IActionResult OneCategory(int id)
    {
        Category? OneCategory = _context.Categories
                                                    .Include(a => a.CategoryToProduct)
                                                    .ThenInclude(a => a.Product)
                                                    .FirstOrDefault(a => a.CategoryId == id);
        // Association? emptyAss = new Association();
        // emptyAss.ProductId = OneProduct.ProductId;
        MyViewModel MyModel = new MyViewModel
        {
            // Association = emptyAss,
            Category = OneCategory,
            AllAssociations = _context.Associations
                                                    .Include(a => a.Product)
                                                    .Where(a => a.CategoryId == id)
                                                    .ToList()
        };
        ViewBag.OneCategory = _context.Categories.FirstOrDefault(s => s.CategoryId == id);
        ViewBag.AllProducts = _context.Products
                                                    .OrderBy(s => s.Name)
                                                    .Include(a => a.ProductsToCategory)
                                                    .Where(a => a.ProductsToCategory
                                                    .All(b => b.CategoryId != id))
                                                    .ToList();
        return View(MyModel);
    }

    [HttpPost("categories/add")]
    public IActionResult AddCategory(int id, Association newAdd)
    {
        if (ModelState.IsValid)
        {
            _context.Add(newAdd);
            _context.SaveChanges();
            return RedirectToAction("OneCategory", new { id = newAdd.CategoryId });
        }
        else
        {
            ViewBag.OneCategory = _context.Categories.FirstOrDefault(s => s.CategoryId == id);
        ViewBag.AllProducts = _context.Products
                                                    .OrderBy(s => s.Name)
                                                    .Include(a => a.ProductsToCategory)
                                                    .Where(a => a.ProductsToCategory
                                                    .All(b => b.CategoryId != id))
                                                    .ToList();
            return View("OneCategory");
        }
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
