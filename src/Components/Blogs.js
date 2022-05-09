import React from 'react';

const Blogs = () => {
    return (
        <>
            <div>
                <h6>Difference between Javascript and NodeJS</h6>
                <table>
                    <thead>
                        <tr>
                            <th>JavaScript</th>
                            <th>NodeJS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>A programming language for writing scripts</td>
                            <td>Runtime environment for JS</td>
                        </tr>
                        <tr>
                            <td>Used for client-side</td>
                            <td>Used for server-side</td>
                        </tr>
                        <tr>
                            <td>Code can only be run and executed in a web browser</td>
                            <td>NodeJS helps the code to run outside of the browser</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h6>When should you use nodejs and when should you use mongodb</h6>
                <p>NodeJs - when we have an application that have to be data-intensive (fetching, retrieving, saving), I/O-intensive (having input/output or waiting for an external system for doing something).</p>
                <p>MongoDB - when we are in need of flexible deployment (flexibility on how and where applications run), efficient analytics application.</p>
            </div>
            <div>
                <h6>Difference between sql and nosql database</h6>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>SQL</th>
                            <th>noSQL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Data storage model</td>
                            <td>tables with fixed rows and columns</td>
                            <td>document: JSON document, key-value: key-value pairs</td>
                        </tr>
                        <tr>
                            <td>Examples</td>
                            <td>Oracle, MySQL, PostgreSQL</td>
                            <td>MongoDB, couchDB, DynamoDB</td>
                        </tr>
                        <tr>
                            <td>Primary purpose</td>
                            <td>General purpose</td>
                            <td>general purpose, large amount of data with simple lookup query or predictable query patterns</td>
                        </tr>
                        <tr>
                            <td>Scalability</td>
                            <td>Vertical</td>
                            <td>Horizontal</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Blogs;