import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            firstName: 'Bartosz Pazdur',
            name: 'HiImNoshi',
            password: 'test'
        },
        {
            userId: 2,
            firstName: 'Aleksander Wielki',
            name: 'Creqy',
            password: 'test2'
        },
        {
            userId: 3,
            firstName: 'Władysław Łokietek',
            name: 'Mishin',
            password: 'test3'
        },
    ];

    async findOne(name: string): Promise<User | undefined> {
        return this.users.find(user => user.name === name)
    }
}
