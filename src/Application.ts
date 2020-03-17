import { DiscordService } from "./services/DiscordService";
import { PostgresDriver } from "./database/PostgresDriver";
import { DatabaseRegistry } from "./database/DatabaseRegistry";
import { DiscordCommandListener } from "./command/DiscordCommandListener";

export class Application {
  private readonly discordService: DiscordService;
  private readonly postgresDriver: PostgresDriver;

  public constructor() {
    this.discordService = new DiscordService();
    this.postgresDriver = new PostgresDriver();

    const databaseRegistry = new DatabaseRegistry(this.postgresDriver);
    new DiscordCommandListener({ discordService: this.discordService, databaseRegistry });
  }

  public async start(): Promise<void> {
    await this.postgresDriver.start();
    await this.discordService.start();
  }

  public async stop(): Promise<void> {
    this.discordService.stop();
    await this.postgresDriver.stop();
  }
}