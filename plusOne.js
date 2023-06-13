var arr = [1,2,2], len = arr.length, result = []
var a = arr.join("")
var temp = parseInt(a) + 1
for(let i = 0; i < len; i++)
{
    result.unshift(temp%10)
    temp = parseInt(temp / 10)
}
console.log(result)