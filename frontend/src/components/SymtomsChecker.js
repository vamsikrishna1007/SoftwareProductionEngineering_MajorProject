import React, { useState } from "react";

const SymptomsChecker = () => {
  const [symptoms, setSymptoms] = useState({
    fever: false,
    cough: false,
    headache: false,
    fatigue: false,
    shortnessOfBreath: false,
  });
  const [result, setResult] = useState(null);

  const handleSymptomChange = (symptom) => {
    setSymptoms((prevSymptoms) => ({
      ...prevSymptoms,
      [symptom]: !prevSymptoms[symptom],
    }));
  };

  const checkSymptoms = () => {
    const selectedSymptoms = Object.keys(symptoms).filter(
      (symptom) => symptoms[symptom]
    );

    if (selectedSymptoms.length === 0) {
      setResult("No symptoms selected. Please select at least one symptom.");
    } else if (selectedSymptoms.length === 1) {
      setResult(`You may have ${selectedSymptoms[0]}.`);
    } else if (selectedSymptoms.length <= 3) {
      setResult(`You may have a combination of symptoms.`);
    } else {
      setResult(
        "You are experiencing multiple symptoms. It is advisable to consult a doctor."
      );
    }
  };

  return (
    <div style={styles.symptomsChecker}>
      <h2 style={styles.heading}>Symptoms Checker</h2>
      {Object.keys(symptoms).map((symptom) => (
        <div key={symptom} style={styles.checkboxContainer}>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={symptoms[symptom]}
              onChange={() => handleSymptomChange(symptom)}
              style={styles.checkboxInput}
            />
            {symptom}
          </label>
        </div>
      ))}
      <button style={styles.checkButton} onClick={checkSymptoms}>
        Check Symptoms
      </button>
      {result && <p style={styles.result}>{result}</p>}
    </div>
  );
};

const styles = {
  symptomsChecker: {
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
    textAlign: "center",
  },
  checkboxContainer: {
    marginBottom: "10px",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    color: "#555",
  },
  checkboxInput: {
    marginRight: "10px",
  },
  checkButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 15px",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    display: "block",
    margin: "auto",
    marginTop: "20px",
  },
  result: {
    marginTop: "20px",
    fontSize: "16px",
    textAlign: "center",
    color: "#555",
  },
};

export default SymptomsChecker;
