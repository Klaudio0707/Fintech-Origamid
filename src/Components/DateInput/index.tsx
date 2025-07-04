import React from 'react'

type IDateInput = React.ComponentProps<'input'> & {
    label: string;
}

const DateInput= ({label, ...props}: IDateInput) => {
  return (
    <div>
      <label htmlFor="inicio">{label}</label>
      <input id="inicio" type="date" />

    </div>
  )
}

export default DateInput;
