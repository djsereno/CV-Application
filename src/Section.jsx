import { useState } from 'react';
import Form from './Form';

function Section({ data }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
  };

  return <>{isSubmitted ? 'edit' : <Form key={`${data.label} Form`} {...data} />}</>;
}

export default Section;
