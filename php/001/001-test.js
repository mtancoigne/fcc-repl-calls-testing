/**
This file contains the PHP tests for an given challenge
*/
const CHALLENGE_ASSERTIONS=[
  "\n\n?><?php",
  "// Array:",
  "// -------",
  "// Length:",
  "assert('count($arr)===3', 'The array is not the good size. It must contain 3 elements');",
  "// Types:",
  "for($i=0; $i<count($arr); $i++){",
  	"assert( '(int)$arr[$i] === $arr[$i]', 'Element '.($i+1).' is not an integer');",
  "}",
  "// String:",
  "// -------",
  "// Value:",
  "assert('$str===\"Hello world\"', 'Check your string, something is wrong.');",

  "// Function:",
  "// ---------",
  "// Output:",
  "assert('doSomeMaths(2,2)===4 && doSomeMaths(5,10)===50', 'Your doSomeMaths function should return the product of the two arguments.');",
  "?>"
].join("\n");
