import React from 'react'

const FormSelect = ({name, label, defaulValue, size,list}) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
        className={`select select-bordered ${size}`}
        name={name}
        id={name}
        defaultValue={defaulValue}
      >
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default FormSelect