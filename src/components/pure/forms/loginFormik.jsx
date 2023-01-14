import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('Invalid email format!').required('Email is required!'),
        password: Yup.string().required('Password is required!')
    }
);


const LoginFormik = ({ onSubmit }) => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const history = useHistory();

    return (
        <div style={{color: 'white'}}>
            <h4>Login Formik</h4>
            <Formik
                initialValues = { initialCredentials }
                validationSchema= { loginSchema }
                onSubmit={(values, actions) => {
                setTimeout(() => {
                onSubmit(values);
                actions.resetForm({});
                actions.setSubmitting(false);
                }, 500);
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
