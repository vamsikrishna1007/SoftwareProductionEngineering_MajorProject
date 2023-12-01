import React, { useRef } from 'react';

import SignUp from './SignUp';
import Login from './Login';
import HomePage from './Home';
import BookAppointment from './Bookappointment';
import HealthTracker from './HealthTracker';
const App = () => {
  return (
    <div>
      <SignUp />
      <Login/>
      <HomePage/>
      <BookAppointment/>
      <HealthTracker/>
      
    </div>

    
  );
};

export default App;

