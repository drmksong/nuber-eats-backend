import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class RestResolver {
    @Query(()=>Boolean)
    isGood() : boolean {
        return true;
    }
}