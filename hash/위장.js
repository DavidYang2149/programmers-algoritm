/*
  요구사항
1. 스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성하라.
2. clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있다.
3. 스파이가 가진 의상의 수는 1개 이상 30개 이하다.
4. 같은 이름을 가진 의상은 존재하지 않는다.
5. clothes의 모든 원소는 문자열로 이루어져 있다.
6. 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있다.
7. 스파이는 하루에 최소 한 개의 의상은 입는다.

  필요기술
1. 해시의 접근 방법 찾기

  후기
1. 시간 제한: 2시간 / 사용 시간: 20분
2. 답안 검색(참조)
*/

function solution(clothes) {
  return Object.values(clothes.reduce((obj, cloth) => {
    obj[cloth[1]] = obj[cloth[1]] ? obj[cloth[1]] + 1 : 1;
    return obj;
  }, {})).reduce((a, b) => a * (b + 1), 1) - 1;
}

// node hash/위장.js
// console.log(solution([['yellow_hat', 'headgear'], ['blue_sunglasses', 'eyewear'], ['green_turban', 'headgear']])); // 5
// console.log(solution([['crow_mask', 'face'], ['blue_sunglasses', 'face'], ['smoky_makeup', 'face']])); // 3
