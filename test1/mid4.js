// 4) mid4.js

// (1) sum 함수를 구현하라.
// sum 함수의 파라미터는 배열이다. sum 함수는 배열의 원소의 합을 리턴한다.
function sum (arr){
    let data = 0
    for (let index = 0; index < arr.length; index++) {
        data = data+arr[index]
    }
    return data ;
}
let f = sum;

// (2) test_sum 함수를 구현하라.
// test_sum 함수의 파라미터는 콜백 함수이다.
// test_sum 함수는,

// 콜백 함수를 호출하면서 그 배열을 파라미터로 전달하고,

function test_sum (f){
    // 랜덤 값이 5개 들어있는 배열을 생성하고, 그 배열을 출력하고,
    let test_arr = []
    for (let index = 0; index < 5; index++) {
        test_arr[index]  = Math.floor(Math.random() * 10 + 1)
    }
    console.log(test_arr)
    // 콜백 함수의 리턴값을 출력한다
    console.log(f(test_arr))
}

test_sum(f)