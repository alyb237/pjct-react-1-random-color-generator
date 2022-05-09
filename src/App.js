import './App.css';
import styled from '@emotion/styled';
import randomColor from 'randomcolor';
import { useState } from 'react';

//component
const Div = styled.div`
  background-color: ${(props) => props.bg};
  width: auto;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  //generate random color state
  const [generateColor, setColor] = useState(randomColor.randomColor());
  return (
    <div className="App">
      <br />
      <h2>Random Color Generator </h2>
      <br />
      <button onClick={() => setColor(randomColor.randomColor())}>
        Generate
      </button>
      <br />
      <br />
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
