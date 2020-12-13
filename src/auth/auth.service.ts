import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}

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

    /**
     * This function signs jwt token and send through as an response if logged
     * 
     * @param user 
     */
    async login(user: any): Promise<object> {
        const payload = {username: user.username, sub: user.userId}
        return {accessToken: this.jwtService.sign(payload)}
    }
}
