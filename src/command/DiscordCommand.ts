import { Message } from "discord.js";
import { CommandDependencies } from "../definitions/dependencies/CommandDependencies";

export abstract class DiscordCommand {
  protected readonly dependencies: CommandDependencies;
  protected readonly command: string;
  protected readonly args: any;
  protected readonly message: Message;

  public constructor(dependencies: CommandDependencies, command: any, args: Array<string>, message: Message) {
    this.dependencies = dependencies;
    this.command = command;
    this.args = args;
    this.message = message;
  }

  public abstract async validate(): Promise<boolean>;
  public abstract async execute(): Promise<void>;
}
