/*
  요구사항
1. 트럭이 정해진 순서대로 다리를 지나간다.
2. 트럭은 1초에 1만큼 이동한다.
3. 다리 무게를 초과하여 트럭이 진입할 수 없다.
4. 트럭은 한대씩 지나간다.

  필요기술
1. 다리 무게를 확인하여 트럭이 진입 가능한지 확인한다.
2. 트럭이 다리를 지나갈 때까지 남은 시간을 보여준다.
3. 배열에 값을 담는다.
4. 배열에 값을 뺀다.
*/
function solution(bridge_length, weight, truck_weights) {
  let answer = 0;

  const weightCheck = (limitWeight) => (onBridgeWeight) => (entryWeight) => {
    if (limitWeight - (onBridgeWeight + entryWeight) < 0) {
      return false;
    }
    return true;
  };

  const bridgeWeightCheck = weightCheck(weight);

  const bridgeOnTrucks = [{ weight: truck_weights.shift(), bridgeLength: bridge_length }];

  let second = 0;
  while (true) {
    // 초 추가
    second += 1;

    // 함수 실행 종료
    if (truck_weights.length + bridgeOnTrucks.length === 0) {
      answer = second;
      break;
    }

    // 다리 1 지나가기
    bridgeOnTrucks.forEach(truck => truck.bridgeLength = truck.bridgeLength - 1);

    // 다리를 다 지나간 트럭이 있는지 확인
    if (bridgeOnTrucks[0] && bridgeOnTrucks[0].bridgeLength === 0) {
      bridgeOnTrucks.shift();
    }

    // 현재 다리 무게 확인
    const totalBridgeWeight = bridgeOnTrucks.reduce((acc, truck) => acc + truck.weight, 0);

    // 다리에 트럭 진입이 가능한지 확인
    if (bridgeWeightCheck(totalBridgeWeight)(truck_weights[0]) && truck_weights.length !== 0) {
      bridgeOnTrucks.push({ weight: truck_weights[0], bridgeLength: bridge_length });
      truck_weights.shift();
    }


  }

  return answer;
}

// node stack-queue/다리를-지나는-트럭.js
// console.log(solution(2, 10, [7, 4, 5, 6])); // 8
// console.log(solution(100, 100, [10]));  // 101
// console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 110

// 알고리즘을 작성할 때는 디테일한 순서가 중요함.
