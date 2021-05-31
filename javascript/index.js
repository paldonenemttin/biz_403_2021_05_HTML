console.log("반갑");
let num1 = 30;
let num2 = 40;
let sum = num1 + num2;
console.log("30 + 40 = ", sum);

/*
var 키워드는 java의 public과 성질이 유사하다
한번 선언되 ㄴ변수를 다시 선언 할 수 있다
*/
var strName = "유진아 보고 싶다";
var strNation = "리히텐슈타인";
strName = 100;
var strName = 99 * 100;

/*
ES6 이상에서 사용하는 변수 선언 키웓
private와 성질이 유사하다
한번 선언된 변수를 다시 선언 할 수 없다
*/
let nation1 = "corea";
nation = 200;
let nation2 = "대한민국";

// 배열을 선언하기
let array = [1, 2, 3, 4, 5, 6];

// 배열에서 값을 읽을때
console.log(array[0]);

// 배열 요소중 0번째와 2번째를 읽을때
console.log(array[(0, 2)]);

// 배열요소의 일부를 복사할때
let array2 = [0, 2, 4];
console.log(array2);
