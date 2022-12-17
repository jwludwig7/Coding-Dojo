#pragma warning disable CS8618
namespace weddingPlanner.Models;
public class MyViewModel
{
    public User User {get;set;}
    // public class of User called User

    public List<User> AllUsers {get;set;}
    // public List of Users called All Users

    public PlanWedding PlanWedding {get;set;}
    // public class of PlanWedding called PLanWedding

    public List<PlanWedding> AllPlannedWeddings {get;set;}
    // public List of PlanWedding called AllPlannedWedding

    public Response Response {get;set;}
    // public class of Response called Response

    public List<Response> PlannedWeddings {get;set;}
    // public List of Response called PlannedWeddings

    public List<Response> AllResponses {get;set;}
    // public List of Response called AllREsponses
}