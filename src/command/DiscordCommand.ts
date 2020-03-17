import { Message } from "discord.js";

export abstract class DiscordCommand {
  protected readonly command: string;
  protected readonly args: any;
  protected readonly message: Message;

  public constructor(command: any, args: Array<string>, message: Message) {
    this.command = command;
    this.args = args;
    this.message = message;
  }

  public abstract async validate(): Promise<boolean>;
  public abstract async execute(): Promise<void>;
}
