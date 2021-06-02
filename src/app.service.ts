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
      return {name:'Song Myung Kyu', age:53, phone: '010-1987-6543'};
  }
}
