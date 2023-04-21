import './App.css';
import Main from './components/Main';
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Main />
      <About
      about="Lan Lin is a web developer with expertise in creating dynamic and responsive web applications. She is constantly expanding her knowledge and skills in different programming languages and frameworks to stay up-to-date with the latest industry trends.
      "
      interests=" When she's not coding, Lan enjoys exploring new cultures through travel, reading, and staying informed on industry news and technology advancements."  
      />
    </div>
  );
}

export default App;
