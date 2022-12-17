#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace beltExamCSharp.Models;
public class Project
{
    [Key]
    public int ProjectId {get;set;}

    [Required]
    public string Title {get;set;}

    [Required]
    [Range(0.01, double.MaxValue)]
    public double Goal {get;set;}

    [Required]
    [ProjecetDate]
    [DataType(DataType.Date)]
    public DateTime EndDate {get;set;}

    [Required]
    [MinLength(20, ErrorMessage = "Be more descriptive!!!!")]
    public string Description {get;set;}

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    // one to many
    [Required]
    public int UserId {get;set;}
    public User? Creator {get;set;}

    // many to many
    public List<Support> Supported {get;set;} = new List<Support>();

}

public class ProjecetDateAttribute : ValidationAttribute
{
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        if(value == null){
        return new ValidationResult("Date must be entered");

        }
        if((DateTime) value < DateTime.Now)
        {
            return new ValidationResult("Date must be in the Future");
        }else{
            return ValidationResult.Success;
        }
    }
}