import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const ContactFormCom = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    number: '',
    message: '',
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
    <form data-aos="fade-up" data-aos-duration="1500" className='ContactMainForm' onSubmit={handleSubmit}>

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
        name="number"
        value={formData.number}
        onChange={handleInputChange}
      />
      <br />
      <textarea placeholder='Message'
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        rows="4"></textarea>
      <br />
      <Button
        onSubmit={handleSubmit}
        type="submit"
        className="Homemainbutton mx-2"
        variant="dark">get Started
        <span className='ArrowbtnSpn'> <ArrowRightAltIcon className='arrowbtn' /></span>
      </Button>
    </form>
  );
};

export default ContactFormCom;
