import { PostgresDriver } from "./PostgresDriver";

export class DatabaseRegistry {
  constructor(postgresDriver: PostgresDriver) {
    void (postgresDriver);
  }
}