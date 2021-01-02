/*
  요구사항
1. 작업의 개수(작업 진도, 작업 속도)를 입력한다.
2. 배포의 순서를 나열한다.

  필요기술
1. 작업이 걸리는 일수를 나열한다. (map)
2. 하루 배포 시 최대 배포할 수 있는 개수를 배열로 나열한다. (loop)
*/
function solution(progresses, speeds) {
  let answer = [0];

  if (progresses.length !== speeds.length) return answer;

  let developDays = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
  let maxDay = developDays[0];
  let answerIndex = 0;

  for (let i = 0; i < developDays.length; i++) {
    if (maxDay >= developDays[i]) {
      answer[answerIndex] += 1;
      continue;
    }

    maxDay = developDays[i];
    answer[++answerIndex] = 1;
  }

  return answer;
}

// node stack-queue/기능개발.js
// result: [1, 3, 2]
// console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); 
