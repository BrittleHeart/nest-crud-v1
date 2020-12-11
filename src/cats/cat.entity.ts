import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'cats'})
export class CatEntity {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({type: 'varchar', length: 45, nullable: false})
    readonly name: string;

    @Column({type: 'int', nullable: false})
    readonly age: number;

    @Column({type: 'varchar', length: 45, nullable: false})
    readonly breed: string;

    @CreateDateColumn()
    readonly created_at: Date;

    @UpdateDateColumn()
    readonly updated_at: Date;
}