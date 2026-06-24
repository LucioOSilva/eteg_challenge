import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

class FavoriteColor {
  @IsNotEmpty({ message: 'Cor favorita é obrigatória' })
  @Matches(/^#([0-9A-Fa-f]{6})$/, { message: 'Cor deve ser um HEX válido — ex: #FF0000' })
  favoriteColor!: string;
}

export class CreateUserDto extends FavoriteColor {
  @IsNotEmpty({ message: 'Nome completo é obrigatório' })
  @IsString()
  fullName!: string;

  @IsEmail({}, { message: 'E-mail inválido' })
  email!: string;

  @IsNotEmpty({ message: 'CPF é obrigatório' })
  @IsString()
  cpf!: string;

  @IsOptional()
  @IsString()
  observations?: string;
}

export class UpdateUserColorDto extends FavoriteColor {
  @IsNotEmpty({ message: 'ID é obrigatório' })
  id!: string;
}