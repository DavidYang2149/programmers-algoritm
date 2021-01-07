/*
  요구사항
1. 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 찾아라.

  필요기술
1. 배열의 사용법

  후기
1. 시간 제한: 2시간 / 사용 시간: 30분 (포기)
2. 0이 연속해서 들어오는 케이스가 있다! (0000 표기 주의)
*/

function solution(numbers) {
  let answer = numbers.map(number => number.toString()).sort((a, b) => (b + a) - (a + b)).reduce(((acc, number) => acc + number), "");
  return answer.replace(/(^0+)/, '0');
}

// node sort/가장-큰-수.js
// console.log(solution([6, 10, 2])); // "6210"
// console.log(solution([3, 30, 34, 5, 9])); // "9534330"
