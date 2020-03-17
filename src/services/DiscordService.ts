import { Client, Message } from "discord.js";

const { DISCORD_TOKEN } = process.env;

export class DiscordService {
  private readonly discordInstance: Client;

  public constructor() {
    this.discordInstance = new Client();
  }

  public async start(): Promise<void> {
    const promise = new Promise<void>(resolve => {
      this.discordInstance.once("ready", () => resolve());
    });
    await this.discordInstance.login(DISCORD_TOKEN);
    return promise;
  }

  public bindListener(handler: (message: Message) => Promise<void>): void {
    this.discordInstance.on("message", handler);
  }

  public stop(): void {
    this.discordInstance.destroy();
  }

}
