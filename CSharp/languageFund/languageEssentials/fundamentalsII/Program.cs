// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");


// The Three basic arrays

// Create an array with the integers 0 through 9 inside

int[] zeroToNineArray = new int[10]  {0,1,2,3,4,5,6,7,8,9};

// Create an array with the names "Tim", "Martin", "Nikki", and "Sara"

string[] namesArray = new string[] {"Tim", "Martin", "Nikki", "Sara"};

// Create an array of length 10. Then fill it with alternating true/false values, starting with true. (Tip: do this using logic! Do not hard-code the values in!)

// string[] tFArray = new string[] {"true", "false","true", "false","true", "false"};
// // tFArray = new string[] {};
// foreach(string tf in tFArray)
// {
//     System.Console.WriteLine(tf);
// }

string[] tfArray = new string[10];
for (int idx = 0; idx < tfArray.Length; idx++)
{
    if(idx % 2 == 0)
    {
        // System.Console.WriteLine("true");
    }
    if(idx % 2 != 0)
    {
        // System.Console.WriteLine("false");
    }
}

// List of Flavors

// Create a List of ice cream flavors that holds at least 5 different flavors. (Feel free to add more than 5!)

List<string> iceCream = new List<string>();
iceCream.Add("cookies and cream");
iceCream.Add("vanilla");
iceCream.Add("choc");
iceCream.Add("twist");
iceCream.Add("strawberry");

// Output the length of the List after you added the flavors.

for (int idx = 0; idx < iceCream.Count; idx++)
{
    // System.Console.WriteLine($"Count is {idx + 1}");
}

// Output the third flavor in the List.

// System.Console.WriteLine(iceCream[3]);

// Now remove the third flavor using its index location.

iceCream.RemoveAt(3);

// Output the length of the List again. It should now be one fewer.
for (int idx = 0; idx < iceCream.Count; idx++)
{
    // System.Console.WriteLine($"Count is {idx + 1}");
}

// User Dictionary

// Create a dictionary that will store string keys and string values.

Dictionary<string,string> user = new Dictionary<string,string>();

// Add key/value pairs to the dictionary where:
// Each key is a name from your names array.
// Each value is a randomly selected flavor from your flavors List
user.Add("Tim", "Martin", "Nikki", "Sara");
Random rand = new Random();
for(int idx = 0; idx < iceCream.Count; idx++)
{
    int num = rand.Next(0,4);
    // System.Console.WriteLine($"Random number: {num}");
    System.Console.WriteLine($"{iceCream[num]}");



user.Add($"{iceCream[num]}");
}



// Loop through the dictionary and print out each user's name and their associated ice cream flavor.

foreach(KeyValuePair<string,string> entry in user)
{
    System.Console.WriteLine($"{entry.Key} - {entry.Value}");
}



