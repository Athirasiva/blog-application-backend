const  jsonServer = require('json-server')
const cors = require('cors')


const blogServer = jsonServer.create()

const routes = jsonServer.router('db.json')

const middleware = jsonServer.defaults()

blogServer.use(cors())
blogServer.use(routes)

blogServer.use(middleware)

const port = 8080

blogServer.listen(port, ()=>{
    console.log(`server running on port ${port}`);
    
})