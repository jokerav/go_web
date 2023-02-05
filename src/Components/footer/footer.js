import './footer.scss'
import {ReactComponent as FacebookLogo} from '../../images/images/socials/facebook.svg';
import {ReactComponent as YouTubeLogo} from '../../images/images/socials/youtube.svg';
import {ReactComponent as TwitterLogo} from '../../images/images/socials/twitter.svg';
import {ReactComponent as LinkedInLogo} from '../../images/images/socials/linkdln.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <ul className='social'>
                <li className='footer-social-item'>
                    <a className='social-link' href='##'>
                        <FacebookLogo className='social-icon'/>
                    </a>
                </li>
                <li className='footer-social-item'>
                    <a className='social-link' href='##'><YouTubeLogo
                        className='social-icon'/>
                    </a>
                </li>
                <li className='footer-social-item'>
                    <a className='social-link' href='##'><TwitterLogo
                        className='social-icon'/>
                    </a>
                </li>
                <li className='footer-social-item'>
                    <a className='social-link' href='##'> <LinkedInLogo
                        className='social-icon'/>
                    </a>
                </li>
            </ul>

            <p className='copyright'>Copyright © 2021 - FinanceLedger</p>
        </footer>
    )
}
export default Footer