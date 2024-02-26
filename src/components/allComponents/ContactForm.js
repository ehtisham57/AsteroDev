import React, { useState } from 'react';

const ContactFormCom = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with form data (e.g., submit to a server)
    console.log('Form submitted:', formData);
  };

  return (
    <form className='ContactMainForm' onSubmit={handleSubmit}>
    
        <input
        placeholder='Name'
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      <br />
        <input
        placeholder='Email'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      <br />
      <input
        placeholder='Phone Number'
          type="number"
          name="phone"
          value={formData.email}
          onChange={handleInputChange}
        />
         <br />
         <input
        placeholder='Message'
          type="textaria"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
         <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactFormCom;
