// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");


// 1. Iterate and print values

// Given a List of strings, iterate through the List and print out all the values. Bonus: How many different ways can you find to print out the contents of a List? (There are at least 3! Check Google!)

static void PrintList(List<string> MyList)
{
    foreach (string values in MyList)
    {
        System.Console.WriteLine(values);
    }
}

// 2. Print Sum

// Given a List of integers, calculate and print the sum of the values.

static void SumOfNumbers(List<int> IntList)
{
    int sum = 0;
    foreach (int values in IntList)
    {
        sum += values;
        System.Console.WriteLine(sum);
    }
}

// 3. Find Max

// Given a List of integers, find and return the largest value in the List.

static int FindMax(List<int> IntList)
{
    int max = IntList[0];
    for (int idx = 0; idx < IntList.Count; idx++)
    {
        if (IntList[idx] > max)
        {
            max = IntList[idx];
        }
    }
    return max;
}

// 4. Square the Values

// Given a List of integers, return the List with all the values squared. (Hint: use your PrintList method to check that it worked!)

static List<int> SquareValues(List<int> IntList)
{
    // List<string> temp = new List<string>();
    // List<string> temp2 = new List<string>();
    for (int idx = 0; idx < IntList.Count; idx++)
    {
        IntList[idx] = IntList[idx] * IntList[idx];
    }
    return IntList;
}

// 5. Replace Negative Numbers with 0

// Given an array of integers, return the array with all values below 0 replaced with 0.

static int[] NonNegatives(int[] IntArray)
{
    for (int idx = 0; idx < IntArray.Length; idx++)
    {
        if (IntArray[idx] < 0)
        {
            IntArray[idx] = 0;
        }
    }
    return IntArray;
}

// 6. Print Dictionary

// Given a dictionary, print the contents of the said dictionary.

static void PrintDictionary(Dictionary<string,string> MyDictionary)
{
    foreach(KeyValuePair<string,string> entry in MyDictionary)
    {
        System.Console.WriteLine($"{entry.Key} - {entry.Value}");
    }
}

// 7. Find Key

// Given a search term, return true or false whether the given term is a key in a dictionary.
static bool FindKey(Dictionary<string,string> MyDictionary, string SearchTerm)
{
    foreach(KeyValuePair<string,string> entry in MyDictionary)
    {
        if(entry.Key == SearchTerm || entry.Value == SearchTerm)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    return false;
}

// 8. Generate a Dictionary

// Given a List of names and a List of integers, create a dictionary where the key is a name from the List of names and the value is a number from the List of numbers. Assume that the two Lists will be of the same length. Don't forget to print your results to make sure it worked.

// Ex: Given ["Julie", "Harold", "James", "Monica"] and [6,12,7,10], return a dictionary
// {
//	"Julie": 6,
//	"Harold": 12,
//	"James": 7,
//	"Monica": 10
// } 
static Dictionary<string,int> GenerateDictionary(List<string> Names, List<int> Numbers)
{
    Dictionary<string,int> newDict = new Dictionary<string, int>();
    newDict.Add("Julie", 6);
    newDict.Add("Harold", 12);
    newDict.Add("James", 7);
    newDict.Add("Monica", 10);

    return newDict;
}














