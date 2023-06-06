import { Body, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(@Body() createUserDto: CreateUserDto) {
    return {
      id: createUserDto.id,
      name: createUserDto.name,
      age: createUserDto.age
    };
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return {
      id: id,
      name: updateUserDto.name,
      age: updateUserDto.age
    };
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
