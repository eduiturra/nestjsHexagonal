import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/models/User';

import { IRepository } from './IRepository';

@Injectable()
export abstract class IUsersRepository {}
