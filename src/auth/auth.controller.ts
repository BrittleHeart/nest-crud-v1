import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import {Request} from 'express';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() request: Request): Promise<any> {
        // Passport automatically creates user object attached to request
        return request.user;
    }
}
