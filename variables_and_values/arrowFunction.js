
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

// assignment arrow function ข้อ 1
// addMultiple = (...n) =>{
//     const arrNumber = [...n];
//     const result = arrNumber.reduce((sum,n) =>{
//       return  sum+n;
      
//     },0);
//     console.log(result)

// }
// addMultiple(1,2,3);

// const user = [
//     {
//       id: 1,
//       name: "Leanne Graham",
//       username: "Bret",
//       email: "Sincere@april.biz",
//       address: {
//         street: "Kulas Light",
//         suite: "Apt. 556",
//         city: "Gwenborough",
//         zipcode: "92998-3874",
//         geo: {
//           lat: "-37.3159",
//           lng: "81.1496",
//         },
//       },
//       phone: "1-770-736-8031 x56442",
//       website: "hildegard.org",
//       company: {
//         name: "Romaguera-Crona",
//         catchPhrase: "Multi-layered client-server neural-net",
//         bs: "harness real-time e-markets",
//       },
//     },
//     {
//       id: 2,
//       name: "Ervin Howell",
//       username: "Antonette",
//       email: "Shanna@melissa.tv",
//       address: {
//         street: "Victor Plains",
//         suite: "Suite 879",
//         city: "Wisokyburgh",
//         zipcode: "90566-7771",
//         geo: {
//           lat: "-43.9509",
//           lng: "-34.4618",
//         },
//       },
//       phone: "010-692-6593 x09125",
//       website: "anastasia.net",
//       company: {
//         name: "Deckow-Crist",
//         catchPhrase: "Proactive didactic contingency",
//         bs: "synergize scalable supply-chains",
//       },
//     },
// ];
  
//assignment arrow function ข้อ 2
// const getName = user.map(({name})=>{
//   return name;
// })
// console.log(getName)
// getName(user);

//Assignment ข้อ 3
// const getGeo = user.map(({address})=>{
//   geo = address?.geo;
//   const {lat,lng} = geo;
//   return `${lat}/${lng}` ;
// })
// console.log(getGeo)


//Assignment ข้อ 4
// const reverse = (string) => {
//   return string.split("").reverse().join("");
// }
// console.log(reverse(reverse("Javascript")));

//Assignment Api
import fetch from 'node-fetch';
  // Call Api ข้อ 1
  // fetch('https://jsonplaceholder.typicode.com/photos')
  // .then(response => response.json())
  // .then(response => response.filter(({albumId})=>{
  //   return albumId === 1;
  // }))
  // .then(result => console.log(result))


  // Call Api ข้อ 2
  // fetch('https://jsonplaceholder.typicode.com/photos')
  // .then(response => response.json())
  // .then(response => response.filter(({albumId})=>{
  //   return albumId === 1;
  // }))
  // .then(response => response.map(({url})=>{
  //   return url
  // }))
  // .then(result => console.log(result.length));


  // Call Api ข้อ 3
  fetch('https://jsonplaceholder.typicode.com/posts') 
  .then(response => response.json())
  .then(response => response.filter(({id})=>{
    return id < 10;
  }))
  .then(response => response.map(({userId})=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`) 
    .then(response => response.json())
    // .then(response => response.map((res)=>{
    //   console.log(res.name)
    //   // return res.name
    // }))
    .then(result => console.log(result.name))
  }))
  // .then(response => response.map(({name})=>{
  //   return name
  // }))
  // .then(result => console.log(result))
