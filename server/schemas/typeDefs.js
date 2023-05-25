const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type User {

    }

    type Book {
       
    }

    type Auth {

    }

    input BookInput {

    }

    type Query {
        me: User
    }

    type Mutations {
        addUser: 
        login:
        saveBook:
        removeBook:
    }
`;

module.exports = typeDefs;
    