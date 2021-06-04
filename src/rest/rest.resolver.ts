import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Rest } from './entities/rest.entity';
import { CreateRestDTO } from './dto/create-rest.dto';

let aRest : Rest[] = [];

@Resolver(()=>Rest)
export class RestResolver {
    @Query(()=>[Rest])
    rests(@Args('veganOnly') veganOnly : boolean) : Rest[] {
        return aRest;
    }
    @Mutation(()=>Boolean) 
    createRest( @Args() createRestDTO : CreateRestDTO) : boolean {
        console.log(createRestDTO);
        aRest.push(createRestDTO);
        console.log(aRest);
        return true;
    }
}