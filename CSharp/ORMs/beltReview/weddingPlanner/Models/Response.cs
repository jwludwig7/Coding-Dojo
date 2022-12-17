#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace weddingPlanner.Models;
public class Response
{
    [Key]
    public int ResponseId {get;set;}

    public int UserId {get;set;}

    public int PlanWeddingId {get;set;}

    // public class User? called USer may or may not be null
    public User? User {get;set;}

    // public class of PlanWedding? called PLanwedding may or may not be null
    public PlanWedding? PlanWedding {get;set;}

    public DateTime CreatedAt { get; set; } = DateTime.Now;

    public DateTime UpdatedAt { get; set; } = DateTime.Now;

}