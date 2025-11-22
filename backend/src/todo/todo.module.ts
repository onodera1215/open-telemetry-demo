import { Module } from '@nestjs/common';
import { GetTodoUseCase } from './usecase/get-todo.usecase';
import { TodoResolver } from './todo.resolver';

@Module({
  providers: [TodoResolver, GetTodoUseCase],
})
export class TodoModule {}
