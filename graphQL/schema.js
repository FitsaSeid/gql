const { ApolloServer, gql } = require('apollo-server');


module.exports = typeDefs = gql`
    type Query {
        students: [student]
        student(id: String): student
        stud(f_name: String): [student]
        positions: [position]
        position(id: String): position
    }

    type student {
        id: String,
        f_name: String,
        GPA: Float,
        department: String
    }

    type position {
        position_id: String!,
        position_name: String!
        students: [student]
    }
`
