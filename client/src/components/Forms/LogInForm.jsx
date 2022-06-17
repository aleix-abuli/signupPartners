import { useState } from "react";

export default function LogInForm(props) {

    const { data, handleInputChange, handleSubmit } = props;
    const { email, password } = data;

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">e-mail</label>
                <input name='email' value={email} onChange={handleInputChange} required />
                
                <label htmlFor="password">Password</label>
                <input name='password' value={password} onChange={handleInputChange} required />

                <button type="submit">Log In</button>
            </form>
        </>
    );
};