function AlertClock() {

  const clickButton = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert('Current time is: ' + currentTime);
  };

  return (
    <div>
      <button onClick={clickButton}>L'ora esatta è:</button>
    </div>
  );
}

export default AlertClock;
