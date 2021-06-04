import { InputType } from '@nestjs/graphql';

@InputType () 
export class CreateRestDTO {
    @Field(()=>String) 
    name : string,
    
    @Field(()=>Boolean) 
    isVegan : boolean,
    
    @Field(()=>String) 
    adress : string,
    
    @Field(()=>String) 
    ownerName : string
    
}
   