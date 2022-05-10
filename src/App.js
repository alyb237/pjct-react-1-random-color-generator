import './App.css';
import styled from '@emotion/styled';
import randomColor from 'randomcolor';
import { useState } from 'react';
import inputs from './input';

//emotion/styled div
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

  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');

  const [generateColor, setColor] = useState(
    randomColor.randomColor({ hue: hue, luminosity: luminosity }),
  );

  return (
    <div className="App">
      <br />
      <h2>Random Color Generator </h2>
      <br />
      <button
        onClick={() =>
          setColor(
            randomColor.randomColor({ hue: hue, luminosity: luminosity }),
          )
        }
      >
        Generate
      </button>
      <h3>Enter a Color:</h3>
      <input
        onChange={(event) => {
          setHue(event.currentTarget.value);
        }}
        value={hue}
      ></input>
      <br />
      <br />
      <h3>Enter a Luminosity: Light or Dark</h3>
      <input
        onChange={(event) => {
          setLuminosity(event.currentTarget.value);
        }}
        value={luminosity}
      ></input>
      <br />
      <br />
      <Div bg={generateColor}>Generated Color: {generateColor}</Div>
    </div>
  );
}
