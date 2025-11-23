import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Todo } from './models/Todo.model';
import { TodoInput } from './models/Todo.input';
import { GetTodoUseCase } from './usecase/get-todo.usecase';
import { CreateTodoUseCase } from './usecase/create-todo.usecase';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(
    private readonly getTodoUseCase: GetTodoUseCase,
    private readonly createTodoUseCase: CreateTodoUseCase,
  ) {}

  @Mutation(() => Todo!)
  async createTodo(@Args('input') input: TodoInput): Promise<Todo> {
    return await this.createTodoUseCase.execute(input);
  }

  @Query(() => Todo)
  async todo(@Args('id') id: number): Promise<Todo | null> {
    return await this.getTodoUseCase.execute(id);
  }
}
