var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

//GraphQL Schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root resolver
var root = {
    message: () => 'Hello World!'
};

// Create an Express server and GraphQL endpoint
var app = express();
app.use('/graphql',express_graphql({
    schema : schema,
    rootValue : root,
    graphiql : true
}));

app.listen(5000, () => {
    console.log('Server Running On localhost:5000/graphql');
});