function simpleArraySum(ar) {
let i = 0,
arr = []
for(i; i< ar.length; i++){
arr.push(ar[i])
}
let reducer = (a, b)=>(a + b) 
return(arr.reduce(reducer))
}
