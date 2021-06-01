import { Injectable } from '@nestjs/common';

export interface UserType {
    name:string,
    age:number,
    phone:string
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Myung Kyu!';
  }
  sayHi() : string {
      return 'Hi everyone!!!';
  }
  getUsers() : UserType {
      return {name:'Song Myung', age:10, phone: '987-6543'};
  }
}
