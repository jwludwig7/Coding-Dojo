#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace weddingPlanner.Models;
public class PlanWedding
{
    [Key]
    public int PlanWeddingId {get;set;}

    [Required]
    [Display(Name = "Wedder One")]
    public string WedderOne {get;set;}

    [Required]
    [Display(Name = "Wedder Two")]
    public string WedderTwo {get;set;}

    [Required]
    [WeddingDate]
    [DataType(DataType.Date)]
    public DateTime Date {get;set;}

    [Required]
    public string Address {get;set;}

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
    // public list of Response called GuestList this is added to when someone rsvps
    // many to many
    public List<Response> GuestList {get;set;} = new List<Response>();
    
    public int UserId {get;set;}

    // checking to see if someone have rsvp to the wedding
    public bool HasResponded (int UserId)
    {
        foreach(Response g in GuestList)
        {
            if(g.UserId == UserId)
            {
                return true;
            }
        }
        return false;
    }
}


public class WeddingDateAttribute : ValidationAttribute
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

// custom validator to make sure the date of the wedding is in the future
