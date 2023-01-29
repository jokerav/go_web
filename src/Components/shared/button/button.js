import './button.scss'

const Button = ({children, nameClass=''}) => {
    return (
        <button
            type='button'
            className={`btn ${nameClass}`}
        >
            {children}
        </button>
    )

}


export default Button;