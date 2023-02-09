import './contact.scss'

import Container from "../shared/container/container";
import Button from "../shared/button/button";

const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <div className='contact-pic'></div>

            <Container nameClass='contact-container'>
                <form className='contact-form' name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />
                    <p className='form-title'>Request Callback</p>
                    <input name='name' className='form-input input-name' defaultValue='Enter your name'/>
                    <input name='email' className='form-input input-email' type='email' defaultValue='Enter email*'/>
                    <Button type='submit' nameClass='contactsBtn'>Send</Button>
                </form>
            </Container>

</section>
)
}
export default Contact