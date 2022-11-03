	function printRepeating(arr , size)
	{
        console.log("Arrayde tekrarlanan ededler:")
        var i, j;
		for (i = 0; i < size-1; i++)
		{
			for (j = i + 1; j < size; j++)
			{
				if (arr[i] == arr[j])	
                console.log(arr[i] + " ");
			}
		}
	}

var arr = [1, 4, 3, 4, 2, 7, 8, 7, 3] ;
var arr_size = arr.length;
printRepeating(arr, arr_size);
console.log("4=4")
console.log("3=3")
console.log("7=7")