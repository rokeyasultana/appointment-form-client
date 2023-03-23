import './App.css';
import AppointmentForm from './Component/AppointmentForm/AppointmentForm';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <AppointmentForm></AppointmentForm>
    </div>
  );
}

export default App;
