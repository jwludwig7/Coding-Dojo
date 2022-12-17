#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace beltReview.Models;
public class MyViewModel
{
    // public Craft Craft {get;set;}
    // public Order Order {get;set;}
    public User User {get;set;}
    public int TotalSold {get;set;}
    public double MoneyMade {get;set;}
    public int CraftsBought {get;set;}
    public List<Order> YourSales {get;set;}
    public List<Order> YourOrders {get;set;}

}