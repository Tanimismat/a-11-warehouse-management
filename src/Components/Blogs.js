import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5'>
            <div className='mb-5'>
                <h5>Q.1: Difference between Javascript and NodeJS.</h5>
                <table className='border ms-4'>
                    <thead>
                        <tr>
                            <th className='border '>JavaScript</th>
                            <th className='border'>NodeJS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td className='border'>A programming language for writing scripts</td>
                            <td className='border'>Runtime environment for JS</td>
                        </tr>
                        <tr>
                            <td className='border'>Used for client-side</td>
                            <td className='border'>Used for server-side</td>
                        </tr>
                        <tr>
                            <td className='border'>Code can only be run and executed in a web browser</td>
                            <td className='border'>NodeJS helps the code to run outside of the browser</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='mb-5 '>
                <h5>Q.2: When should you use nodejs and when should you use mongodb.</h5>
                <p className='ms-4'>NodeJs - when we have an application that have to be data-intensive (fetching, retrieving, saving), I/O-intensive (having input/output or waiting for an external system for doing something).</p>
                <p className='ms-4'>MongoDB - when we are in need of flexible deployment (flexibility on how and where applications run), efficient analytics application.</p>
            </div>
            <div>
                <h5>Q.3: Difference between sql and nosql database.</h5>
                <table className="ms-4">
                    <thead>
                        <tr>
                            <th className='border'></th>
                            <th className='border'>SQL</th>
                            <th className='border'>noSQL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border'>Data storage model</td>
                            <td className='border'>tables with fixed rows and columns</td>
                            <td className='border'>document: JSON document, key-value: key-value pairs</td>
                        </tr>
                        <tr>
                            <td className='border'>Examples</td>
                            <td className='border'>Oracle, MySQL, PostgreSQL</td>
                            <td className='border'>MongoDB, couchDB, DynamoDB</td>
                        </tr>
                        <tr>
                            <td className='border'>Primary purpose</td>
                            <td className='border'>General purpose</td>
                            <td className='border'>general purpose, large amount of data with simple lookup query or predictable query patterns</td>
                        </tr>
                        <tr>
                            <td className='border'>Scalability</td>
                            <td className='border'>Vertical</td>
                            <td className='border'>Horizontal</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Blogs;