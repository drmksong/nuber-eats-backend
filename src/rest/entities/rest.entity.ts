import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Rest {
    @Field(()=>String)
    name : string;
    
    @Field(()=>Boolean)
    isVegan : boolean;
    
    @Field(()=>String)
    adress : string;
    
    @Field(()=>String)
    ownerName : string;
}