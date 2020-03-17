import { DiscordCommandType } from "./DiscordCommandType";
import { DiscordCommand } from "./DiscordCommand";

import { QuarantineDiscordCommand } from "./punishment/QuarantineDiscordCommand";
import { CommandDependencies } from "../definitions/dependencies/CommandDependencies";
import { InvalidDiscordCommand } from "./invalid/InvalidDiscordCommand";
import { Message } from "discord.js";

export class DiscordCommandRegistry {
  private static getRegistry(): Map<string, DiscordCommand> {
    const registry = new Map<DiscordCommandType, DiscordCommand>();
    registry.set(DiscordCommandType.QUARANTINE, QuarantineDiscordCommand.prototype);
    return registry;
  }

  public static getCommand(command: string, args: Array<string>, message: Message, dependencies: CommandDependencies): DiscordCommand {
    const registry = this.getRegistry();

    const CommandForType = registry.get(command.toLowerCase()) || InvalidDiscordCommand.prototype;

    const ReflectedCommand = Object.create(CommandForType);
    return new ReflectedCommand.constructor(dependencies, command, args, message);
  }
}