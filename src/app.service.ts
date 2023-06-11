import { Injectable } from '@nestjs/common';

// const prompt = require('prompt-sync')();
;

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getData(): string {
    // const name = prompt('What is your name? ')
    return ""
  }
}
