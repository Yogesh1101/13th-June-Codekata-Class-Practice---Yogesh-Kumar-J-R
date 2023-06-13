var arr = [3, 2, 2, 3], value = 3, temp = 0, remove = []
for(let i = 0; i < arr.length; i++)
{
    if(arr[i] != value)
    {
        remove[temp] = arr[i]
        temp++ 
    }
}
console.log(remove)