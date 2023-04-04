import { useRef } from 'react';
import { FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap'
import { useFormContext } from 'react-hook-form'
import { InputField } from '../../../../components/common/InputField';
Login.defaultProps = {
    title: 'Login in to your account',
    sub_title:'Welcome back! Please enter your details.',
    question: "Don't have an account?",
    action: 'Sign up',
    url: '/auth/signup'
};
export function Login(props) {
    return (
        <>
            
            <InputField type='text' label='Username' name='username' placeholder='Nhập email của bạn' />
            <InputField type='password' label='Password' name='password' placeholder='Nhập password của bạn' />
            

        </>
    );
}
