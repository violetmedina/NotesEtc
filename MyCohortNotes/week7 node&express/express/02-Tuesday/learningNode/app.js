// import http core module from node.js library

const http = require('http');


let students = [
    {
        fName: "Victoria",
        city: "Atlanta"
    },
    {
        fName: "Andrew",
        city: "Atlanta"
    },
    {
        fName: "Stephen",
        city: "Houston"
    },
    {
        fName: "James",
        city: "Austin"
    },
    {
        fName: "Matt",
        city: "Seattle"
    },

]


// set up server

const server = http.createServer((request, response) => {
    // handle incoming requests and send out a response
    // console.log(request);
    // send back a response to the client


    switch(request.url){
        case '/':
            response.setHeader('Content-Type', 'text/html')
            response.end(('Hello World!'))
            break;
            
            case '/api':
                response.setHeader('Content-Type', 'application/json')

                let studentsJSON = JSON.stringify(students)
                response.end(studentsJSON)
                break;
            
            default:
                break;
                
            }       

})


//start server

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})
