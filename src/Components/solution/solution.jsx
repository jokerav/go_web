import './solution.scss'

import Container from "../shared/container/container";
import Button from "../shared/button/button";

const Solutions = () => {
    return (
        <section className='solutions'>
            <div className='solutions-pic'>
            </div>
            <div className="solution-inner">
                <Container nameClass="solutionContainer">
                    <p className="solutions-above-title">What you are looking for</p>
                    <p className="solutions-title">We provide bespoke solutions</p>
                    <p className="solutions-sub-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Voluptate, ipsum
                        dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab
                        dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
                    <Button nameClass="btn-solution">Read More</Button>
                </Container>
            </div>

        </section>
    )
}
export default Solutions