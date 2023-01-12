import React from 'react';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { User } from '../../../models/user.class'
import { ROLES } from '../../../models/role.enum';

const RegisterFormik = () => {

    let user = new User();

    const initialValue = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER,
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                        .min(6, 'The username is too short! (min. 6)')
                        .max(12, 'The username is too long! (max. 12)')
                        .required(),
            email: Yup.string()
                    .email('Invalid email format!')
                    .required('Email is required!'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a role: user/admin!')
                .required('Role is required!'),
            password: Yup.string()
                    .min(6, 'The password is too short! (min. 6)')
                    .required('Password is required!'),
            confirm: Yup.string()
                    .when('password', {
                        is: value => (value && value.length > 0 ? true : false),
                        then: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match!')
                    })
                    .required('Confirm your password!')
        }
    );

    const submit = (values) => {
        alert('Register user...');
    }

    return (
        <div style={{color: 'white'}}> 
            <h4>Register Formik</h4>
            <Formik
                initialValue = { initialValue }
                validationSchema= { registerSchema }
                onSubmit={ async (values) => {
                    await new Promise((r) => setTimeout(r, 200));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

            {({values, touched, errors, isSubmitting, handleBlur, handleChange}) => (
                <Form>
                    <label htmlFor="username">Username</label>
                    <Field id="username" name="username" placeholder="Username" type="text" />

                    {
                        errors.username && touched.username && 
                        (
                            <ErrorMessage name='username' component={'div'}/>
                        )
                    }

                    <label htmlFor="email">Email</label>
                    <Field id="email" name="email" placeholder="mail@mail.com" type="email" />

                    {
                        errors.email && touched.email && 
                        (
                            <ErrorMessage name='email' component={'div'}/>
                        )
                    }

                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" placeholder="Password" type='password' />

                    {
                        errors.password && touched.password && 
                        (
                            <ErrorMessage name='password' component={'div'}/>
                        )
                    }

                    <label htmlFor="confirm">Confirm password</label>
                    <Field id="confirm" name="confirm" placeholder="Confirm password" type='password' />

                    {
                        errors.confirm && touched.confirm && 
                        (
                            <ErrorMessage name='confirm' component={'div'}/>
                        )
                    }


                    <button type="submit">Submit</button>
                    {isSubmitting ? (<p>Login your credentials...</p>) : null}
                </Form>
            )
            }
            </Formik>
        </div>
    );
}

export default RegisterFormik;
