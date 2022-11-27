import React from 'react'

function Signup() {
    return (
        <div>
            <h1>Create new Account</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">USERNAME</label>
                <input type="text" name="username" placeholder='username' value={username} onChange={handleUsername} />

                <label htmlFor="email">EMAIL</label>
                <input type="text" name="email" placeholder='email' value={email} onChange={handleEmail} />

                <label htmlFor="location">LOCATION</label>
                <input type="text" name="location" placeholder='your current location' value={location} onChange={handleLocation} />

                <label htmlFor="password">PASSWORD</label>
                <input type="text" name="password" placeholder='********' value={password} onChange={handlePassword} />

                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default Signup