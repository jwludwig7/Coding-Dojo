#pragma warning disable CS8618
namespace beltExamCSharp.Models;
public class MyViewModel
{
    public User User {get;set;}
    public List<User> AllUsers {get;set;}
    public Project Project {get;set;}
    public List<Project> AllProjects {get;set;}
    public Support Support {get;set;}
    public List<Support> AllSupporters {get;set;}
    public int TotalEarned {get;set;}
}
