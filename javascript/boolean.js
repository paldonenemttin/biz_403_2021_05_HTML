console.log("a" == "a");

let num = 3;

// java와 같은 경우는 if()문에서
// Single EQ(=) 를 사용하면 syntex error가 난다
// if (num = method()) == 3)

// 다만 다음과 같은
/*


 */

// js에서는 다음과 같은 코드가 논리적으론
// 문제가 될 수 있지만 문법저긍로는 정당하다
// if((num = 5)) == true)
if ((num = 5)) {
  console.log("같은 값");
}

// js에서는
// 숫자 0, false, null, undetind, NaN을 제외한
// 모든 것은 boolean에서 true로 취급된다

if (0) {
  console.log(true);
} else {
  console.log(false);
}

/*
동등연산자( == )
  자동으로 형변환이 발생한다
  0 == "0" 을 비교하면 문자열 '0'을 숫자 0으로 자ㅗㄷㅇ형변황르 해버린다
  문자열과 숫자의 비교지만 내용만 같으면
  같은 거승로 true갑싱 된다
일치연산자( === )
  무조건 자신의 형(type)을 유지하면서 비교
  0 === '0'을 비교하면
*/

let num2 = 3;
let num3 = "3";

console.log(num2 == num3);
console.log(num2 === num3);

console.log("" == "0");
console.log("" == 0);

// boolean true를 문자열 ""
console.log("true" == true);
console.log("false" == false);

// 문자열 "0"을 숫자 영으로 변환
console.log("0" == false);

// 숫자 0은 당연이 false이므로 결과를 true
// 숫자 0이 false인가? > true
console.log(0 == false);

// 동등 연산자에서는 null 하고 undefinded을
// null == undefined 할때만 true로 인식하고
// 다른 이외의 값과 비교할때는 무조건 false
// 숫자 0, null, undefined등은
// if에서 false로  인식을 하지만
// 동등연산자
console.log(null == undefined);
console.log(null == false);
console.log(undefined == false);
console.log(null == 0);
console.log(undefined == 0);
console.log(NaN == false);

//

let un1 = null;
// 1번 코드
if (un1) {
  console.log(true);
} else {
  console.log(false);
}

// 2번 코드
if (un1 == null) {
}

// 3번 코드
if (un1 == false) {
}

// 일반적으로 숫자형과 문자열의 데이터가
// 같은지 (일치하는지) 알아보고 싶을때는
// 일치 연산자를 사용하는 것이 좋다

console.log("3" === 3);

// parseInt() 문자열형 숫자를 실제 숫자로
// 변환하는 js함수
// type이 다른 두 값을 비교하고자 할때는
// 코드가 다소 복잡해지지만
// 강제 형변환을 하고 일치 연산자로 비교하는 것이
// 논리적 오류를 막을 수 있다
console.log(parseInt("3") == 3);

// isNaN(값)
// 값이 숫자로 변환가능한가?
// 불가능하면 true
// 할수 있음 false
console.log(isNaN("3"));
console.log(isNaN(3));
if ("3" == NaN) {
  console.log(true);
} else {
  console.log(false);
}
console.log(isNaN("A")); // true
// 값 비교가 아닌 type 비교 이므로 false
console.log("A" == NaN); // false
