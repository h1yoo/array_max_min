const inNum = [
  [12,3,45,25,12,36,65,21,75,95],
  [32,88,52,65,75,15,42,62],
  [30,62,42,51,85,45,12,62,32],
  [12,45,52,95,20,12],
  [32,52,42,15,62,85,10],
  [63,52,15,45,75,63,87,62]
]

let max = inNum[0][0];
let min = inNum[0][0];
/*  강사님 풀이
let maxData = [inNum[0][0]];  // 전체 최대(maxData[0])
let minData = [inNum[0][0]];  // 전체 최소(minData[0])
//밑에서 max/minData(배열)에 .push를 사용하여 최댓값/최솟값을 추가하기 위해 maxData를 배열로 받음
//나는 그냥 값으로 받고 그 값으로 화면에 출력하도록 처리함
*/
console.log(max, min);

function comp_num() {
  for (let i = 0; i < inNum.length; i++) {
    
    let arr_max = inNum[i][0];  // 각 배열의 0번째 값으로 arr_max 값 초기화
    let arr_min = inNum[i][0];  // 각 배열의 0번째 값으로 arr_min 값 초기화

    for (let j = 0; j < inNum[i].length; j++) {
      // 배열 전체의 최댓값/최솟값 구하기
      if(inNum[i][j] > max) max = inNum[i][j];
      if(inNum[i][j] < min) min = inNum[i][j]; 

      // 각 배열별 최댓값/최솟값 구하기
      if(inNum[i][j] > arr_max) arr_max = inNum[i][j];
      if(inNum[i][j] < arr_min) arr_min = inNum[i][j];
      //console.log(inNum[i][j], arr_max, arr_min);

    }
    //console.log("--------------------------------------");
    document.write("<br>");
    document.write(i+" 번째행의 최댓값은 "+arr_max+" 입니다.<br>");
    document.write(i+" 번째행의 최솟값은 "+arr_min+" 입니다.<br>");

    /* 강사님 풀이
    maxData.push(maxd); // 현재 위치의 최댓값 추가
    minData

    if(maxData[0] < maxd) {maxData[0] = maxd;}  // 전체 최댓값 수정 
    if(maxData[0] > mind) {maxData[0] = mind;}  // 전체 최솟값 수정 
    */
  }

  document.write("<br>");
  document.write("전체의 최댓값은 "+max+" 입니다.<br>");
  document.write("전체의 최솟값은 "+min+" 입니다.<br>");

  /* 강사님 풀이
  console.log(maxData);
  */
}