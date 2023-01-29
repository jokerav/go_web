import "./header.scss"
import {ReactComponent as FinanceLogo} from '../../images/Finance_Ledger_Logo.svg';
import Container from "../shared/container/container";
import Button from "../shared/button/button";
import {ReactComponent as Vector} from '../../images/Vector.svg';

const Header = () => {

    return (
        <header className='header'>
            <Container>
                <div className="header-inner">
                    <div className="header-logo">
                        <FinanceLogo className='logo'/>
                        <p className='logo-text'>Finance<span> ledger</span></p>
                    </div>
                    <ul className='menu-list'>
                        <li className='menu-item'>Home</li>
                        <li className='menu-item'>About</li>
                        <li className='menu-item'><a href="#cases"                                                    >Cases</a></li>
                        <li className='menu-item'><a href='#blog'>Blog</a></li>
                        <li className='menu-item'><a href='#contacts'>Contact</a></li>
                    </ul>
                </div>
                <div className="hero">
                    <div className='hero-inner'>
                        <p className="hero-title">The Sky Is The Limit</p>
                        <p className='hero-subtitle'>We provide world class financial assistance</p>
                        <Button text='' nameClass='hero-btn'> <Vector/> Read More</Button>
                    </div>

                </div>
            </Container>
        </header>
    )
}
export default Header