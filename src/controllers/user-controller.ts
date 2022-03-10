const fetch = require('node-fetch');
import { Request, Response } from 'express';

class UserController {
  async index(request: Request, response: Response) {
    const data = await fetch('http://jsonplaceholder.typicode.com/users');
    const users = await data.json();

    response.json(users);
  }

  async getPostsByUser(request: Request, response: Response) {
    const { userId } = request.params;
    const data = await fetch(
      `http://jsonplaceholder.typicode.com/users/${userId}/posts`
    );
    const posts = await data.json();

    response.json(posts);
  }
}

export default UserController;
