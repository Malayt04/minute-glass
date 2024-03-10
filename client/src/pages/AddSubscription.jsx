import React, { useState } from 'react';
import FormField from '../components/FormField';
import { ethers } from 'ethers';
import { useStateContext } from '../context';
import {useNavigate} from 'react-router-dom'

function AddSubscription() {
  const navigate = useNavigate();
  const { createSubscription } = useStateContext();
  const [formData, setFormData] = useState({
    websiteName: '',
    description: '',
    url: '',
    price: '',
    uploadImage: ''
  });

  const handleSubmit =async (e) => {
    try {
      e.preventDefault();
    
        await createSubscription({ ...formData, price: ethers.utils.parseUnits(formData.price, 18) });
        navigate('/');
    } catch (error) {
      console.log(error);
    }
    
      } 
  
  
  
  const handleChange = (fieldName, e) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  return (
    <div>
      <h1 className='text-center text-5xl font-bold text-[#00F]'>Add a Subscription</h1>
      
      <div className="flex justify-center items-center h-screen">
        <form className="bg-[#E8EAFE] border border-gray-300 p-6 rounded-lg" onSubmit={handleSubmit}>
          <FormField
            labelName="Website Name"
            inputType="text"
            value={formData.websiteName}
            handleChange={(e) => handleChange('websiteName', e)} // Fixing the prop name here
          />
          <br />
          <br />
          <FormField
  labelName="Description"
  isTextArea
  inputType="text"
  value={formData.description}
  handleChange={(e) => handleChange('description', e)}
/>
          <br />
          <br />
          <FormField
            labelName="URL"
            inputType="text"
            value={formData.url}
            handleChange={(e) => handleChange('url', e)} // Fixing the prop name here
          />
          <br />
          <br />
          <FormField
            labelName="Price/hr"
            inputType="text"
            value={formData.price}
            handleChange={(e) => handleChange('price', e)} // Fixing the prop name here
          />
          <br />
          <br />
          <FormField
            labelName="Upload an Image"
            inputType="text"
            value={formData.uploadImage}
            handleChange={(e) => handleChange('uploadImage', e)} // Fixing the prop name here
          />
          <br />
          <br />
          <button type="submit" className="w-[537px] h-[76px] rounded-[15px] mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddSubscription;
