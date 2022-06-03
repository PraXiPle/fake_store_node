const { urlencoded } = require('express')

require('dotenv').config()
const
    express = require('express'),
    app = express(),
    PORT = process.env.PORT,
    cors = require('cors'),
    categoryRouter = require('./routers/categoryRouter'),
    productRouter = require('./routers/productRouter'),
    usersRouter = require('./routers/usersRouter')

require('./db.js')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())


categoryRouter(app)
productRouter(app)
usersRouter(app)


app.listen(PORT || 8787, () => console.log('Server is rnning at port: ' + PORT))