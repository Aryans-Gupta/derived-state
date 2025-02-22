import {useState} from 'react';
function App(){
  const [users,setusers] = useState([]);
  const [user,setuser]=useState('');
  const Adduser=()=>{
   setusers([...users,user]);
  }

  return(
<>
    <h1>total users:{users.length}</h1>
    <h1>last user:{users[users.length-1]}</h1>
    <h1>unique total user:{[...new Set(users)].length}</h1>
    <input type="text" placeholder="enter user name" onChange={(event)=>setuser(event.target.value)}/>
    <button onClick={Adduser}>add user</button>
    {
      users.map((items,index)=>(
        <h1 key={index}>{items}</h1>
      ))
    }
</>
  )
}
export default App;

// 👉 jitna kam state ka use karenge utna achchha application perform karega

// 👉how to add new value in a array in jslet arr = [1, 2, 3];
// let newArr = arr.concat(4);  // Returns a new array with 4 added
// console.log(newArr);  // Output: [1, 2, 3, 4]

// let arr = [1, 2, 3];
// arr.push(4);  // Adds 4 at the end
// console.log(arr);  // Output: [1, 2, 3, 4]

// let arr = [2, 3, 4];
// arr.unshift(1);  // Adds 1 at the beginning
// console.log(arr);  // Output: [1, 2, 3, 4]

// let arr = [1, 2, 4];
// arr.splice(2, 0, 3);  // Inserts 3 at index 2
// console.log(arr);  // Output: [1, 2, 3, 4]

// let arr = [1, 2, 3];
// arr = [...arr, 4];  // Adds 4 at the end
// console.log(arr);  // Output: [1, 2, 3, 4]

// 👉Operations with Set
//       let mySet = new Set();
//       mySet.add(10);
//       mySet.add(20);
      
//       mySet.delete(10);
//       console.log(mySet); // Output: Set { 20 }
      
//       console.log(mySet.size); // Output: 1
      
//       for (let value of mySet) {
//         console.log(value);
//       }
      
//       mySet.clear();
//       console.log(mySet.size); // Output: 0

// 👉Array to Set ->let numbers = [1, 2, 2, 3, 4, 4, 5];
//                     let uniqueNumbers = new Set(numbers);
//                     console.log(uniqueNumbers); // Output: Set { 1, 2, 3, 4, 5 }

// 👉Convert a Set back to an Array:->let uniqueArray = [...uniqueNumbers];
//                                     console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

// 👉how to add 2 array in Js->

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let result = arr1.concat(arr2);
// console.log(result); // Output: [1, 2, 3, 4, 5, 6]


// let result = [...arr1, ...arr2];
// console.log(result); // Output: [1, 2, 3, 4, 5, 6]



      
      



