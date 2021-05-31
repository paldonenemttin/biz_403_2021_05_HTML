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
console.log(nom2 === num3);

console.log("" == "0");
console.log("" == 0);
