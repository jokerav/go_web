import './button.scss'
import PropTypes from 'prop-types';
const Button = ({children, nameClass='', type='button'}) => {
    return (
        <button
            type={`${type}`}
            className={`btn ${nameClass}`}
        >
            {children}
        </button>
    )
}
Button.propTypes = {
    nameClass:PropTypes.string,
        type:PropTypes.string,
        children:PropTypes.node,
}
export default Button;