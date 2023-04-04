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
    const { title, question, action, url, sub_title, defaultValues, dataYup } = children.props
    const schema = yup.object().shape(dataYup)
    const form = useForm({
        defaultValues: defaultValues,
        resolver: yupResolver(schema)
    })
    useEffect(() => {
        form.reset()
    }, [location])


    const { handleSubmit } = form
    const onSubmit = (value) => {
        console.log(value);

    }

    return (
        <div className="auth">

            <FormProvider {...form} setDefaultValues={() => setDefaultValues} setDataYup={() => setDataYup}>
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
    );
}
