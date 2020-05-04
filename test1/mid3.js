//3) mid3.js

//(1) 비어있는 persons1 배열을 생성한다.
let persons1 = []

//(2) for 문에서 객체를 생성하여 persons 배열의 원소에 대입하시오.
for (let index = 0; index < 3; index++) {
    persons1[index] = {name : "홍길동", age : 16+index}
}
//(3) persons1 배열을 얕은 복사하여 persons2 배열을 생성한다.
let persons2 = persons1
//(4) persons[0].age = 20; 을 실행한다.
persons2[0].age = 20;
//(5) persons1 배열을 출력한다.
console.log(persons1)
//(6) persons2 배열을 출력한다
console.log(persons2)


