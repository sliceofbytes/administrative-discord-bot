import { DiscordCommand } from "../DiscordCommand";

export class QuarantineDiscordCommand extends DiscordCommand {
  public async execute(): Promise<void> {
  }

  public async validate(): Promise<boolean> {
    return true;
  }
}