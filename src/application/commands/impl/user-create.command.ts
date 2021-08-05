export class UserCreateCommand {
    constructor(
      public readonly heroId: string,
      public readonly dragonId: string,
    ) {}
  }