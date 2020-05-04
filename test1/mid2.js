//2) mid2.js

//(1) 배열을 만든다.
let arr = []

//(2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
for (let index = 0; index < 100; index++) {
    arr[index] = Math.floor(Math.random() * 100 + 1)
}

//(3) 배열을 내림차순으로 정렬하여 출력하시오.
arr.sort((a,b)=>{ return b-a; }); // 내림차순 reverse 사용시 아스키 코드순 정렬이라 10단위 이하의 숫자가 정상적으로 정렬되지 않는다.
console.log(arr)


