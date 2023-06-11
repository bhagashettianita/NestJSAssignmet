import { Controller, Get,Post,Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
let data = {
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  
  @Post()
  getData(@Body() body){
    data['name'] = JSON.stringify(body['name'])
    data['id'] = JSON.stringify(body['id'])
    return JSON.stringify(body)
  }
  @Get()
  getHello() {
    return data;
  }
}



