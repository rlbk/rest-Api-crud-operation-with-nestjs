import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAllUser(): string {
    return 'This api will return all user';
  }

  @Post()
  addUser(): string {
    return 'This add new user';
  }
}
