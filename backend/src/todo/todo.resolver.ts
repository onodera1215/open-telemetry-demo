import { Args, Resolver, Query, Mutation, Int } from '@nestjs/graphql';
import { Todo } from './models/Todo.model';
import { TodoInput } from './models/Todo.input';
import { GetTodoUseCase } from './usecase/get-todo.usecase';
import { CreateTodoUseCase } from './usecase/create-todo.usecase';
import { UpdateTodoInput } from './models/UpdateTodo.input';
import { DeleteTodoUseCase } from './usecase/delete-todo.usecase';
import { UpdateTodoUseCase } from './usecase/update-todo.usecase';
import { GetsTodoUseCase } from './usecase/gets-todo.usecase';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(
    private readonly createTodoUseCase: CreateTodoUseCase,
    private readonly getTodoUseCase: GetTodoUseCase,
    private readonly getsTodoUseCase: GetsTodoUseCase,
    private readonly updateTodoUseCase: UpdateTodoUseCase,
    private readonly deleteTodoUseCase: DeleteTodoUseCase,
  ) {}

  @Mutation(() => Todo!)
  async createTodo(@Args('input') input: TodoInput): Promise<Todo> {
    return await this.createTodoUseCase.execute(input);
  }

  @Mutation(() => Todo!)
  async deleteTodo(
    @Args('id', { type: () => Int! }) id: number,
  ): Promise<Todo> {
    return await this.deleteTodoUseCase.execute(id);
  }

  @Mutation(() => Todo!)
  async updateTodo(@Args('input') input: UpdateTodoInput): Promise<Todo> {
    return await this.updateTodoUseCase.execute(input);
  }

  @Query(() => Todo, { nullable: true })
  async todo(
    @Args('id', { type: () => Int! }) id: number,
  ): Promise<Todo | null> {
    return await this.getTodoUseCase.execute(id);
  }

  @Query(() => [Todo!]!)
  async todos(): Promise<Todo[]> {
    return await this.getsTodoUseCase.execute();
  }
}
