import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';  // Assuming you're using the UserModule
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'yourSecretKey', // Use environment variable for production
      signOptions: { expiresIn: '1h' }, // Token expiry time
    }),
  ],
  
  providers: [AuthService, JwtStrategy],
  exports: [AuthService], // Export AuthService for use in other modules
})
export class AuthModule {}
