import { Body, Controller, Delete, ForbiddenException, Get, Param, Post, Put, Req } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { UpdateCatDto } from './update-cat.dto';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }

    @Get(':id')
    findOne(@Param('id') id: number): string {
        return `This function search for resource with id = ${id}`
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto): any {
        const {name, age, breed} = createCatDto
        if(!name || !age || !breed)
            throw new ForbiddenException()
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateCatDto: UpdateCatDto): string {
        return `This method take the resource with id = ${id} and updated the ${updateCatDto}`
    }

    @Delete(':id')
    remove(@Param('id') id: number): string {
        return `This method take the resource with id = ${id} and drops it`
    }
}
