import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode, Header, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common/exceptions';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @HttpCode(200)
  @Header('Cache-Control', 'none')
  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @HttpCode(200)
  findAll(@Query('type') type: string) {
    return this.usersService.findAll(type);
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    try {
      return this.usersService.findOne(id);
    } catch (err) {
      throw new NotFoundException()
    }
  }

  @Patch(':id')
  @HttpCode(200)
  update(@Param('id', ParseIntPipe) id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(200)
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
