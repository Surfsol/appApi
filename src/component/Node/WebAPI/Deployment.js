import React from 'react'



const Deployment = () => {

    return(
        <>
        <p>npm init -y - install package.json</p>
        <p>create index.js</p>
        <p>npm install express</p>
        <p>git init</p>
        <p>npm i nodemon -D // could do global or dev</p>
        <p>scripts: node index.js // does not rerender when saved</p>
        <p>scripts: nodemon index.js //will rerender upon save</p>
        <p>scripts:</p>
        <h3>index.js</h3>
        <p>const express = require('express')</p>
        <p>const server = express()  //create instance of express server</p>
        <p>server.use(express.json())// allows express to read .json from body of request</p>
        <p>server.get('/', (req, res) => { res.status(200).json({hello: 'Web 23'})}</p>
        <p>server.listen(4000, () => {
            console.log('\n Server running on port 4000\n')
        }</p>

        </>
    )
}
export default Deployment