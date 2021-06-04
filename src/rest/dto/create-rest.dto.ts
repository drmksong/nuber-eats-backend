import { ArgsType, Field } from '@nestjs/graphql';
import { IsString, IsBoolean } from 'class-validator';

@ArgsType () 
export class CreateRestDTO {
    @Field(()=>String) 
    @IsString()
    name : string;
    
    @Field(()=>Boolean) 
    @IsBoolean()
    isVegan : boolean;
    
    @Field(()=>String) 
    @IsString()
    address : string;
    
    @Field(()=>String) 
    @IsString()
    ownerName : string;
    
}
   