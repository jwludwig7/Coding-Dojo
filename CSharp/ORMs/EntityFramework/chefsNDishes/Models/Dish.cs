#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace chefsNDishes.Models;
public class Dish
{
    [Key]
    public int DishId {get;set;}

    [Required]
    [Display(Name = "Name Of Dish")]
    public string Name {get;set;}

    [Required]
    [Display(Name = "# of Calories")]
    [Range(1,int.MaxValue)]
    public int? Calories {get;set;}

    [Required]
    [Range(1,5, ErrorMessage = "Pick a valid Tastiness number")]
    public int Tastiness {get;set;}

    [Display(Name ="Chef's Name")]
    public int ChefId {get; set;}

    public Chef? Chef {get;set;}

    public DateTime CreatedAt { get; set; } = DateTime.Now;

    public DateTime UpdatedAt { get; set; } = DateTime.Now;

}