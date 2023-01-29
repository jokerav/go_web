import "./container.scss"
const Container = ({children, nameClass=''})=>
     <div className={`container ${nameClass}`}>{children}</div>


export default Container