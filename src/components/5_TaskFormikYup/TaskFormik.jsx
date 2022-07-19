import React from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import { Formik, Form, Field, ErrorMessage, } from 'formik'
import * as Yup from 'yup'


function TaskFormik() {

    let task = new Task()

    const initialValues = {
        name: '',
        description: '',
        completed: false,
        level:''
    }

    const taskSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(6, 'Name is Too Short!')
                .max(12, 'Name is Too Long!')
                .required('Name is Required'),
            description: Yup.string()
                .required('Description is Required'),
            completed: Yup.boolean()
                .required('Completed is Required'),
            level: Yup.string()
                .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'You must select a level')
                .required('Level is required'),
        }
    )

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={taskSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
                    <Form>
                        <label htmlFor="name">Name of the task:</label>
                        <Field id="name" type="text" name="name" placeholder="your task" />
                        {errors.name && touched.name && (<ErrorMessage name="name" component='div' />)}

                        <label htmlFor="description">Description:</label>
                        <Field id="description" type="text" name="description" placeholder="Describe your task" />
                        {errors.description && touched.description && (<ErrorMessage name="name" component='div' />)}

                        <label htmlFor="level">Select the level</label>
                        <Field name="level" as="select">
                            <option value=''>Choose one</option>
                            <option value={LEVELS.NORMAL}>Normal</option>
                            <option value={LEVELS.URGENT}>Urgent</option>
                            <option value={LEVELS.BLOCKING}>Blocking</option>
                        </Field>
                        {errors.level && touched.level && (<ErrorMessage name="level" component='div' />)}

                        <button type="submit"> New Task</button>
                        {isSubmitting ? (<p>Creating your tasK...</p>) : null}
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default TaskFormik