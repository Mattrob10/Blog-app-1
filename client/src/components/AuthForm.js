import React from 'react';

export default function AuthForm(props) {
  const {
    handleChange,
    handleSubmit,
    btnText,
    errMsg,
    showConfirmPassword = true,
    inputs: { username, password, confirmPassword },
    toggleForm, // Add toggleForm function as a prop
  } = props;

  return (
    <form onSubmit={handleSubmit} id="auth-form">
      <input
        type="text"
        value={username}
        name="username"
        onChange={handleChange}
        placeholder="👤 Username"
      />
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleChange}
        placeholder="🔐 Password"
      />
      {showConfirmPassword && (
        <input
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
          placeholder="Confirm Password"
        />
      )}
      {errMsg && <p id="errMsg">{errMsg}</p>} {/* Render the error message here */}
      <button className="form-btn">{btnText}</button>
      <p onClick={toggleForm} id="member"> {/* Move the #member <p> here */}
        {btnText === 'Sign up' ? (
          <>
            Already a member...<span id="toggle-msg">LOGIN</span>
          </>
        ) : (
          <>
            Not a member...<span id="toggle-msg"> REGISTER</span>{' '}
          </>
        )}
      </p>
    </form>
  );
}
