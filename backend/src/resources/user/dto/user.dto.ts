import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Nome completo é obrigatório' })
  @IsString()
  fullName!: string;

  @IsEmail({}, { message: 'E-mail inválido' })
  email!: string;

  @IsNotEmpty({ message: 'Cor favorita é obrigatória' })
  @Matches(/^#([0-9A-Fa-f]{6})$/, { message: 'Cor deve ser um HEX válido — ex: #FF0000' })
  favoriteColor!: string;

  @IsOptional()
  @IsString()
  observations?: string;
}