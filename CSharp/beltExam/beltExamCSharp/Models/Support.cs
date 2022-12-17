#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace beltExamCSharp.Models;
public class Support 
{
    [Key]
    public int SupportId {get;set;}

    [Required]
    public int UserId {get;set;}
    public User? User {get;set;}

    [Required]
    public int ProjectId {get;set;}
    public Project? Project {get;set;}

    [Required]
    // [Range(1, int.MaxValue)]
    public double Amount {get;set;}

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;


}