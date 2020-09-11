import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const names = ['James', 'John', 'Paul', 'Ringo', 'George'];
const numbers = [1, 2, 3, 4];
const newValue = numbers.find((number)=> number > 3 );
const newValue2 = numbers.reduce( (accumulator, currentValue)=> accumulator + currentValue);
const newValue3 = numbers.filter( (number)=> number >= 3);
const containsAdmin = names.some( element => element === 'Paul');
const goodOverallRating = numbers.every( rating => rating >= 3 );

  return (
    <div style={{backgroundColor:'pink'}}>
      <h1 style={{textShadow:'2px 2px #ff0000',fontSize:'25px'}}>Array Popular methods example</h1>
      <p>
        <b>
         Given array of strings =[{names}]
        </b>
        </p>
        <p>
        <b>
          Given array of numbers=[{numbers}]
        </b>
      </p>
    <div>
      <b>1.includes()</b>
      <p> example of includes it will display the value which contains J in it </p>
      <p>result:</p>
    {names.filter(name => name.includes('J')).map(filteredName => (
      
      <li>
         
           {filteredName}
      </li>
    ))}
    <b>2.find()</b>
    <p> example of find function in array it will find the number greater than 3 from array[1,2,3,4]</p>
    result:{newValue}
   <div>
     <b>3.reduce()</b>
     <p> This is a great array method that uses an accumulator to reduce all elements in an array to a single value. It basically takes in two augments, a callback function and an initial value, performs an action, and returns a single value, the value being any type i.e. object, array, string, integer. The call back function takes in two parameters namely: accumulator and current value.</p>
     result:{newValue2}
   </div>
   <div>
     <b>4.Filter()</b>
     <p>It works similar to the way the .map() method works. It filters an array based on if an element in the array, meets the condition passed in the function and then, it returns an array.</p>
     result:{newValue3}
   </div>
   <div>
     <b>5.Some()</b>
    <p>Check if there is at least one 'paul' in an array.</p>
    result:{String(containsAdmin)}
   </div>
   <div>
     <b>6.every()</b>
     <p>Similar to .some(), but checks if all items in an array pass a condition here it checks all ratings are equal to or greater than 3 </p>
     
     result:{String(goodOverallRating)}
   </div>
   <div>

   </div>
  </div>
  </div>
  );
}

export default App;
