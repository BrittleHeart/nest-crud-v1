import { Body, Controller, Delete, ForbiddenException, Get, Param, Post, Put, Req } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { Cat } from './cat.interface'
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':name')
    async findOne(@Param('name') name: string): Promise<Cat> {
        return this.catsService.findOne(name)
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto): Promise<void> {
        return this.catsService.create(createCatDto)
    }

}
