import React from 'react';
import { FormGroup, Label, FormFeedback } from 'reactstrap'
import { useFormContext } from 'react-hook-form'
export function InputField(props) {
    const { register, data, formState: { errors, touchedFields } } = useFormContext()
    const { type, label, name, placeholder } = props

    const isError = errors[name]
    return (
        <FormGroup className='position-relative'>
            <Label htmlFor={name}>
                {label}
            </Label>
            <input className={isError ? 'is-invalid form-control' : ' form-control'} placeholder={placeholder} {...register(name)} type={type} />
            <FormFeedback  >{errors[name]?.message}</FormFeedback>
        </FormGroup>
    );
}
