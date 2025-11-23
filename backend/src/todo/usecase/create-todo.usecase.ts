import { Injectable } from '@nestjs/common';
import { Todo } from '../models/Todo.model';
import { PrismaService } from 'src/prisma/prisma.service';
import { TodoInput } from '../models/Todo.input';

@Injectable()
export class CreateTodoUseCase {
  constructor(private readonly prismaService: PrismaService) {}
  async execute(input: TodoInput): Promise<Todo> {
    return await this.prismaService.todo.create({
      data: {
        ...input,
      },
    });
  }
}
