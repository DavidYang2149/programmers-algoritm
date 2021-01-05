/*
  요구사항
1. 프린터는 중요도가 높은 순으로 인쇄한다.

  필요기술
1. 배열에서 원본 순서를 저장한다.
2. 가장 앞쪽에 있는 배열을 기준으로 중요도가 높은 순위가 있는지 확인한다.

  후기
1. 시간 제한: 계속해서 생각하고 시도만 하는 것은 도움이 되지 않는다고 생각되어 제한 시간을 두었다(2시간).
2. 시간이 초과되어 인터넷에 있는 답안을 찾아보았다. 
3. some 함수 사용(https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
4. 본질적인 값을 찾는 방법을 고안해야 한다.
*/

function solution(priorities, location) {
  let targetIndex = location; // user가 선택한 index
  let answer = 1;
  let first = -1;

  while (priorities.length > 0) {
    // 1. 가장 앞에 있는 문서를 추출
    first = priorities.shift();

    // 2. 중요도 높은 문서가 존재 시 뒤로 넣음
    if (priorities.some((value, index) => value > first)) {
      priorities.push(first);
    }
    else {
      if (targetIndex === 0) {
        break;
      }
      else answer++;
    }

    /*
      3. 사용자가 선택한 문서가 중요도가 제일 높지 않은 경우
      현재 대기목록의 맨 끝으로 index를 옮긴다.
    */
    if (targetIndex === 0) targetIndex = priorities.length - 1;
    else targetIndex--;
  }

  return answer;
}



// node stack-queue/프린터.js
console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0));  // 5
