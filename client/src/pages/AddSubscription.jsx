import React, { useState } from 'react';
import FormField from '../components/FormField';
import Wait from '../components/Wait';

function Login() {
  const [formData, setFormData] = useState({
    websiteName: '',
    description: '',
    url: '',
    price: '',
    uploadImage: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const handleChange = (fieldName, e) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  return (
    <div>
     
      <h1 className='text-center text-5xl font-bold text-[#00F]'>add a subscription</h1>
      
      <div className=" flex justify-center items-center h-screen">
  <form  className="bg-[#E8EAFE]  border border-gray-300 p-6 rounded-lg" onSubmit={handleSubmit}>
    <FormField
      labelName="Website Name"
      inputType="text"
      value={formData.websiteName}
      onChange={(e) => handleChange('websiteName', e)}
    />
    <br/>
    <br/>
    <FormField
      labelName="Description"
      isTextArea
      inputType="text"
      value={formData.description}
      onChange={(e) => handleChange('description', e)}
    />
    <br/>
    <br/>
    <FormField
      labelName="URL"
      inputType="text"
      value={formData.url}
      onChange={(e) => handleChange('url', e)}
    />
    <br/>
    <br/>
    <FormField
      labelName="Price/hr"
      inputType="text"
      value={formData.price}
      onChange={(e) => handleChange('price', e)}
    />
    <br/>
    <br/>
    <FormField
      labelName="Upload an Image"
      inputType="text"
      value={formData.uploadImage}
      onChange={(e) => handleChange('uploadImage', e)}
    />
    <br/>
    <br/>
    <button type="submit" className="w-[537px] h-[76px] rounded-[15px] mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
  </form>
</div>


    </div>
  );
}

export default Login;
