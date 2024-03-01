export const typeDefs = `#graphql
type Game {
    id: ID!
    title: String!
    plarform: [String]!
}
type Review {
    id: ID!
    rating: Int!
    content: String!
}
type Author {
    id: ID!
    name: String!
    verified: Boolean!
}
type Query {
    reviews: [Reviews]
    games: [Game]
    authors: [Author]
}
`

// int (whole number), float (decimal), string, boolean (true or false), ID (used as a key)