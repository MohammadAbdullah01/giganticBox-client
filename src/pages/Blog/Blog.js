import React from 'react';
import { Container } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <Container className='mb-3'>
                <div className='blog-q-a' >
                    <h3>What is the difference between javascript and nodejs ?</h3>
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
                    <h3>What is the differences between sql and nosql databases?</h3>
                    <p>
                        <ul>
                            <li>SQL is a relational database system and NoSQL is a non relational database system.</li>
                            <li>SQL is vertically scalable and NoSQL is horizontally scalable.</li>
                            <li>In SQL data are stored in table format and in NoSQL data are stored document based with key-value pairs and graph.</li>
                            <li>SQL databases are Sqlite, MySql, Oracle, Postgres and MS-SQL and NoSQL databases are Cassandra, MongoDB, BigTable, Redis, RavenDb, Hbase, Neo4j and CouchDb.</li>
                        </ul>
                    </p>
                </div>

                <div className='blog-q-a'>
                    <h3>When should we use NodeJs?</h3>
                    <p>We should use NodeJs when we are making a realtime application like chat and when we want to build a easy application which is easy to understand for all because most of the people have a idea about javascript. When we work with big data and analytics the problem we face is it takes a long time to load and it frozen the browser. so the solution is to use Node.js back pressuring makes data processing easier.</p>
                </div>
            </Container>
        </div>
    );
};

export default Blog;