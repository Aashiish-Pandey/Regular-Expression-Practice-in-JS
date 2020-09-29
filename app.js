let re ;
//literal characters
 re = /hello/

 re = /hello/i

 // Metacharacter symbols

 re = /^h/i;  // must start with

 re = / world$/i // must end with

 re = /^hello$/i // begin and end with

 re = /H.llo/ // matches any on char

 re = /H*llo/ // any char 0 or more times

 re = /gre?a?y/ //optional char



 // Brackets [] - character Sets

 re = /gr[ae]y/i  // must be a or e
 re = /[GF]ray/i  // must be G or F
 re = /[^GF]ray/i  // match anything  except  a G or F
 re = /^[GF]ray/i  // should start with G or F

 re = /[A-Z]ray/ // match any upper case letter

 re = /[a-z]ray/ // match any lower case letter

 re = /[A-Za-z]ray/ // match any uppercase and lower case letter

 re = /[0-9]ray/  // match any digit


 // Braces {} - Quantifiers 

 re = /Hel{2}o/i  // must occur  exactly {m} times
 re = /Hel{2,4}o/i  // must occur   {m to n } times
 re = /Hel{2,}o/i  // must occur   atlest  {m } times


 // Paraenthesis () for grouping 

 re = /([0-9]x){3}$/


 // string to match

 const str = "0x1x7x"

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

