import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import * as mongoose from 'mongoose';

mongoose.set('debug', true);
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/typegoose', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    UsersModule,
  ],
})
export class AppModule {}
