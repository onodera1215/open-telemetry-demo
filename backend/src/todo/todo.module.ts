import { Module } from '@nestjs/common';
import { GetTodoUseCase } from './usecase/get-todo.usecase';
import { TodoResolver } from './todo.resolver';
import { CreateTodoUseCase } from './usecase/create-todo.usecase';

@Module({
  providers: [TodoResolver, CreateTodoUseCase, GetTodoUseCase],
})
export class TodoModule {}
