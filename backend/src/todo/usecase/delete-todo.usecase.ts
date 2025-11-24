import { Injectable } from '@nestjs/common';
import { Todo } from '../models/Todo.model';
import { PrismaService } from 'src/prisma/prisma.service';
import { TraceSpan } from 'src/decorators/trace-span.decorator';

@Injectable()
export class DeleteTodoUseCase {
  constructor(private readonly prismaService: PrismaService) {}

  @TraceSpan('DeleteTodoUseCase.execute')
  async execute(id: number): Promise<Todo> {
    return await this.prismaService.todo.delete({
      where: { id },
    });
  }
}
