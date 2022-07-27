import React from 'react'
import { User } from '../../../models/user_class'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik'
import * as Yup from 'yup'
import { ROLES } from '../../../models/roles.enum'
import { Col, Row } from 'react-bootstrap'


function RegisterFormik() {

    let user = new User()

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Username Too Short!')
                .max(12, 'Username Too Long!')
                .required('Username is Required'),
            email: Yup.string()
                .required('Username is Required'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a role: user/admin')
                .required('Rol is required'),
            password: Yup.string()
                .min(6, 'Password Too Short!')
                .required('Username is Required'),
            confirm: Yup.string()
                .when('password', {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref('password')],
                        'Passwords must match'
                    )
                })
                .required('You must confirm the password')
        }
    )

    const submit = (values) => {
        alert('Register user')
    }

    return (
        <div>
            <h4 style={{ paddingLeft: '600px' }}>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {                                //on submit event
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
                    <Form >
                        <Row className="justify-content-md-center">
                            <Col md={3}>
                                <label htmlFor="username">Username</label>
                                <Field id="username" type="text" name="username" placeholder="Your username" />
                                {errors.username && touched.username && (<ErrorMessage name="username" component='div' />)}

                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col md={3}>
                                <label htmlFor="email">Email</label>
                                <Field id="email" type="email" name="email" placeholder="example@email.com" />
                                {errors.email && touched.email && (<ErrorMessage name="email" component='div' />)}
                            </Col>
                        </Row>

                        <Row className="justify-content-md-center">
                            <Col md={3}>
                                <label htmlFor="password" >Password</label>
                                <Field id="password" type="password" name="password" placeholder="Introduce a password" />
                                {errors.password && touched.password && (<ErrorMessage name="password" component='div' />)}
                            </Col>
                        </Row>

                        <Row className="justify-content-md-center">
                            <Col md={3}>
                                <label htmlFor="confirm">Confirm password</label>
                                <Field id="confirm" type="password" name="confirm" placeholder="Confirm your password" />
                                {errors.confirm && touched.confirm && (<ErrorMessage name="confirm" component='div' />)}
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col md={3}>
                                <button className='btn btn-warning' type="submit">Register account</button>
                                {isSubmitting ? (<p>Sending your credentials...</p>) : null}
                            </Col>
                        </Row>
                    </Form>
                )}


            </Formik>
        </div>
    )
}

export default RegisterFormik