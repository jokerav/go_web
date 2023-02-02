import './button.scss'

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


export default Button;