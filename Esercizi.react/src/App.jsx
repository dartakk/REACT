import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageContext } from './UseEffect2/LanguageContext';
import Welcome from './ConditionalRendering1/Welcome';
import AlertClock from './Events/AlertClock';
import Counter from './State2/Counter';
import Clock from './UseEffect2/Clock';
import MouseClicker from './HandlingEvents2/MouseClicker';
import { InteractiveWelcome } from './ControlledForms2/InteractiveWelcome';
import { LoginComponent } from './ControlledForms2/Login';
import { UncontrolledLogin } from './UncontrolledForms/UncontrolledLogin';
import { FocusableInput } from './Ref/FocusableInput';
import { ComponentWithEffect } from './Ref/ComponentWithEffect';
import Color from './RenderingList/Color';
import { Colors } from './RenderingList/Colors';
import { TodoList } from './RenderingList2/TodoList';
import './UncontrolledForms/styles.css';

function App() {
  const handleButtonClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert('Current time is: ' + currentTime);
  };

  const handleLogin = (loginData) => {
    console.log(loginData);
  };

  const [language, setLanguage] = useState('en');
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
        <LanguageContext.Provider value={language}>
          <Clock />
        </LanguageContext.Provider>
        <Routes>
          <Route path="/welcome" element={<Welcome name="Francesco" />} />
          <Route path="/counter" element={<Counter initValue={0} incremento={1} />} />
        </Routes>
        <AlertClock onClick={handleButtonClick} />
        <Counter initValue={0} incremento={1}/>
        <MouseClicker />
        <InteractiveWelcome/>
        <LoginComponent onLogin={handleLogin}/>
        <UncontrolledLogin/>
        <FocusableInput/>
        <ComponentWithEffect/>
        <Color color={{ id: 1, name: 'Yellow' }} />
        <Colors colors={[
          { id: 1, name: 'Red' },
          { id: 2, name: 'Blue' },
          { id: 3, name: 'Green' }
          ]} />
        <TodoList/>
      </div>
    </BrowserRouter>
  );
}

export default App;


/*Se non viene passata una prop name al component Welcome il valore di name sarà "undefined".*/
/*Si puo usare un valore predefinito utilizzanto le default props di React*/
