import { Module } from '@nestjs/common';
import { RestResolver } from './rest.resolver';

@Module({
    providers: [RestResolver],
})
export class RestModule {}
