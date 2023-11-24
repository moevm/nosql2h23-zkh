import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import neo4j from 'neo4j-driver';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { typeDefs } from '../gql/type-dfs';
export const gqlProviderFactory = async () => {

    const { NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD, DB_OUT} = process.env;
    const driver = neo4j.driver(
      NEO4J_URI+DB_OUT,
      neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD)
    );
  
    const neoSchema = new Neo4jGraphQL({
      typeDefs,
      driver
    });
  
    const schema = await neoSchema.getSchema();
    await neoSchema.assertIndexesAndConstraints({
      options: { create: true }
    });
  
    return {
      playground: true,
      schema
    };
  };
  
  @Module({
    imports: [
      GraphQLModule.forRootAsync<ApolloDriverConfig>({
        driver: ApolloDriver,
        useFactory: gqlProviderFactory
      })
    ]
  })
  export class GqlModule {
  }