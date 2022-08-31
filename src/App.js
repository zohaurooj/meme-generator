import React from "react";
import Header from "./Components/Header";
import Meme from "./Components/Meme";

function App() {

  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode(){
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="App">
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
      />
      <Meme darkMode={darkMode}/>
    </div>
  );
}

export default App;
