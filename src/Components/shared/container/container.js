import "./container.scss"
import PropTypes from 'prop-types';
import Button from "../button/button";
const Container = ({children, nameClass=''})=>
     <div className={`container ${nameClass}`}>{children}</div>

Button.propTypes = {
    nameClass:PropTypes.string,
    children:PropTypes.node,
}
export default Container