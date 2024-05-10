import './styles.css'

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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-yellow-200 border border-gray-400 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Uncontrolled Form</h1>
      <div className="mb-4">
        <label className="block mb-2">Email:</label>
        <input type="text" name="email" className="w-full px-3 py-2 border rounded-md" />
      </div>
      <div className="mb-6">
        <label className="block mb-2">Password:</label>
        <input type="password" name="password" className="w-full px-3 py-2 border rounded-md" />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Login</button>
    </form>
  );
}
  

/*Come vantaggio sicuramente c'è l'accesso diretto ai dati senza accedere agli elementi DOM e la gestione automatiche degli input*/
/*Come svantaggio abbiamo il fatto che rende piu complessi l'esecuzione piu specifiche e difficili*/