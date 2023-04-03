import { useRef } from 'react';
import { FormGroup, Label, Input } from 'reactstrap'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import { InputField } from '../../components/common';

SignUp.defaultProps = {
    title: 'Create an account',
    question: 'You have an account?',
    action: 'Login',
    url: '/login'
};

export function SignUp(props) {
    const { register, data } = useFormContext()
    return (
        <>
            <InputField type='text' label='Username' name='username' placeholder='Nhập email của bạn' />
            <InputField type='password' label='Password' name='password' placeholder='Nhập password của bạn' />
            <InputField type='password' label='Re-password' name='re_password' placeholder='Nhập lại password của bạn' />

        </>
    );
}
