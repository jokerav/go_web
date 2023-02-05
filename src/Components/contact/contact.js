import './contact.scss'

import Container from "../shared/container/container";
import Button from "../shared/button/button";

const Contact = () => {
    return (
        <section className='contact'>
            <div className='contact-pic'></div>
            <div className='contact-inner'>
            <Container nameClass='contact-container'>
                <form className='contact-form'>
                    <p className='form-title'>Request Callback</p>
                    <input name='name' className='form-input input-name' defaultValue='Enter your name'/>
                    <input name='email' className='form-input input-email' type='email' defaultValue='Enter email*'/>
                    <Button type='submit' nameClass='contactsBtn'>Send</Button>
                </form>
            </Container>
            </div>



</section>
)
}
export default Contact