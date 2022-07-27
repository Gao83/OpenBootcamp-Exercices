import React from 'react'
import { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.number()
            .required('Password is required')
    }
)


function LoginFormik() {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const navigate = useNavigate()

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                initialValues={initialCredentials}
                validationSchema={loginSchema}                               //yup schema
                onSubmit={async (values) => {                                //on submit event
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    //Saving the data in localstorage
                    await localStorage.setItem('credentials', values)
                    navigate('/profile')
                }}
            >
                {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (

                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            type="email"
                            name="email"
                            placeholder="example@email.com"
                        />

                        {/* Errors email */}
                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage name="email" component='div' />
                            )
                        }

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                        />

                        {/* Errors password */}
                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name="password" component='div' />
                            )
                        }
                        <button type="submit">Login</button>
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}
                        <div>
                            <span>You don't have an acount</span>
                            <button onClick={()=> navigate('/register')}>Register</button>
                        </div>
                    </Form>
                )}

            </Formik>
        </div >


    )
}

export default LoginFormik