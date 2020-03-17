import { DatabaseRegistry } from "../../database/DatabaseRegistry";
import { DiscordService } from "../../services/DiscordService";

export interface CommandDependencies {
  databaseRegistry: DatabaseRegistry;
  discordService: DiscordService;
}