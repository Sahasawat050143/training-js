
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
  // fetch('https://jsonplaceholder.typicode.com/posts') 
  // .then(response => response.json())
  // .then(response => response.filter(({id})=>{
  //   return id < 10;
  // }))
  // .then(response => response.map(({userId})=>{
  //   return userId;
  // }))
  // .then(result => [...new Set(result)])
  // .then(result => fetch(`https://jsonplaceholder.typicode.com/users/${result}`))
  // .then(response => response.json())
  // .then(result => console.log(result.name))

  //call Api axios
  import axios from "axios";

  //PostId = 1
  // axios.get('https://jsonplaceholder.typicode.com/comments')
  // .then(({data}) => {
  //   return data;
  //   })
  //   .then(res => res.filter(({postId})=>{
  //     return postId == 1;
  //   }))
  //   .then(res => res.map(({postId})=>{
  //     return postId
  //   }))
  //   .then(res => [...new Set(res)])
  //   .then(res => axios.get(`https://jsonplaceholder.typicode.com/posts/${res}`))
  //   .then(({data})=>{
  //     return data
  //   })
  //   .then(({title})=>{
  //     console.log(title)
  //   })

  //postId <= 5
  //  axios.get('https://jsonplaceholder.typicode.com/comments')
  //   .then(({data}) => {
  //   return data;
  //   })
  //   .then(res => res.filter(({postId})=>{
  //     return postId <= 5;
  //   }))
  //   .then(res => res.map(({postId})=>{
  //     return postId
  //   }))
  //   .then(res => [...new Set(res)])
  //   .then(res => axios.get(`https://jsonplaceholder.typicode.com/posts/${res}`))
  //   .then(({title})=>{
  //      console.log(title);
  //   })


  const getPostId = async () =>{
    try{
      const reqComment = axios.get('https://jsonplaceholder.typicode.com/comments').filter(({data})=>{
        console.log(data);
        return postId == 1;
      }) ;
      //console.log(reqComment)
      // const condition = await reqComment.filter(({data})=>{
      //   console.log(data);
      //   return postId == 1;
      // }) 
      console.log(reqComment);
      // const postId = await condition.map(({postId})=>{
      //   return postId;
      // })
      // const group = await [...new Set(postId)];
      // return getId(group);
    }catch(err){
      // console.error(error);
    }
  }

  // const getId = async (postId) =>{
  //   try{
  //     const reqPosts = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  //     console.log(({reqPosts}));
  //   }catch(err){
  //     console.err(err);
  //   }
  // }
  getPostId();


  // const getApi = async () => {
  //   try{
  //     const reqComment = axios.get('https://jsonplaceholder.typicode.com/comments');
  //     const reqPosts = axios.get('https://jsonplaceholder.typicode.com/posts/');
      
  //     const getAllRes = await Promise.all([reqComment,reqPosts])
  //     console.log('Res',getAllRes)
  //   }catch(err){
  //     console.log(err)
  //   } 
  // }
  // getApi()