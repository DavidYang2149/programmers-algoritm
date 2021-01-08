/*
  요구사항
1. H-Index는 과학자의 생산성과 영향력을 나타내는 지표다.
2. 해당 지표값을 구하라.

  필요기술
1. 배열의 사용법

  후기
1. 시간 제한: 2시간 / 사용 시간: 40분
2. 로직이 작동하는 시간이 너무 오래걸려 답안을 찾아봄.
*/

function solution(citations) {
  let answer = 0;
  const sortedCitations = citations.sort((a, b) => b - a);

  while (answer + 1 <= sortedCitations[answer]) {
    answer++;
  }

  return answer;
}

// node sort/H-Index.js
console.log(solution([3, 0, 6, 1, 5])); // 3
