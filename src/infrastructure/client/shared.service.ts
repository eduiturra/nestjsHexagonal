import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedService {
  constructor() {}
  
  getHello(): string {
    return 'Hello World!';
  }
}
