import { AggregateRoot } from '@nestjs/cqrs';
import { HeroKilledDragonEvent } from '../../application/events/handlers/hero.handler';
import { DomainException } from '../exceptions/DomainException';
import { IEntity } from '../shared/IEntity';
import { Post } from './Post';

export class User extends AggregateRoot  implements IEntity  {
  id?: number;

  name: string;

  email: string;

  posts?: Post[];

  createdAt?: Date;

  updatedAt?: Date;

  constructor(name: string, email: string, posts?: Post[], id?: number) {
    super();
    this.name = name;
    this.email = email;
    this.posts = posts;
    this.id = id;
  }

  findPost(postId: number): Post {
    return this.posts?.find(p => p.id === postId) ?? null;
  }

  findPosts(): Post[] {
    return this.posts ?? [];
  }

  createPost(post: Post): void {
    if (!this.posts) this.posts = new Array<Post>();

    if (this.posts.map(p => p.title).includes(post.title))
      throw new DomainException('Post with the same name already exists');

    this.posts.push(post);
  }

  equals(entity: IEntity) {
    if (!(entity instanceof User)) return false;

    return this.id === entity.id;
  }

  killEnemy(enemyId: string) {
    // logic
    this.apply(new HeroKilledDragonEvent("1", enemyId));
  }
}
