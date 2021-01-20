
import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
//import {resolver_list} from './resolver-list';

/* const formatError = (err: any) => {
    console.error('--- GraphQL Error ---');
    console.error('Path:', err.path);
    console.error('Message:', err.message);
    console.error('Code:', err.extensions.code);
    console.error('Original Error', err.originalError);
    return err;
}; */
async function main() {
    //
    /* const schema = await buildSchema({
        resolvers: [StudyRelationsResolver],
        emitSchemaFile: path.resolve(__dirname, './generated-schema.graphql'),
    }); */
    //dotenv.config();
    // console.log('process.env.NODE_ENV',process.env.NODE_ENV);
    const typeDefs = `{
        type Query {
            books: [Book]
          }
    }`
    const books = [
        {
          title: 'Harry Potter and the Chamber of Secrets',
          author: 'J.K. Rowling',
        },
        {
          title: 'Jurassic Park',
          author: 'Michael Crichton',
        },
    ];
    const resolvers = {
        Query: {
          books: () => books,
        },
    };
    const prisma = new PrismaClient();

    const server = new ApolloServer({ typeDefs, resolvers });
       /*  playground: true,
        context:  (request:any) => {
            return ({ prisma, request })
        }
    }); */
    const { port } = await server.listen({port: process.env.PORT || 4000});
    console.log(`GraphQL is listening on ${port}!`);
}

main().catch(console.error);

