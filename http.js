

// manual approach (create package.json in the root, create properties, etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)











// const http = require('http')

// const server  = http.createServer((req, res) =>{
//      if (req.url === '/') {
//         res.write('Welcome to our Home Page')
//         return res.end()
//      } 

//      if (req.url === '/about') {
//         res.write('This is our Short History')
//         return res.end()
        
//      } else {
//         res.end(`
//         <h1>Ooops!</h1>
//           <p> We cannot find the page you are looking for</p>
//           <a href="/"> Back home </a>
//        `) 
//      }
// })

// server.listen(3000)