import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {Request} from 'express';

@Controller('auth')
export class AuthController {
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Req() request: Request): Promise<any> {
        // Passport automatically creates user object attached to request
        return request.user;
    }
}
