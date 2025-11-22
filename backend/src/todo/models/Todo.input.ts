import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TodoInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;
}
