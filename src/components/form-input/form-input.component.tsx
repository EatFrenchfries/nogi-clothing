import { InputHTMLAttributes, FC } from 'react'
import { Group } from './form-input.styles'

type FormInputProps = {
  label: string
} & InputHTMLAttributes<HTMLInputElement>

const FormInput:FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <input className="form-input" {...otherProps} />
      {label && <label className={`${typeof otherProps.value === 'string' && otherProps.value.length ? 'shrink' : null} form-input-label`}>{label}</label>}
    </Group>
  )
}

export default FormInput
