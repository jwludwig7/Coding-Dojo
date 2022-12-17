// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

List<Eruption> eruptions = new List<Eruption>()
{
    new Eruption("La Palma", 2021, "Canary Is", 2426, "Stratovolcano"),
    new Eruption("Villarrica", 1963, "Chile", 2847, "Stratovolcano"),
    new Eruption("Chaiten", 2008, "Chile", 1122, "Caldera"),
    new Eruption("Kilauea", 2018, "Hawaiian Is", 1122, "Shield Volcano"),
    new Eruption("Hekla", 1206, "Iceland", 1490, "Stratovolcano"),
    new Eruption("Taupo", 1910, "New Zealand", 760, "Caldera"),
    new Eruption("Lengai, Ol Doinyo", 1927, "Tanzania", 2962, "Stratovolcano"),
    new Eruption("Santorini", 46, "Greece", 367, "Shield Volcano"),
    new Eruption("Katla", 950, "Iceland", 1490, "Subglacial Volcano"),
    new Eruption("Aira", 766, "Japan", 1117, "Stratovolcano"),
    new Eruption("Ceboruco", 930, "Mexico", 2280, "Stratovolcano"),
    new Eruption("Etna", 1329, "Italy", 3320, "Stratovolcano"),
    new Eruption("Bardarbunga", 1477, "Iceland", 2000, "Stratovolcano")
};
// Example Query - Prints all Stratovolcano eruptions
IEnumerable<Eruption> stratovolcanoEruptions = eruptions.Where(c => c.Type == "Stratovolcano");
PrintEach(stratovolcanoEruptions, "Stratovolcano eruptions.");
// Execute Assignment Tasks here!

Eruption? firstErutpionChile = eruptions.FirstOrDefault(c => c.Location == "Chile");
System.Console.WriteLine(firstErutpionChile + "==================================");

// =================================================

Eruption? firstHawaiianIS = eruptions.FirstOrDefault(c => c.Location == "Hawaiian Is");
if(firstHawaiianIS == null)
{
    System.Console.WriteLine("No Hawaiian Is Eruption found");
}
else
{
System.Console.WriteLine(firstHawaiianIS + "=====================================");
}
// ================================================

Eruption? firstGreenland = eruptions.FirstOrDefault(c => c.Location == "GreenLand");
if(firstGreenland == null)
{
    System.Console.WriteLine("No Greenland Eruption found");
}
else
{
    System.Console.WriteLine(firstGreenland + "==================================");
}
// ======================================================

Eruption? firstNewZealand = eruptions.Where(c => c.Year > 1900).FirstOrDefault(c => c.Location == "New Zealand");
System.Console.WriteLine(firstNewZealand);

// ===========================================================

IEnumerable<Eruption> volcanoElevation = eruptions.Where(c => c.ElevationInMeters > 2000);
PrintEach(volcanoElevation, "Volcano's Elevation");

// ==============================================================

List<Eruption> startsWL = eruptions.Where(v => v.Volcano.StartsWith("L")).ToList();
PrintEach(startsWL, "Starts with L");
System.Console.WriteLine("Erutptions Found " + startsWL.Count());

// =================================================================

int? highestEl = eruptions.Max(c => c.ElevationInMeters);
System.Console.WriteLine(highestEl + " m is the highest");

// ================================================================


Eruption? highestElVolcano = eruptions.FirstOrDefault(v => v.ElevationInMeters == highestEl);
System.Console.WriteLine(highestElVolcano);

// ==============================================================

IEnumerable<Eruption> allEruptions = eruptions.OrderBy(v => v.Volcano);
PrintEach(allEruptions, "All Eruptions");

// ===============================================================

int total = eruptions.Sum(v => v.ElevationInMeters);
System.Console.WriteLine(total + " is the total");

// ===============================================================

bool after2000 = eruptions.Any(a => a.Year == 2000);
System.Console.WriteLine(after2000);

// =================================================================

IEnumerable<Eruption> stratovolcanoEruptions3 = eruptions.Where(c => c.Type == "Stratovolcano").Take(3);
PrintEach(stratovolcanoEruptions3, "Stratovolcano eruptions Top 3.");

// =======================================================================

IEnumerable<Eruption> before1000 = eruptions.Where(c => c.Year < 1000).OrderBy(s=> s.Volcano);
PrintEach(before1000, "Before 1000CE Alphabetically.");

// ======================================================================

IEnumerable<string> redo = eruptions.Where(c => c.Year < 1000).OrderBy(s=> s.Volcano).Select(e => e.Volcano);
PrintEach2(redo, "Redo");



// Helper method to print each item in a List or IEnumerable. This should remain at the bottom of your class!
static void PrintEach(IEnumerable<Eruption> items, string msg = "")
{
    Console.WriteLine("\n" + msg);
    foreach (Eruption item in items)
    {
        Console.WriteLine(item.ToString());
    }
}

static void PrintEach2(IEnumerable<string> items, string msg = "")
{
    Console.WriteLine("\n" + msg);
    foreach (string item in items)
    {
        Console.WriteLine(item.ToString());
    }
}

