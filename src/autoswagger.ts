import swaggerAutogen from 'swagger-autogen';
import moment from 'moment';

const outputFile = '../endpoints.json';

const doc = {
    info: {
        version: '1.0.0',            // by default: '1.0.0'
        title: 'API SOIL DESAFIO',              // by default: 'REST API'
        description: 'Desafio programatico soil'         // by default: ''
    },
    servers: [
        {
            url: 'http://localhost:3000',              // by default: 'http://localhost:3000'
            description: 'Development'       // by default: ''
        },
    ],
    tags: [                   // by default: empty Array
        {
            name: 'users',             // Tag name
            description: 'Usuarios'       // Tag description
        },
    ],
    components: {
        schemas: {
            userList: [{
                name: 'John Doe',
                email: 'example@example.com',
                roles: 'ADMIN',
                createdAt: moment(Date.now()).format('DD/MM/YYYY HH:mm:ss'),
                updatedAt: moment(Date.now()).format('DD/MM/YYYY HH:mm:ss')
            }],
            errorUserList: {
                error: 'undefined'
            },
            userCreate: {
                name: 'John Doe',
                email: 'example@example.com',
                roles: 'USER',
                password: '12345678'
            },
            userUpdate: {
                name: 'John Doe',
                email: 'example@example.com',
                roles: 'USER',
                password: '12345678'
            }
        },
        securitySchemes:{
            bearerAuth: {
                type: 'http',
                scheme: 'bearer'
            }
        }
    }
};

const endpointsFiles = ['./src/server.ts'];

swaggerAutogen({openapi: '3.0.0'})(outputFile, endpointsFiles, doc);