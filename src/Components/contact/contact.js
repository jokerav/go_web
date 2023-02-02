import './contact.scss'
import contactWp2x from '../../images/images/home/contact@2x.webp'
import contactJp2x from '../../images/images/home/contact@2x.jpg'
import contactWp from '../../images/images/home/contact.webp'
import contactJp from '../../images/images/home/contact.jpg'
import Container from "../shared/container/container";
import Button from "../shared/button/button";

const Contact = () => {
    return (
        <section className='contact'>
            <picture className='contact-pic'>
                <source srcSet={`${contactWp2x} 2x, ${contactWp} 1x, ${contactJp2x} 2x, ${contactJp} 1x`}/>
                <img src='#' className='contact-picture' alt='фото сотрудника коллцентра'/>
            </picture>
            {/*<div className='contact-inner'>*/}
            <Container nameClass='contact-container'>
                <form className='contact-form'>
                    <p className='form-title'>Request Callback</p>
                    <input name='name' className='form-input input-name' value='Enter your name'/>
                    <input name='email' className='form-input input-email' type='email' value='Enter email*'/>
                    <Button type='submit' nameClass='contactsBtn'>Send</Button>
                </form>
            </Container>
            {/*</div>*/}
        </section>
    )
}
export default Contact