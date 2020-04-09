import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLList,
} from "graphql";
import main from "./data/main";
import express = require("express");
import graphqlHttp = require("express-graphql");
import Jobs from "./types/jobs";
import Repos from "./types/repos";
import Experties from "./types/experties";

const app = express();

const data = main.getInstance();

const queryObject = new GraphQLObjectType({
  name: "Basic",
  description: "Basic details",
  fields: {
    name: {
      type: GraphQLString,
      description: "My Name",
      resolve: () => data.Basic.name,
    },
    company: {
      type: GraphQLString,
      description: "I am working in",
      resolve: () => data.Basic.company,
    },
    email: {
      type: GraphQLString,
      description: "Contact me at",
      resolve: () => data.Basic.email,
    },
    age: {
      type: GraphQLString,
      description: "I am",
      resolve: () => data.Basic.age,
    },
    twitter: {
      type: GraphQLString,
      description: "Connect me on twitter",
      resolve: () => data.Basic.twitter,
    },
    github: {
      type: GraphQLString,
      description: "Stalk my works",
      resolve: () => data.Basic.github,
    },
    instagram: {
      type: GraphQLString,
      description: "Follow me on instagram",
      resolve: () => data.Basic.instagram,
    },
    jobs: {
      type: new GraphQLList(Jobs),
      resolve: () => data.Basic.jobs,
    },
    repos: {
      type: new GraphQLList(Repos),
      resolve: () => data.Basic.repos,
    },
    experties: {
      type: new GraphQLList(Experties),
      resolve: () => data.Basic.experties,
    },
  },
});

const mutationObject = new GraphQLObjectType({
  name: "areyoualive",
  description: "Sample life",
  fields: {
    areyoualive: {
      type: GraphQLString,
      description: "My Name",
      args: {
        question: { type: GraphQLBoolean },
      },
      resolve: () => true,
    },
  },
});

const schema = new GraphQLSchema({
  query: queryObject,
  mutation: mutationObject,
});

app.use(
  ["/graphql", "/"],
  graphqlHttp({
    schema: schema,
    graphiql: true,
    pretty: true,
  })
);
app.listen(4000);
export {};
