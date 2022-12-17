#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace chefsNDishes.Models;
public class Chef
{
    [Key]
    public int ChefId { get; set; }

    [Required]
    [Display(Name = "First Name:")]
    public string FirstName { get; set; }

    [Required]
    [Display(Name = "Last Name:")]
    public string LastName { get; set; }

    [Required]
    [Display(Name = "Date of Birth:")]
    [DataType(DataType.Date)]
    [Birthday]
    public DateTime DOB { get; set; }

    public List<Dish> AllDishes {get;set;} = new List<Dish>();

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    [NotMapped]
    public int Age
    {
        get{
            DateTime now = DateTime.Today;
            int age = now.Year - DOB.Year;
            if(DOB > now.AddYears(-age)) age--;
            return age;
        }
    }
}

public class BirthdayAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object? value, ValidationContext validationContext)
    {
        if((DateTime) value > DateTime.Now)
        {
            return new ValidationResult("Birthday must be in the past");
        }else{
            return ValidationResult.Success;
        }
    }
}
