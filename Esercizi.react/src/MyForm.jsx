import { useState } from "react"

function createData() {
    return {
        username: '',
        password: '',
        session: false
    }
}

export function MyForm() {
    //const [username, setUsername] = useState('')
    //const [password, setPassword] = useState('')
    const [data, setData] = useState(createData())

    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked
        const type = event.target.type

        setData(d => {
            return {
                ...d,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

    // function handlePasswordInputChange(event) {
    //     const value = event.target.value

    //     setPassword(value.toUpperCase())
    // }

    function handleResetForm () {
        setData(createData())
    }

    return (
        <div>
            <h1>My Form</h1>
            <input name="username" value={data.username} onChange={handleInputChange} />
            <input name="password" type="password" value={data.password} onChange={handleInputChange} />
            <input name="session" type="checkbox" checked={data.session} onChange={handleInputChange}/>
            <button disabled={!data.username || !data.password}>Login</button>
            <button onClick={handleResetForm}>Reset</button>

            <pre>
            {JSON.stringify(data,null,2)}
            </pre>
        </div>

        
    )
}