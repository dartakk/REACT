export function UncontrolledLogin() {
    const handleSubmit = (event) => {
      event.preventDefault();
      
      const formData = new FormData(event.target);
      const email = formData.get('email');
      const password = formData.get('password');
      
      console.log('Email:', email);
      console.log('Password:', password);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
            <h1>Uncontrolled Form</h1>
          <label>Email:</label><input type="text" name="email" />
        </div>
        <div>
          <label>Password:</label><input type="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
  

/*Come vantaggio sicuramente c'è l'accesso diretto ai dati senza accedere agli elementi DOM e la gestione automatiche degli input*/
/*Come svantaggio abbiamo il fatto che rende piu complessi l'esecuzione piu specifiche e difficili*/