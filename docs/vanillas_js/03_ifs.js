// # if 기본 구문
if (true) {
} else if (true) {
} else {
}
// 중괄호로 끝나는 구문은 세미콜론 안찍어도됨

let numbers = 10;
if (numbers > 0) {
    console.log("숫자는 양수");
} else if (numbers < 0) {
    console.log("숫자는 음수");
} else {
    console.log(" 0 입니다.")
}
// VM2766:2 숫자는 양수

// # 삼항 연산자(Ternary Operation) : 항목이 3개(condition, condition문이 참일때, 거짓일때)
if (true) {
} else if (true) {
} else {
}
// # 기본 구조 -> (condition) ? 'condition문이 참일때' : "거짓일때" ;
result = (true) ? 'as true' : "as false" ;

// # Ternary 예제
result = (numbers > 0) ? '양수!' : "음수!" ;
// '양수!'
console.log(`숫자는 ${result}`);
// VM2899:1 숫자는 양수!