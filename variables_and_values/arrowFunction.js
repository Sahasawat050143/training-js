// setName=()=>{
//     console.log("Test Arrow Function");
// }

// setName();

// const foo = a => console.log(b = a + 1);
// foo(9)

// getName = (person) => console.log(person.name);

// getName({
//     name:'Sahasawat',
//     age:24
// })

// const items = ["list","of","words"]
// const countLetters = items.map(function(element){
// console.log(element);
// })

// let result = items.reduce((function(element){
//     return element;
// }));

    //let [a , b , c] = result;
    //  console.log(a,b,c);
    //console.log(result);

//assignment arrow function ข้อ 1
// addMultiple = (...n) =>{
//     let total=0;
//     const arrNumber = [...n];
//     arrNumber.map(function(element){
//         total += element;
//         return total
//     });
//     console.log(total);
// }
// addMultiple(1,2);

//assignment arrow function ข้อ 2
const user = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
];
  
let arrName = [];
const getName = user.map(function(element){
    arrName.push(element.name);
});
console.log(arrName);


