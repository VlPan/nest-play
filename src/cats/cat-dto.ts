import { IsString, IsInt } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;
  
  breed: string;
}

export class UpdateCatDto {
  name: string;
  age: number;
  breed: string;
}

export interface Cat {
  name: string;
  age: number;
  breed: string;
}