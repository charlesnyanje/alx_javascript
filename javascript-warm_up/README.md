Tasks

0. First constant, first print
mandatory
Write a script that prints “JavaScript is amazing”:

You must create a constant variable called myVar with the value “JavaScript is amazing”
You must use console.log(...) to print all output
You are not allowed to use var
guillaume@ubuntu:~/$ node 0-javascript_is_amazing.js 
JavaScript is amazing

GitHub repository: alx_javascript
Directory: javascript-warm_up
File: 0-javascript_is_amazing.js

1. 3 languages
mandatory
Write a script that prints 3 lines:

The first line: “C is fun”
The second line: “Python is cool”
The third line: “JavaScript is amazing”
You must use console.log(...) to print all output
You are not allowed to use var
guillaume@ubuntu:~/$ node 1-multi_languages.js 
C is fun
Python is cool
JavaScript is amazing
guillaume@ubuntu:~/$ 
Repo:

GitHub repository: alx_javascript
Directory: javascript-warm_up
File: 1-multi_languages.js
  
0/5 pts
2. Loop to languages
mandatory
Write a script that prints 3 lines: (like 1-multi_languages.js) but by using an array of string and a loop

The first line: “C is fun”
The second line: “Python is cool”
The third line: “JavaScript is amazing”
You must use console.log(...) to print all output
You are not allowed to use var
You are not allowed to use any if/else statement
You can use only one console.log
You must use a loop (while, for, etc.)
guillaume@ubuntu:~/$ node 6-multi_languages_loop.js 
C is fun
Python is cool
JavaScript is amazing
guillaume@ubuntu:~/$ 
Repo:

GitHub repository: alx_javascript
Directory: javascript-warm_up
File: 6-multi_languages_loop.js
  
0/10 pts
3. Object
mandatory
Update this script to replace the value 12 with 89:

You are not allowed to use var
guillaume@ubuntu:~/$ cat 12-object.js
#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);
/*
YOUR CODE HERE
*/
console.log(myObject);

guillaume@ubuntu:~/$ node 12-object.js
{ type: 'object', value: 12 }
{ type: 'object', value: 89 }
guillaume@ubuntu:~/$ 
Repo:

GitHub repository: alx_javascript
Directory: javascript-warm_up
File: 12-object.js
  
0/6 pts
4. Add file
mandatory
Write a function that returns the addition of 2 integers.

The function must be visible from outside
The name of the function must be add
You are not allowed to use var
Tip

guillaume@ubuntu:~/$ cat 13-main.js
#!/usr/bin/node
const add = require('./13-add').add;
console.log(add(3, 5));
guillaume@ubuntu:~/$ ./13-main.js
8
guillaume@ubuntu:~/$ 
Repo:

GitHub repository: alx_javascript
Directory: javascript-warm_up
File: 13-add.js