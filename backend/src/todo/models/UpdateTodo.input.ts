import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateTodoInput {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  completed: boolean;
}
