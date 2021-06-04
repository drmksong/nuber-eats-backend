import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType () 
export class CreateRestDTO {
    @Field(()=>String) 
    name : string;
    
    @Field(()=>Boolean) 
    isVegan : boolean;
    
    @Field(()=>String) 
    address : string;
    
    @Field(()=>String) 
    ownerName : string;
    
}
   