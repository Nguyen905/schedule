import { useRef } from 'react';
import { FormGroup, Label, Input } from 'reactstrap'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import { InputField } from '../../../../components/common/InputField';
import { Link } from 'react-router-dom';

SignUp.defaultProps = {
    title: 'Create an account',
    question: 'You have an account?',
    action: 'Login',
    url: '/auth/login'
};

export function SignUp(props) {
    const { register, data } = useFormContext()
    return (
        <>
            <InputField type='text' label='Username' name='username' placeholder='Nhập email của bạn' />
            <InputField type='password' label='Password' name='password' placeholder='Nhập password của bạn' />
            <InputField type='password' label='Re-password' name='re_password' placeholder='Nhập lại password của bạn' />

            <FormGroup
                className='form__remember'
            >
                <FormGroup
                    check
                    inline
                >

                    <Input type='checkbox' />
                    <Label>I agree to the<Link > Terms of Service </Link> and <Link >Privacy Policy</Link></Label>
                </FormGroup>

            </FormGroup>
        </>
    );
}
