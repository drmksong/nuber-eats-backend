import { Controller, Get } from '@nestjs/common';
import { AppService, UserType } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
    
  @Get('/hi')
  sayHi() : string {
    return this.appService.sayHi();
  }
    
  @Get('/users')
  users() : UserType {
    return this.appService.getUsers();
  } 
}
