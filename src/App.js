import './App.css';
import styled from '@emotion/styled';
import randomColor from 'randomcolor';
import { useState } from 'react';

//component
const Div = styled.div`
  background-color: ${(props) => props.bg};
`;

export default function App() {
  //generate random color state
  const [generateColor, setColor] = useState(randomColor.randomColor());
  return (
    <div className="App">
      <div>Color : {generateColor} </div>
      <br />
      <button onClick={() => setColor(randomColor.randomColor())}>
        Generate
      </button>
      <Div bg={generateColor}>Generated Color: {generateColor}</Div>
    </div>
  );
}

//console.log('flkds');
//export default App;
//console.log(chalk.hex(rcolor));
//console.log(chalk.hex(randomColor()).bold('Bold gray!'));
//console.log(chalk.red('Hello world!'));

//{chalk.hex.(randomColor())}
