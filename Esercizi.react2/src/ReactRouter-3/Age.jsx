function Age({ age }) {
  return (
    <div>
      {age > 18 ? <p>Your age is {age}.</p> : <p>You are very young!</p>}
    </div>
  );
}

export default Age;
