import React, { useState } from 'react';

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

function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    MobileNo:'',
    Email:'',
    sex: 'male',
    symptoms: '',


  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
  };

  return (
    <div style={styles.form}>
      <h2 style={styles.heading}>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.fieldWrap}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.fieldWrap}>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.fieldWrap}>
        <label htmlFor="PhoneNo">PhoneNo:</label>
        <input
        type="number"
        id="Phoneno"
        name="Phoneno"
            value={formData.Phoneno}
            onChange={handleChange}
            required
          />
        </div>


    

        <div style={styles.fieldWrap}>
          <label htmlFor="sex">Sex:</label>
          <select
            id="sex"
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div style={styles.fieldWrap}>
          <label htmlFor="symptoms">Symptoms:</label>
          <textarea
            id="symptoms"
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        

        <div style={styles.fieldWrap}>
          <button type="submit" style={styles.button}>
            Book an Appointment
          </button>
        </div>
      </form>
    </div>

   
    
  );
}

export default BookAppointment;

