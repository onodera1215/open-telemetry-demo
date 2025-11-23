import { Module } from '@nestjs/common';
import { GetTodoUseCase } from './usecase/get-todo.usecase';
import { TodoResolver } from './todo.resolver';
import { CreateTodoUseCase } from './usecase/create-todo.usecase';
import { UpdateTodoUseCase } from './usecase/update-todo.usecase';
import { DeleteTodoUseCase } from './usecase/delete-todo.usecase';

@Module({
  providers: [
    TodoResolver,
    CreateTodoUseCase,
    GetTodoUseCase,
    UpdateTodoUseCase,
    DeleteTodoUseCase,
  ],
})
export class TodoModule {}
