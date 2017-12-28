import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} from 'graphql';
import {_} from "underscore";
import models from '../../models/index.js';
import {attributeFields, resolver} from "graphql-sequelize";

export default new GraphQLObjectType({
    name: 'author',
    description: 'author of some quote',
    fields () {
     return  _.assign(attributeFields(models.author));
    }
});
