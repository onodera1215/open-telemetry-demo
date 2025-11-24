import { Injectable } from '@nestjs/common';
import { Todo } from '../models/Todo.model';
import { PrismaService } from 'src/prisma/prisma.service';
import { TraceSpan } from 'src/decorators/trace-span.decorator';

@Injectable()
export class GetsTodoUseCase {
  constructor(private readonly prismaService: PrismaService) {}

  @TraceSpan('GetsTodoUseCase.execute')
  async execute(): Promise<Todo[]> {
    return await this.prismaService.todo.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
