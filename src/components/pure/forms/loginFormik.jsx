import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('Invalid email format!').required('Email is required!'),
        password: Yup.string().required('Password is required!')
    }
);


const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div style={{color: 'white'}}>
            <h4>Login Formik</h4>
            <Formik
                initialValues = { initialCredentials }
                validationSchema= { loginSchema }
                onSubmit={ async (values) => {
                    await new Promise((r) => setTimeout(r, 200));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credentials', values);
                }}    
            >

                {/* We obtain props from Formik */}

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur}) => (
                        <Form>
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

                            
                            <button type="submit">Submit</button>
                            {isSubmitting ? (<p>Login your credentials...</p>) : null}
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
}

export default LoginFormik;
