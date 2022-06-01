// let x = 10;
// let y = 20;
// console.log(`The product of the variables 10 and 20 is:
// ${x*y}`);

//ข้อ 1
// function addDate(y,m,d){
//     const data = {year:y, month :m, day :d};
//     let {year , month , day} = data; 
//     const date = `${year}-${month}-${day}`;
//     console.log(date);
// }
// addDate(2020,06,01);


//ข้อ 2
// const functionalLanguages = {
//     'purpose': 'computations',
//     'examples': ['Scala','F#','Haskell','Erlang']
// }
// let {purpose ,examples:[firstLang]} = functionalLanguages;
// console.log(firstLang);

//ข้อ 3
// const person = ['Somchai',['Haha',{age:23}]];
// let [firstname,[lastname,{age}]] = person;
// console.log(firstname ,lastname ,age);

// const person = {
//     name : "Fear",
//     age : 20
// }
// console.log(person?.name2)

// const result = Math.min(9,2,16,1,3);
// console.log(result);

// const arr = [9,2,16,1,3];

// console.log(...arr);

// const seedcamp = {name:'เขียน Web ติดจรวด ด้วย React',date:'26-27พฤษภาคม'};
// let seed1 = {location:'TB'};
// let arr1 = {...seedcamp, ...seed1};
// console.log(seedcamp);
// console.log(arr1);


const students = ['John','Jane','Joe','Josh'];
const newStudent = [...students,'James'];
console.log(newStudent);
console.log(students);



