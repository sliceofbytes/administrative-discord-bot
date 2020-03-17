import { DiscordCommand } from "../DiscordCommand";

export class InvalidDiscordCommand extends DiscordCommand {
  public async execute(): Promise<void> {
    await this.message.channel.send("Help Menu");
  }

  public async validate(): Promise<boolean> {
    return true;
  }
}