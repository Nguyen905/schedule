import { FormGroup, Label, Input } from 'reactstrap'
import { InputField } from '../../../../components/common/InputField';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import * as yup from 'yup'
import { useFormContext } from 'react-hook-form';
ForgotPassword.defaultProps = {
    title: 'Forgot password?',
    sub_title: "Dont worries, we'll send you reset instructions",
    question: "",
    action: 'Back to login',
    url: '/auth/login',
    defaultValues: {
        username: ''
    },
    dataYup: {
        username: yup.string().required('This field is required').min(
            6,
            "Must be more than 6 character"
        )
    }
};
export function ForgotPassword(props) {
    return (
        <>

            <InputField type='text' label='Username' name='username' placeholder='Nhập email của bạn' />


        </>
    );
}
