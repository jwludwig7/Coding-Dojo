#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace formSubmission.Models;

public class User
{
    [Required]
    [MinLength(2, ErrorMessage ="Name must be at least 2 character long")]
    public string Name {get;set;}
    [Required]
    [EmailAddress]
    [Display(Name = "Email Address")]
    public string Email {get;set;}
    [Required]
    [DataType(DataType.Date)]
    [Display(Name = "Date of Birth")]
    public DateTime DoB {get;set;}
    [Required]
    [DataType(DataType.Password)]
    [MinLength(8, ErrorMessage ="Password must be at least 8 character long")]
    public string Password {get;set;}
    [Required]
    [OddNumber]
    [Display(Name = "Favorite Odd Number")]
    public int FavOddNum {get;set;}
}

public class PastDateAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)    
    {
        if((DateTime) value > DateTime.Now)
        {  
            return new ValidationResult("Date must be in the past!");   
        } else {   
            return ValidationResult.Success;  
        }  
    }
}
public class OddNumberAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        if(((int)value) % 2 == 0)
        {
            return new ValidationResult("Number must be odd!");
        } else {
            return ValidationResult.Success;
        }
    }
}