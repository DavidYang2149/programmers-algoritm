/*
  요구사항
1. 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구한다.

  필요기술
1. 배열의 사용법

  후기
1. 시간 제한: 2시간 / 사용 시간 20분
*/

function solution(array, commands) {
  let answer = [];

  commands.forEach(setting => {
    let sortArray = array.slice(--setting[0], setting[1]).sort((a, b) => a - b);
    answer.push(sortArray[--setting[2]]);
  });

  return answer;
}

// node sort/K번째수.js
// console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])); // [5, 6, 3]
