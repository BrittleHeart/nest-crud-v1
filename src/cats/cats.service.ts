import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [
        {
            name: "Squash",
            age: 2,
            breed: "cat"
        }
    ]

    create(cat: Cat): void {
        this.cats.push(cat)
    }

    findAll(): Cat[] {
        return this.cats
    }

    findOne(name: string): Cat {
        const cat = this.cats.find(cat => cat.name === name)
        return cat
    }
}
