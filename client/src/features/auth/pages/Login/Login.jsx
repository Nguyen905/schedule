import { FormGroup, Label, Input } from 'reactstrap'
import { InputField } from '../../../../components/common/InputField';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import * as yup from 'yup'
import { useFormContext } from 'react-hook-form';
Login.defaultProps = {
    title: 'Login in to your account',
    sub_title: 'Welcome back! Please enter your details.',
    question: "Don't have an account?",
    action: 'Sign up',
    url: '/auth/signup',
    defaultValues: {
        username: '',
        password: ''
    },
    dataYup: {
        username: yup.string().required('This field is required').min(
            6,
            "Must be more than 6 character"
        ),
        password: yup.string().required('This field is required').min(
            8,
            "Must be more than 8 character"
        ),
    }
};
export function Login(props) {
    return (
        <>

            <InputField type='text' label='Username' name='username' placeholder='Nhập email của bạn' />
            <InputField type='password' label='Password' name='password' placeholder='Nhập password của bạn' />
            <FormGroup
                className='form__remember'
            >
                <FormGroup
                    check
                    inline
                >

                    <Input type='checkbox' />
                    <Label>Remember for 30 days</Label>
                </FormGroup>
                <Link to='/auth/forgot-password'>Forgot password</Link>
            </FormGroup>

        </>
    );
}
