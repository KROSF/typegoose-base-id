import {
  buildSchema,
  DocumentType,
  prop as Property,
} from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class User extends Base {
  [key: string]: any;
  @Field(() => ID, { name: 'id' })
  get relayId(this: DocumentType<User>): string {
    return this._doc._id;
  }

  @Field()
  @Property({ required: true })
  firstName: string;

  @Field()
  @Property({ required: true })
  lastName: string;
}

export const UserSchema = buildSchema(User);
