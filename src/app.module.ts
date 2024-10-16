import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // PostgreSQL server host
      port: 5432,        // Default PostgreSQL port
      username: 'your-username',  // PostgreSQL username
      password: 'your-password',  // PostgreSQL password
      database: 'your-database',  // PostgreSQL database name
      autoLoadEntities: true,     // Automatically load entities
      synchronize: true,          // Sync database schema (disable in production)
    }),
    UserModule,  // Import user module
    AuthModule,  // Import authentication module
  ],
})
export class AppModule {}
