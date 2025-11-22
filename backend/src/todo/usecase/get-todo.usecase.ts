import { Injectable } from '@nestjs/common';
import { Todo } from '../models/Todo.model';

@Injectable()
export class GetTodoUseCase {
  async execute(id: number): Promise<Todo> {
    return {
      id: 1,
      title: 'example todo',
      description: 'this is an example todo item',
      completed: false,
      createdAt: new Date(),
    };
  }
}
