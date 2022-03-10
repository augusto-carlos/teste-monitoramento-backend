"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch = require('node-fetch');
class UserController {
    async index(request, response) {
        const data = await fetch('http://jsonplaceholder.typicode.com/users');
        const users = await data.json();
        response.json(users);
    }
    async getPostsByUser(request, response) {
        const { userId } = request.params;
        const data = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}/posts`);
        const posts = await data.json();
        response.json(posts);
    }
}
exports.default = UserController;
