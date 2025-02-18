import React, { useState } from 'react';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Contact = () => {
  const [formdata, setFormdata] = useState({
    fname: '',
    email: '',
    pnumber: '',
    message: '',
  });

  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newError = "";

    if (name === "email" && value.trim() !== "" && !/\S+@\S+\.\S+/.test(value)) {
      newError = "Please enter a valid email address";
    }
    if (name === "pnumber" && value.trim() !== "" && !/^[0-9]+$/.test(value)) {
      newError = "Please enter a valid number";
    }
    if (name === "message" && value.trim() !== "" && !/^[0-9]+$/.test(value)) {
      newError = "Please enter a valid number";
    }
    setFormdata({ ...formdata, [name]: value });
    setError({ ...error, [name]: newError });
  };

  const handlesubmit = async(e) => {
    setLoading(true);
    e.preventDefault();
    let errors = {};

    if (!formdata.fname) {
      errors.fname = "Please fill full name";
    }
  
    if (!formdata.email) {
      errors.email = "Please fill email address";
    }
    if (!formdata.pnumber) {
      errors.pnumber = "Please fill phone number";
    }
  
    if (!formdata.message) {
      errors.message = "Please fill message";
    }

    setError(errors);

    
    if (Object.keys(errors).length === 0) {
      try {
      const RequestBody = {
        fullnName: formdata.fname,
        email: formdata.email,
        phoneNumber: formdata.pnumber,
        message: formdata.message,
      }
      console.log('Formdata:', RequestBody);
      await axios.post('http://localhost:5000/contact', RequestBody);
    } catch (error) {
      console.log('Error:', error);
    }
      setFormdata({
    fname: '',
    email: '',
    pnumber: '',
    message: '',
      });
      toast.success('Form submitted successfully!');
    }

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <div className='contact-maincontainer'>
      <ToastContainer />
      <div className="contact-header">
        <h3>Contact Us</h3>
        <p>Whether you are a movie distributor, an aspiring producer or looking to advertise your brand at our cinemas, 
            or simply feedback on your experience, we would love to hear from you.</p>
      </div>

      <form className="contact-form" onSubmit={handlesubmit}>
        <div className="form-row">
          <div className="form-column">
            <label className="contact-label">Full Name</label>
            <input type="text" name="fname" onChange={handleChange} value={formdata.fname} />
            {error.fname && <span className="error">{error.fname}</span>}
          </div>
          <div className="form-column">
            <label className="contact-label">Email Address</label>
            <input type="text" name="email" onChange={handleChange} value={formdata.email} />
            {error.email && <span className="error">{error.email}</span>}
          </div>
        </div>

        <div className="form-row">
         
          <div className="form-column">
            <label className="contact-label">Phone Number</label>
            <input type="text" name="pnumber" onChange={handleChange} value={formdata.pnumber} />
            {error.pnumber && <span className="error">{error.pnumber}</span>}
          </div>

          <div className="form-column">
            <label className="contact-label">Message</label>
            <input type="text" name="message" onChange={handleChange} value={formdata.message} />
            {error.message && <span className="error">{error.message}</span>}
          </div>
        </div>

     

        <button className='contact-btn' type="submit">
        {loading ? (
                <>
               Loading...
                </>
              ) : (
                "Submit"
              )}
          
          
          
          
          </button>
      </form>
    </div>
  );
};

export default Contact;
