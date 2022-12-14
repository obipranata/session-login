import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users: any[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'obito',
        password: 'obito',
        biodata: {
          name: 'Obi Pranata',
          image: './images/1.jpg',
          picId: 1
        },
      },
      {
        userId: 2,
        username: 'endji',
        password: '1234',
        biodata: {
          name: 'Endjiansyah',
          image: './images/2.jpg',
          picId: 2
        },
      },
      {
        userId: 3,
        username: 'tegar',
        password: '1234',
        biodata: {
          name: 'Tegar Pratama',
          image: './images/3.jpg',
          picId: 3
        },
      },
    ];
  }

  async findOne(username: string): Promise<any> {
    return this.users.find(user => user.username === username);
  }
}