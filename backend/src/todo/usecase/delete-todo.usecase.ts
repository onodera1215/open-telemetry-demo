import { Injectable } from '@nestjs/common';
import { Todo } from '../models/Todo.model';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DeleteTodoUseCase {
  constructor(private readonly prismaService: PrismaService) {}
  async execute(id: number): Promise<Todo> {
    return await this.prismaService.todo.delete({
      where: { id },
    });
  }
}
