let re ;
//literal characters
 re = /hello/

 re = /hello/i

 // Metacharacter symbols

 re = /^h/i;  // must start with

 re = / world$/i // must end with

 re = /^hello$/i // begin and end with

 re = /H.llo/ // matches any on char

 // string to match

 const str = "HKllo"

 // log results

 const  result = re.exec(str);
 console.log(result);

 function reTest(re,str) {

    if(re.test(str)) {

        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does not match ${re.source}`);
    }
 }

 reTest(re,str)

