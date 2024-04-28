import React from 'react';
import Welcome from './Welcome';
import AlertClock from './AlertClock';

function App() {
  const handleButtonClick = () => {
const currentTime = new Date().toLocaleTimeString();
    alert('Current time is: ' + currentTime);
};
return (
    <div className="App">
      <Welcome name="Francesco" age={30} />
      <AlertClock onClick={handleButtonClick} />
    </div>
  );
}

export default App;


/*Se non viene passata una prop name al component Welcome il valore di name sarà "undefined".*/
/*Si puo usare un valore predefinito utilizzanto le default props di React*/
