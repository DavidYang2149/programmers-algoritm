/*
  요구사항
1. 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성하라.

  필요기술
1. 해시의 접근 방법 찾기

  후기
1. 시간 제한: 2시간 / 사용 시간: 10분
*/

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let index in participant) {
    if (participant[index] !== completion[index]) {
      return participant[index];
    }
  }
}

// node hash/완주하지-못한-선수.js
// console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); // "leo"
// console.log(solution(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola'])); // "vinko"
// console.log(solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])); // "mislav"
// console.log(solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])); // "mislav"
