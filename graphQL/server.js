const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { position_list, student_data } = require('./database');
const { position } = require('./Resolvers/position');
const { Query } = require('./Resolvers/query');

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        position,
        Query
    }
});


server.listen().then(({ url }) => {
    console.log("Server running at " + url
    )
})