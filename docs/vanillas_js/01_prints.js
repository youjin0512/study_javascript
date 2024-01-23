let name = "youjin";
// undefined
console.log(name);
// VM394:1 youjin
let welcome = 'Hello World !';
// undefined
welcome;
// 'Hello World !'
let numbers = 55;
// undefined
numbers;
// 55

welcome;
// 'Hello World !'
'String :' + 'Hello world !';
// 'String :Hello world !'
"String : " + welcome;
// 'String : Hello World !'
let concats = "String : " + welcome;
// undefined
concats;
// 'String : Hello World !'

// # concats :  두 개를 합친다(붙인다)

numbers;
// 55
concats = concats + " Number:" + numbers;
// 'String : Hello World ! Number:55'
concats;
// 'String : Hello World ! Number:55
alert(concats);
// undefined

concats;
// 'String : Hello World ! Number:55'
`String : ${welcome}, Numbers:${numbers}`;
// 'String : Hello World !, Numbers:55'
let concats_tilt = `String : ${welcome}, Numbers:${numbers}`;
// undefined
concats_tilt;
// 'String : Hello World !, Numbers:55'
console.log(concats_tilt);
// VM1922:1 String : Hello World !, Numbers:55