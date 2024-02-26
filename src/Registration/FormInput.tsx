import React, { type ChangeEvent, type FC, type HTMLInputTypeAttribute, type ReactElement, useState } from 'react'
import clsx from 'clsx'

interface FormInputProps {
  name: string
  placeHolder: string
  type: HTMLInputTypeAttribute
  fieldValidator?: (value: string) => boolean
}

const FormInput: FC<FormInputProps> = ({ name, placeHolder, type, fieldValidator }): ReactElement => {
  const [input, setInput] = useState<string>('')
  const [feedbackClass, setFeedbackClass] = useState<string>('form-control')

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target
    setInput(value)

    const isValidField = fieldValidator !== undefined ? fieldValidator(value) : true

    setFeedbackClass(clsx(
      'form-control',
      {
        'is-valid': value !== '' && isValidField,
        'is-invalid': value !== '' && !isValidField
      }))
  }

  return (
    <div className="col-md-6 mb-3">
      <label htmlFor={name}>{placeHolder}</label>
      <input onChange={handleChange}
             value={input}
             type={type}
             className={feedbackClass}
             id={name}
             placeholder={placeHolder}
             required/>
      <div className="invalid-feedback">
        Please provide a valid {name}.
      </div>
    </div>
  )
}

export default FormInput
