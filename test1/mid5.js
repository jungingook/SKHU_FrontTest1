//5) mid5.js

//(1) 배열을 만든다.
let arr = []

//(2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
for (let index = 0; index < 100; index++) {
    arr[index] = Math.floor(Math.random() * 100 + 1)
}

//(3) 배열에서 짝수의 합을 구하하여 출력하라. (반복문 없이, 배열의 메소드만 사용하여 구현하라
let filterArr = arr.filter((e) => e % 2 === 0);  // filter 사용해서 짝수만 배열에 남긴다
let sum = filterArr.reduce((a,b) => a+b) // reduce 사용해서 합을 구한다.
console.log(sum) // 출력