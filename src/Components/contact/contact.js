import './contact.scss'

import {ReactComponent as WarningIcon} from '../../images/images/form/worning.svg';

import Container from "../shared/container/container";
import Button from "../shared/button/button";

import {useFormik} from 'formik';
import * as Yup from 'yup';

const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: 'Enter your name',
            email: 'Enter email*',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(20, 'Must be 20 characters or less'),
            email: Yup.string().email('Invalid email address').required('This is a required field'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <section className='contact' id='contact'>
            <div className='contact-pic'></div>

            <Container nameClass='contact-container'>
                <form className='contact-form' onSubmit={formik.handleSubmit} name="contact" method="post"
                      data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact"/>
                    <p className='form-title'>Request Callback</p>
                    <input
                        name='name'
                        className='form-input input-name'
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div>{formik.errors.name}</div>
                    ) : null}
                    <input name='email'
                           className='form-input input-email'
                           id="email"
                           name="email"
                           onChange={formik.handleChange}
                           value={formik.values.email}/>
                    {formik.touched.email && formik.errors.email ? (
                        <div><WarningIcon/><span>This is a required field</span></div>
                    ) : null}
                    <Button type='submit' nameClass='contactsBtn'>Send</Button>
                </form>
            </Container>

        </section>
    )
}
export default Contact