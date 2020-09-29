let re 
re =  /hello/
re = /hello/i //  i = case insensitive
// re = /hello/g  g = global search

//console.log(re)
//console.log(re.source)

// exec() return result in an array or null

// let result = re.exec("hello ashish")
// console.log(result)
// console.log(result[0])

////////////////////////////////////////////////////////////////////////

// test() returns true or false  

// const result = re.test("hello")
// console.log(result)

///////////////////////////////////////////////////////////////////////

// match() - Return result  array or null

// const str = "hello there"
// const result = str.match(re)
// console.log(result)

///////////////////////////////////////////////////////////////////////////

// search() returns index of first match, if not found return -1

// const str = "hello there"
// const result = str.search(re)
// console.log(result)

// replace() -  Return new string with some or all matches of a pattern 

const str = "hello there"
const result = str.replace(re, "hi")
console.log(result)




