const express = require('express')

const app = express()

app.get('/', (req, res) => {
    const { message } = req.query
    console.log('Message: ', message)
    res.send(`
    <html>
    <head>
        <title>Docker image</title>
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0%;
                margin: 0%
            }

        </style>
    </head>
    <body>
        <main>
            <h3>Message: ${message ? message : 'No Message'}</h3>
        </main>
    </body>
</html>
    `)
})

app.listen(1215, () => {
    console.log('app listening on 1215')
})

