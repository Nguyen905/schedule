import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Form, FormGroup, Button, Input, Label } from 'reactstrap'
import { useForm, FormProvider } from "react-hook-form";
import { useLocation } from 'react-router-dom';

import './authlayout.scss'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export function AuthLayout({ children }) {

    const location = useLocation();
    const [data, setData] = useState({})
    const [defaultValues, setDefaultValues] = useState({})
    const { title, question, action, url, sub_title } = children.props
    useEffect(() => {
        if (location.pathname === '/login') {
            setDefaultValues({
                username: '',
                password: ''
            })
            setData({
                username: yup.string().required('This field is required').min(
                    6,
                    "Must be more than 6 character"
                ),
                password: yup.string().required('This field is required').min(
                    8,
                    "Must be more than 8 character"
                ),
            })
        } else if (location.pathname === '/signup') {
            setDefaultValues({ ...defaultValues, re_password: '' })
            setData({
                ...data,
                re_password: yup.string().required('This field is required').min(
                    8,
                    'Must be more than 8 character'
                ).oneOf([yup.ref('password'), null], 'Passwords must match'),
            })
        }
    }, [location])
    const schema = yup.object().shape(data)
    const form = useForm({
        defaultValues: defaultValues,
        resolver: yupResolver(schema)
    })
    const { handleSubmit, formState: { errors } } = form
    const onSubmit = (value) => {
        console.log(value);

    }

    return (
        <div className="App">
            <div className="auth">
              
                <FormProvider {...form} data={data}>
                    <Form className='auth__form' onSubmit={handleSubmit(onSubmit)}>
                        <div className="auth__form-logo">

                        </div>
                        <div className="auth__form-header">
                            <h2>{title}</h2>
                            <p style={{ color: '#475467' }}>{sub_title}
                                <> </>
                            </p>
                        </div>
                        <div className="auth__form-content">
                            <div className='form'>
                                {children}
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
                                    <Link style={{ marginLeft: '20px' }}>Forgot password</Link>
                                </FormGroup>

                                <FormGroup >
                                    <Button className='form__button'>Tiếp tục</Button>
                                </FormGroup>
                                <hr />
                                <FormGroup>
                                    <Button className='form__google'>
                                        <div className='form__google-icon'></div>
                                        <div className='form__text'>Sign in with Google</div>
                                    </Button>
                                </FormGroup>
                                <FormGroup>
                                    <Button className='form__facebook'>
                                        <div className='form__facebook-icon'></div>
                                        <div className='form__text'>
                                            Sign in with Facebook
                                        </div>
                                    </Button>
                                </FormGroup>
                                <FormGroup>
                                    <Button className='form__linkedin'>
                                        <div className='form__linkedin-icon'></div>
                                        <div className='form__text'>
                                            Sign in with LinkedIn
                                        </div>
                                    </Button>
                                </FormGroup>

                            </div>
                        </div>
                        <FormGroup className='auth__form-footer'>
                            <Label>{question} <Link to={url}>{action}</Link></Label>
                        </FormGroup>
                    </Form>
                </FormProvider>
            </div>
        </div>
    );
}
