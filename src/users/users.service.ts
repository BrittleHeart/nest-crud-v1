import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            firstName: 'Bartosz Pazdur',
            username: 'HiImNoshi',
            password: 'test'
        },
        {
            userId: 2,
            firstName: 'Aleksander Wielki',
            username: 'Creqy',
            password: 'test2'
        },
        {
            userId: 3,
            firstName: 'Władysław Łokietek',
            username: 'Mishin',
            password: 'test3'
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username)
    }
}
