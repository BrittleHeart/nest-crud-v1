import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    /**
     * This function checks if data from user is valid, if so, returns Promise
     * 
     * @param {String} username User name that was passed in the body of the request
     * @param {String} password User password that was passed in the body of the request
     * @return {Promise<any>} Promise
     */
    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if(user && user.password === password) {
            const {password, ...result} = user
            return result;
        }

        return null;
    }
}
