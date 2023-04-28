const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const cors = require("cors");
const bodyParser = require('body-parser');
const {GraphQLSchema, graphql} = require("graphql")
const { ApolloServer } = require('apollo-server-express')


const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


// const server = new ApolloServer({
//     modules:[
//         require('./graphql/signup'),
//         require('./graphql/signin'),
//     ]
// })

//server.applyMiddleware({ app })

app.use('/graphql',graphqlHTTP({

    graphql:true
}));

const PORT = process.env.PORT || 7000;

app.listen(PORT,()=>{
    console.log(`app runnning on port ${PORT}`)
})