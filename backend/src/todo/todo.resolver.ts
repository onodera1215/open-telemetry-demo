import { Args, Resolver, Query } from '@nestjs/graphql';
import { Todo } from './models/Todo.model';
import { TodoInput } from './models/Todo.input';
import { GetTodoUseCase } from './usecase/get-todo.usecase';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly getTodoUseCase: GetTodoUseCase) {}

  @Query(() => Todo)
  async todo(@Args('id') id: number): Promise<Todo> {
    return await this.getTodoUseCase.execute(id);
  }
}
