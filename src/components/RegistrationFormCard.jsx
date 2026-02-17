import { useState } from 'react';
import Form1 from './NotFound/Form1';
import Form2 from './NotFound/Form2';
import Form3 from './NotFound/Form3';
import Form4 from './NotFound/Form4';
import Form5 from './NotFound/Form5';

const RegistrationFormCard = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Function to render the correct form based on state
  const renderForm = () => {
    const commonProps = {
      onStepChange: setCurrentStep
    };

    switch (currentStep) {
      case 1:
        return <Form1 {...commonProps} onNext={() => setCurrentStep(2)} />;
      case 2:
        return <Form2 {...commonProps} onNext={() => setCurrentStep(3)} />;
      case 3:
        return <Form3 {...commonProps} onNext={() => setCurrentStep(4)} />;
      case 4:
        return <Form4 {...commonProps} onNext={() => setCurrentStep(5)} />;
      case 5:
        return <Form5 {...commonProps} onSubmit={() => console.log("Form Submitted!")} />;
      default:
        return <Form1 {...commonProps} onNext={() => setCurrentStep(2)} />;
    }
  };

  return (
    <div className='registration-card'>
      <div className='search-card-head'>
        <h6 className='table-card-title'>REGISTER VEHICLE</h6>
      </div>
      <div className="form-content-container">
        {renderForm()}
      </div>
    </div>
  );
}

export default RegistrationFormCard;