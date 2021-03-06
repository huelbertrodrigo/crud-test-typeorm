import { ConnectionOptions, SimpleConsoleLogger } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

import { DB_HOST, DB_PORT, DB_BASE, DB_USER, DB_PASS } from '../utils/constants'

const isDev = process.env.NODE_ENV === 'development'

const config: ConnectionOptions = {
  type: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  database: DB_BASE,
  username: DB_USER,
  password: DB_PASS,
  logging: isDev,
  logger: new SimpleConsoleLogger(isDev),
  synchronize: false,
  migrationsRun: true,
  entities: ['src/entities/**/*.ts'],
  migrations: ['src/database/migrations/**/*.ts'],
  namingStrategy: new SnakeNamingStrategy(),
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/database/migrations'
  }
}

export default config
