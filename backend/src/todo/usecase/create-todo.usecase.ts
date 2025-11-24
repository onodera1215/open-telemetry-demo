import { Injectable } from '@nestjs/common';
import { Todo } from '../models/Todo.model';
import { PrismaService } from 'src/prisma/prisma.service';
import { TodoInput } from '../models/Todo.input';
import { TraceSpan } from 'src/decorators/trace-span.decorator';

@Injectable()
export class CreateTodoUseCase {
  constructor(private readonly prismaService: PrismaService) {}

  @TraceSpan('CreateTodoUseCase.execute')
  async execute(input: TodoInput): Promise<Todo> {
    return await this.prismaService.todo.create({
      data: {
        ...input,
      },
    });
  }
}
