import { BadRequestException, Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Put, RequestTimeoutException, Res } from '@nestjs/common';
import { Cat } from './cat.interface';
import { CatsService } from './cats.service';
import { Response } from 'express'
import { CreateCatDto } from './dto/create-cat-dto';
import * as yup from 'yup';

@Controller('cats')
export class CatsController {   
    constructor(private readonly catsService: CatsService) {}

    @Get()
    async findAll(@Res() response: Response): Promise<Response<Cat[]> | Response<undefined>> {
        const cats = await this.catsService.findAll();
        if(!cats.length)
            throw new NotFoundException({status: 404, message: 'No cats found'})
        
        return response.status(200).json(cats)
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number, @Res() response: Response): Promise<Response<Cat> | Response<undefined>> {
        const cat = await this.catsService.findOne(id)
        if(!cat)
            throw new NotFoundException({status: 404, message: `Cat with id = ${id} does not exist`})
        
        return response.status(200).json(cat)
    }

    @Post()
    async store(@Body() createCatDto: CreateCatDto, @Res() response: Response): Promise<Response<Cat> | Response<undefined>> {
        const new_cat = await this.catsService.store(createCatDto)
        return response.status(201).json(new_cat)
    }

    @Put(':id')
    async update(@Body() createCatDto: CreateCatDto, @Param('id') id: number, @Res() response: Response): Promise<Response | undefined> {
        const updated_cat = await this.catsService.update(id, createCatDto)
        if(!updated_cat)
            throw new BadRequestException()

        return response.status(200).json({stauts: 200, updated_cat})
    }
}
