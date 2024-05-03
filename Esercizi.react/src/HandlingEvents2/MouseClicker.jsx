function MouseClicker() {
  const handleClick = (event) => {
    console.log("Button number:", event.target.name);
    console.log("Image:", event.target.firstChild.src);
  };

  return (
    <div>
      <button onClick={handleClick}><img src=".\src\assets\wp10324441-cactuar-wallpapers.jpg" alt="" width="60px" height="60px" /> Kyactus qui</button>
      <button name="uno" onClick={handleClick}>Here</button>
    </div>
  );
}

export default MouseClicker;


/*Si puo evitare utilizzando il metodo stopPropagation()*/