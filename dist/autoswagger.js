"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_autogen_1 = __importDefault(require("swagger-autogen"));
const moment_1 = __importDefault(require("moment"));
const outputFile = '../endpoints.json';
const doc = {
    info: {
        version: '1.0.0', // by default: '1.0.0'
        title: 'API SOIL DESAFIO', // by default: 'REST API'
        description: 'Desafio programatico soil' // by default: ''
    },
    servers: [
        {
            url: 'http://localhost:3000', // by default: 'http://localhost:3000'
            description: 'Development' // by default: ''
        },
        {
            url: 'https://neat-signs-carry.loca.lt',
            description: 'tunnel developer'
        }
    ],
    tags: [
        {
            name: 'users', // Tag name
            description: 'Usuarios' // Tag description
        },
        {
            name: 'games', // Tag name
            description: 'Jogos' // Tag description
        }
    ],
    components: {
        schemas: {
            userList: [{
                    name: 'John Doe',
                    email: 'example@example.com',
                    roles: 'ADMIN',
                    createdAt: (0, moment_1.default)(Date.now()).format('DD/MM/YYYY HH:mm:ss'),
                    updatedAt: (0, moment_1.default)(Date.now()).format('DD/MM/YYYY HH:mm:ss')
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
                password: '12345678'
            },
            createGame: {
                name: 'Game',
                thumbnail: 'http://example.com',
                rate: 3.5
            },
            favoriteGame: {
                idGame: 'ed123ed',
                idUser: 'wd123wd'
            }
        },
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer'
            }
        }
    }
};
const endpointsFiles = ['./src/server.ts'];
(0, swagger_autogen_1.default)({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);