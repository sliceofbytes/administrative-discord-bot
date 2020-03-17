import bind from "bind-decorator";
import { Message } from "discord.js";

import { CommandDependencies } from "../definitions/dependencies/CommandDependencies";
import { DiscordCommandRegistry } from "./DiscordCommandRegistry";

const { DISCORD_PREFIX } = process.env;

export class DiscordCommandListener {
  private readonly dependencies: CommandDependencies;

  public constructor(commandDependencies: CommandDependencies) {
    this.dependencies = commandDependencies;
    commandDependencies.discordService.bindListener(this.handleDiscordCommand);
  }

  @bind
  private async handleDiscordCommand(message: Message): Promise<void> {
    if (!message.content.startsWith(DISCORD_PREFIX!) || message.author.bot || message.channel.type !== "text") return;

    const args: Array<string> = message.content?.slice(DISCORD_PREFIX!.length).split(" ");
    const command = args.shift()?.toLowerCase();

    const commandExecutor = DiscordCommandRegistry.getCommand(command || "", args, message, this.dependencies);
    if (!commandExecutor) return;

    const isValid = await commandExecutor.validate();
    if (!isValid) return;

    await commandExecutor.execute();
  }
}