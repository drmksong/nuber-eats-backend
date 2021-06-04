import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Rest } from './entities/rest.entity';

@Resolver(()=>Rest)
export class RestResolver {
    @Query(()=>[Rest])
    rests(@Args('veganOnly') veganOnly : boolean) : Rest[] {
        return [];
    }
    @Mutation(()=>Boolean) 
    createRest( @Args('name') name : string,
                @Args('isVegan') isVegan : boolean,
                @Args('adress') adress : string,
                @Args('ownerName') ownerName : string) : boolean {
        return true;
    }
}