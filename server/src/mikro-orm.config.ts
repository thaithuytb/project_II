import { Logger } from '@nestjs/common';
import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { User } from './entities/user.entity';

const configMikroOrm: MikroOrmModuleSyncOptions = {
  type: 'postgresql',
  host: process.env.DATABASE_HOST,
  dbName: process.env.DATABASE_DBNAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: Number(process.env.DATABASE_HOST),
  tsNode: true,
  entities: [User],
  discovery: {
    disableDynamicFileAccess: true,
  },
  migrations: {
    path: '../dist/migrations',
    pathTs: 'src/migrations',
    disableForeignKeys: false,
  },
  allowGlobalContext: true,
  logger: (msg) => Logger.log(msg),
};

export default configMikroOrm;
