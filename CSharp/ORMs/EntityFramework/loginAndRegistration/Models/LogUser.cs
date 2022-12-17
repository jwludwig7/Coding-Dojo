#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace loginAndRegistration.Models;
public class LogUser
{
    [Required]
    [EmailAddress]
    [Display(Name ="Email:")]
    public string LEmail { get; set; }

    [Required]
    [DataType(DataType.Password)]
    [Display(Name ="Password:")]
    public string LPassword { get; set; }

}

