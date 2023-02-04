import './blog.scss'

import Container from "../shared/container/container";
import Button from "../shared/button/button";

const Blog = () => {
    return (
        <section className='blog' id='blog'>
            <div className='blog-pic'>
            </div>
            <div className="blog-inner">
                <Container nameClass="blogContainer">
                    <p className="blog-above-title">April 16 2020</p>
                    <p className="blog-title">Blog Post One</p>
                    <p className="blog-sub-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum
                        dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab
                        dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
                    <Button nameClass="blog-btn">Read Our Blog</Button>
                </Container>
            </div>

        </section>
    )
}
export default Blog