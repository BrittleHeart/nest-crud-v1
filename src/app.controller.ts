import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {Request} from 'express';

@Controller()
export class AppController {
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Req() request: Request): Promise<any> {
    // Passport automatically creates user object attached to request
    return request.user
  }

  @Get()
  async showHello(): Promise<any> {
    return 'Hi';
  }
}
