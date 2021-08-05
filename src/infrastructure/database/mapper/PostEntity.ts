import { Post } from '../../../domain/models/Post';
import { User } from '../../../domain/models/User';
import { EntitySchema } from 'typeorm';


import { BaseEntity } from './BaseEntity';

export const PostEntity = new EntitySchema<Post>({
  name: 'Post',
  tableName: 'posts',
  target: Post,
  columns: {
    ...BaseEntity,
    title: {
      type: String,
      length: 50,
    },
    text: {
      type: String,
    },
  },
  orderBy: {
    createdAt: 'ASC',
  },
  relations: {
    user: {
      type: 'many-to-one',
      target: () => User,
      joinColumn: true,
    },
  },
});
