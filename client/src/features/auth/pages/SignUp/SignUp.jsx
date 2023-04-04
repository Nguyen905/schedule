import { useRef } from 'react';
import { FormGroup, Label, Input } from 'reactstrap'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import { InputField } from '../../../../components/common/InputField';
import { Link } from 'react-router-dom';
import * as yup from 'yup'


SignUp.defaultProps = {
    title: 'Create an account',
    question: 'You have an account?',
    action: 'Login',
    url: '/auth/login',
    defaultValues: {
        username: '',
        password: '',
        re_password: ''
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
        re_password: yup.string().required('This field is required').min(
            8,
            'Must be more than 8 character'
        ).oneOf([yup.ref('password'), null], 'Passwords must match'),
    }
};

export function SignUp(props) {
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
