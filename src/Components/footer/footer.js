import './footer.scss'
import {ReactComponent as FacebookLogo} from '../../images/images/socials/facebook.svg';
import {ReactComponent as YouTubeLogo} from '../../images/images/socials/youtube.svg';
import {ReactComponent as TwitterLogo} from '../../images/images/socials/twitter.svg';
import {ReactComponent as LinkedInLogo} from '../../images/images/socials/linkdln.svg';

const Footer = () => {
    return (
        <section className='footer'>
            <ul className='social'>
                <li className='footer-social-item'><FacebookLogo className='social-icon'/></li>
                <li className='footer-social-item'><YouTubeLogo className='social-icon'/></li>
                <li className='footer-social-item'><TwitterLogo className='social-icon'/></li>
                <li className='footer-social-item'><LinkedInLogo className='social-icon'/></li>
            </ul>

            <p className='copyright'>Copyright © 2021 - FinanceLedger</p>
        </section>
    )
}
export default Footer