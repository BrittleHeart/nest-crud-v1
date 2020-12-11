import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CatEntity } from './cat.entity';
import { Cat } from './cat.interface';

@Injectable()
export class CatsService {
    constructor(
        @InjectRepository(CatEntity)
        private readonly catRepository: Repository<CatEntity>
    ) {}

    async findAll(): Promise<Cat[] | undefined> {
        return await this.catRepository.find()
    }

    async findOne(id: number): Promise<Cat | undefined> {
        return await this.catRepository.findOne({id})
    }
}
