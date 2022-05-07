import React from 'react';
import { Container } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <Container>
                <div className='blog-q-a' >
                    <h2>What is the difference between javascript and nodejs ?</h2>
                    <p>
                        <ul>
                            <li>Javascript is a programming language and nodeJs is javascript's runtime environment.</li>
                            <li>Javascript runs in browser but NodeJs is used for javascript developers for libraries.</li>
                            <li>Javascript can run in any engine like Safari, Firefox, google chrome. But nodeJs runs in V8 engine.</li>
                            <li>JS is basically used on the client-side and NodeJs used for server-side.</li>
                        </ul>
                    </p>
                </div>
                <div className='blog-q-a'>
                    <h2>When should we use NodeJs?</h2>
                    <p>We should use NodeJs when we are making a realtime application like chat and when we want to build a easy application which is easy to understand for all because most of the people have a idea about javascript.</p>
                </div>
                <div className='blog-q-a'></div>
            </Container>
        </div>
    );
};

export default Blog;