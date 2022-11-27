import React from 'react'

function Login() {
    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">USERNAME</label>
                <input type="text" name="username" value={username} onChange={handleUsername} />

                <label htmlFor="password">PASSWORD</label>
                <input type="text" name="password" value={password} onChange={handlePassword} />

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
