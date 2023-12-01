import React, { useState } from 'react';

const SignUp = () => {
  const [activeTab, setActiveTab] = useState('signup');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // I will update the endpoint here as soon as i complete my backend testing using postman
      
      const response = await fetch('/api/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        });
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div style={styles.form}>
      <form onSubmit={handleFormSubmit}>
        <h1 style={styles.heading}>Sign Up for Free</h1>

        <div style={styles.fieldWrap}>
          <label>
            First Name<span className="req">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div style={styles.fieldWrap}>
          <label>
            Last Name<span className="req">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div style={styles.fieldWrap}>
          <label>
            Email Address<span className="req">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div style={styles.fieldWrap}>
          <label>
            Set A Password<span className="req">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

const styles = {
  form: {
    background: '#ffffff',
    padding: '40px',
    maxWidth: '600px',
    margin: '40px auto',
    borderRadius: '4px',
    boxShadow: '0 4px 10px 4px rgba(19, 35, 47, 0.3)',
  },
  heading: {
    textAlign: 'center',
  },
  fieldWrap: {
    marginBottom: '20px',
  },
  button: {
    background: '#1ab188',
    color: '#ffffff',
    padding: '15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default SignUp;

