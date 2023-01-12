import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';

const CreateForm = () => {

    const initialValue = {
        taskName: '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL
    }

    const taskSchema = Yup.object().shape(
        {
            taskName: Yup.string().required('Name is required!'),
            description: Yup.string().required('Description is required!'),
            level: Yup.string()
                .oneOf([LEVELS.BLOCKING, LEVELS.NORMAL, LEVELS.URGENT ], 'You must select a level: normal/urgent/blocking!')
                .required('Please select a level!'),
            completed: Yup.bool()
        }
    )

    return (
        <div>
      <h1>Task List</h1>
      <Formik
        initialValues={initialValue}
        onSubmit={ async (values) => {
                    await new Promise((r) => setTimeout(r, 200));
                    alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={taskSchema}
      >
        {({ errors }) => (
          <Form>
            <Field name="taskName" placeholder="Task Name" />
            {errors && errors.taskName}
            <Field name="description" placeholder="Task Description" />
            {errors && errors.description}

            <Field as="select" name="level">
              <option value={LEVELS.NORMAL}>Normal</option>
              <option value={LEVELS.URGENT}>Urgent</option>
              <option value={LEVELS.BLOCKING}>Blocking</option>
            </Field>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
        </div>
    );
}

export default CreateForm;
