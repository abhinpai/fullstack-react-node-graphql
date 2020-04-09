import { GraphQLObjectType, GraphQLString } from "graphql";

const Experties: GraphQLObjectType = new GraphQLObjectType({
  name: "Experties",
  description: "Experties in these technology",
  fields: {
    name: {
      type: GraphQLString,
      description: "Name",
    },
    technology: {
      type: GraphQLString,
      description: "Technology Name",
    },
    image: {
      type: GraphQLString,
      description: "Logo of the technology",
    },
  },
});

export default Experties;
