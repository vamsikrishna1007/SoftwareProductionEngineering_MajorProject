import React from 'react';

const Login = () => {
  return (
    <div
      style={{
        marginTop: '80px',
        marginBottom: '80px',
        textAlign: 'center',
      }}
    >
      <form
        style={{
          maxWidth: '380px',
          padding: '15px 35px 45px',
          margin: '0 auto',
          backgroundColor: '#fff',
          border: '1px solid rgba(0,0,0,0.1)',
        }}
      >
        <h2 style={{ marginBottom: '30px' }}>Please login</h2>
        <input
          type="text"
          style={{
            position: 'relative',
            fontSize: '16px',
            height: 'auto',
            padding: '10px',
            boxSizing: 'border-box',
          }}
          name="username"
          placeholder="Email Address"
          required=""
          autoFocus=""
        />
        <input
          type="password"
          style={{
            position: 'relative',
            fontSize: '16px',
            height: 'auto',
            padding: '10px',
            boxSizing: 'border-box',
          }}
          name="password"
          placeholder="Password"
          required=""
        />
        <label
          style={{
            fontWeight: 'normal',
            marginBottom: '30px',
            display: 'block',
          }}
        >
          <input
            type="checkbox"
            value="remember-me"
            id="rememberMe"
            name="rememberMe"
          />{' '}
          Remember me
        </label>
        <button
          style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            textAlign: 'center',
            backgroundColor: '#007bff',
            color: '#fff',
            border: '1px solid #007bff',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
