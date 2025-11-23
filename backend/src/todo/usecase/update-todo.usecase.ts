import { Injectable } from '@nestjs/common';
import { Todo } from '../models/Todo.model';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateTodoInput } from '../models/UpdateTodo.input';

@Injectable()
export class UpdateTodoUseCase {
  constructor(private readonly prismaService: PrismaService) {}
  async execute(input: UpdateTodoInput): Promise<Todo> {
    const { id, ...data } = input;
    return await this.prismaService.todo.update({
      where: { id },
      data,
    });
  }
}
