// import './App.css';
// import styled from '@emotion/styled';
// import randomColor from 'randomcolor';
// import { useState } from 'react';
// import App from './App';

// //access the hue and luminosity
// //1. create a new component
// //2. create a new state array
// //3. set the input tag to be able to receive text and connect it to the object of randomColor()
// //4. connect the function App that generates the random color to get triggered when a text is entered

// export default function inputs() {
//   //create state because need to go into randomColor object when text is input
//   //need 3 states
//   //rename files to match to the component
//   //lift state up
//   const [hue, setHue] = useState('');
//   return (
//     <div className="inputs">
//       <h3>Enter a Hue</h3>
//       <input
//         onChange={(event) => {
//           setHue(event.currentTarget.value);
//         }}
//         value={hue}
//       ></input>
//     </div>
//   );
// }
