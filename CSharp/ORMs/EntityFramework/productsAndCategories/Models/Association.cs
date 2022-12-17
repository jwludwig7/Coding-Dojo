#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace productsAndCategories.Models;
public class Association
{
    [Key]
    public int AssociatoinId {get;set;}

    // Track the IDs of our joining models
    public int ProductId {get;set;}

    public int CategoryId {get;set;}

    // Navigation Properties
    public Product? Product {get;set;}
    public Category? Category {get;set;}

    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;

}