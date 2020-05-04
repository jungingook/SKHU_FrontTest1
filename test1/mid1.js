//1) mid1.js

//(1) 배열을 만든다.
let sum = 0
let arr = []

//(2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다
for (let index = 0; index < 100; index++) {
    arr[index] = Math.floor(Math.random() * 100 + 1)
}
//(3) 배열의 원소의 평균을 구하고,그 평균을 소수점 아래 한 자리까지 출력하시오
for (let index = 0; index < arr.length; index++) {
    sum = sum +arr[index]
}
console.log((sum/100).toFixed(1))