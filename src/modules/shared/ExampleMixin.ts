import { ClassType, Field, InputType } from "type-graphql";

export const ExampleMixin = <T extends ClassType>(BaseClass: T) => {
  @InputType()
  class ExampleInput extends BaseClass {
    @Field()
    ok: boolean;
  }
  return ExampleInput;
};
