import React, { useState } from "react";

const HealthTracker = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2));
  };

  const getStatus = () => {
    if (bmi === null) {
      return "Enter your height and weight to calculate BMI.";
    } else if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal Weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  return (
    <div className="health-tracker" style={styles.container}>
      <h2 style={styles.heading}>Health Tracker</h2>
      <div style={styles.inputContainer}>
        <label htmlFor="height" style={styles.label}>
          Height (cm):
        </label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.inputContainer}>
        <label htmlFor="weight" style={styles.label}>
          Weight (kg):
        </label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={styles.input}
        />
      </div>
      <button onClick={calculateBMI} style={styles.button}>
        Calculate BMI
      </button>
      {bmi !== null && (
        <div style={styles.resultContainer}>
          <p style={styles.result}>Your BMI: {bmi}</p>
          <p style={styles.status}>Status: {getStatus()}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    color: "#333",
    fontSize: "24px",
    marginBottom: "20px",
  },
  inputContainer: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#555",
    fontSize: "16px",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 15px",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  resultContainer: {
    marginTop: "20px",
  },
  result: {
    fontSize: "18px",
    color: "#333",
  },
  status: {
    fontSize: "16px",
    color: "#555",
  },
};

export default HealthTracker;

