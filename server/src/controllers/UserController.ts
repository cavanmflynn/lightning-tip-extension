import {
  Body,
  Get,
  HeaderParam,
  JsonController,
  Param,
  Post,
  Put,
} from 'routing-controllers';
import { Service } from 'typedi';
import { User } from '../model/User';
import { UserRepository } from '../repository/UserRepository';
import { InvoiceRequest } from '../types';

@Service()
@JsonController()
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Get('/users/:id/authenticate')
  authenticateUser(@HeaderParam('authorization') token: string): User {
    console.log(token); // TODO
    return;
  }

  @Put('/users/:id')
  updateUser(@Param('id') id: number, @Body() user: User): User {
    return this.userRepository.save(user);
  }

  @Post('/users/:id/invoice')
  invoice(@Param('id') id: number, @Body() request: InvoiceRequest): string {
    console.log(id); // TODO
    return;
  }

  @Post('/users')
  newUser(@Body() user: User): User {
    return this.userRepository.save(user);
  }
}
