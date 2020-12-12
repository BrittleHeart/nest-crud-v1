import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
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

    async store(cat: Cat): Promise<Cat> {
        const nowTimestamp = new Date().toISOString()
        return await this.catRepository.save({
            name: cat.name, 
            age: cat.age, 
            breed: cat.breed, 
            created_at: nowTimestamp, 
            updated_at: nowTimestamp
        })
    }

    async update(id: number, cat: Cat): Promise<Cat | undefined> {
        return await this.catRepository.query('Update cats set name = ? where id = ?', [cat.name, id])
    }
}
