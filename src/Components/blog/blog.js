import './blog.scss'

import blog320 from "../../images/images/home/blog-320.jpg"
import blog3202x from "../../images/images/home/blog-320@2x.jpg"

import Container from "../shared/container/container";
import Button from "../shared/button/button";

const Blog = () => {
    return (
        <section className='blog'>
            <div className='blog-pic'>
                <picture className='blog-picture'>
                    <source  srcSet={`${blog3202x} 2x, ${blog320} 1x`}
                    />
                    <img src="#" className='blog-img' alt="Фото из блога"/>
                </picture>
            </div>
            <div className="blog-inner">
                <Container nameClass="blogContainer">
                    <p className="blog-above-title">April 16 2020</p>
                    <p className="blog-title">Blog Post One</p>
                    <p className="blog-sub-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum
                        dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab
                        dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
                    <Button nameClass="btn-blog">Read Our Blog</Button>
                </Container>
            </div>

        </section>
    )
}
export default Blog