import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { IUsersRepository } from '../../../application/ports/IUsersRepository';
import { User } from '../../../domain/models/User';
import { Connection, EntityRepository, Repository } from 'typeorm';
import { UserEntity } from '../mapper/UserEntity';

@EntityRepository(User)
export class UsersRepository extends Repository<User>
  implements IUsersRepository {

}
