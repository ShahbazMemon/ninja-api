import { Body, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { data } from '../sampleData/DummyData';
@Injectable()
export class UsersService {
  create(@Body() createUserDto: CreateUserDto) {
    const newItem = {id: Date.now(), ...createUserDto}
    data.push(newItem)
    return {data : newItem
    };
  }

  findAll(type: string) {
    if (type) {
      return data.filter((ninja) => ninja.type === type);
    }
    return data;
    // return `This action returns all users`;
  }

  findOne(id: number) {
    const response = data.find((item)=> item.id === id )
    if (!response) {
      throw new Error('item not found');
    }
    return {data: response};


  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const d = data.map((item)=> {
      if (item.id === id) {
        return { ...item, ...updateUserDto}
      };
      
      return item;
    }
    );
    return this.findOne(id);

    // return {
    //   id: id,
    //   name: updateUserDto.name,
    //   salary: updateUserDto.salary,
    //   type: updateUserDto.type
    // };
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
