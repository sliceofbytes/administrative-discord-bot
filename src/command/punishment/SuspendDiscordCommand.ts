import { DiscordCommand } from "../DiscordCommand";
import { MessageEmbed } from "discord.js";

export class SuspendDiscordCommand extends DiscordCommand {
  public async execute(): Promise<void> {
    const embed = new MessageEmbed().setTitle("You're banned!").setDescription("You have been suspended!").setFooter("bye forever");
    await this.message.channel.send(embed)
  }

  public async validate(): Promise<boolean> {
    return true;
  }
}