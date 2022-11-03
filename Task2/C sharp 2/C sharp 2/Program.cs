int[] arr = new int[] { 1, 4, 3, 4, 2, 7, 8, 7, 3 };

Console.WriteLine("Arrayde tekrarlanan ededler: ");
for (int i = 0; i < arr.Length; i++)
{
    for (int j = i + 1; j < arr.Length; j++)
    {
        if (arr[i] == arr[j])
            Console.WriteLine(arr[j]);

    }
}
Console.WriteLine("4=4");
Console.WriteLine("3=3");
Console.WriteLine("7=7");
