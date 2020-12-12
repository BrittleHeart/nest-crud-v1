import { Controller, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import {Request} from 'express';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    @HttpCode(200)
    async login(@Req() request: Request): Promise<any> {
        // Passport automatically creates user object attached to request
        return this.authService.login(request.user)
    }
}
