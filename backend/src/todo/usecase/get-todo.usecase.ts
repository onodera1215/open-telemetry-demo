import { Injectable } from '@nestjs/common';
import { Todo } from '../models/Todo.model';
import { PrismaService } from 'src/prisma/prisma.service';
import { TraceSpan } from 'src/decorators/trace-span.decorator';

@Injectable()
export class GetTodoUseCase {
  constructor(private readonly prismaService: PrismaService) {}

  @TraceSpan('GetTodoUseCase.execute')
  async execute(id: number): Promise<Todo | null> {
    return await this.prismaService.todo.findUnique({
      where: { id },
    });
  }
}
