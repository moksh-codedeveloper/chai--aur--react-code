import React, {forwardRef, useId} from 'react';
function Select({
    options,
    label,
    className = "",
    ...props
}, ref) {
    const id = useId();

  return (
    <div className='w-full'>
      {label && <label htmlFor={id}></label>}
      <select {...props} id={id} ref={ref} className={` pl-3 pr-10 py-2 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${className}`}>
        {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
        ))}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)