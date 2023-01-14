import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';

const TaskFormik = ({ onAdd }) => {

    const TaskSchema = Yup.object().shape({
        name: Yup.string().min(2, "Too short!").max(20,"Too long!").required('Name required!'),
        description: Yup.string().min(2, "Too short!").max(30, 'Too long!').required('Description required!')
    });

    const initialValue = {
        name: '',
        description: '',
        level: LEVELS.NORMAL,
        completed: false
    }


    return (
        <Formik
            initialValues={initialValue}
            onSubmit={(values, actions) =>{
                setTimeout(() => {
                    onAdd(values);
                    actions.resetForm({});
                    actions.setSubmitting(false);
                }, 500);
            }
            }
            validationSchema={ TaskSchema }
        >
            {({ errors }) => (
                <Form>
                    <Field name='name' id='name' placeholder='Task Name'></Field>
                    { errors && errors.name }
                    <Field name='description' id='description' placeholder='Task Description'></Field>
                    { errors && errors.description }
                    <Field as='select' name='level'>
                        <option value={LEVELS.NORMAL}>Normal</option>
                        <option value={LEVELS.URGENT}>Urgent</option>
                        <option value={LEVELS.BLOCKING}>Blocking</option>
                    </Field>
                    <button type='submit'>Submit</button>
                </Form>
            )}
        </Formik>
    );
}

export default TaskFormik;
