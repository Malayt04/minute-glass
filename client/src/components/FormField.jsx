import React from 'react'

function FormField({ labelName, inputType, isTextArea, value, handleChange }) {
  return (
    <label className='text-[#00FF] text-[30px] mb-2'>
        {labelName && (
        <span className=''>
            {labelName}
        </span>
        )}
        <br/>
        {isTextArea ? (
            <textarea
            onChange={handleChange}
            required
            value={value}
            rows={10}
            className='p-3 w-[537px]  h-[169px] outline-none border border-[#00FF] rounded-[15px]'
            />
        ):
        (
            <input 
            required
            value={value}
            onChange={handleChange}
            type={inputType}
            step="0.1"
            className='p-3 w-[537px]  h-[76px] outline-none border border-[#00FF] rounded-[15px]'
            />
        )
        }
    </label>
  )
}

export default FormField
