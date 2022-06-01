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
const functionalLanguages = {
    'purpose': 'computations',
    'examples': ['Scala','F#','Haskell','Erlang']
}
let {purpose ,examples:[firstLang]} = functionalLanguages;
console.log(firstLang);

//ข้อ 3
// const person = ['Somchai',['Haha',{age:23}]];
// let [firstname,[lastname,{age}]] = person;
// console.log(firstname ,lastname ,age);



