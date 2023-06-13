var number = 5
var result = []
if(number == 0)
{
    console.log(result)
}
result.push([1])
for(let i = 1; i < number; i++)
{
    var a = result[i-1]
    let temp = []
    temp.push(1)
    for(let j = 1; j < i; j++)
    {
        temp.push(a[j-1] + a[j])
    }
    temp.push(1)
    result.push(temp)
}
console.log(result)