import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserModule, AuthModule,
    MongooseModule.forRoot('mongodb://localhost/nest-user-management', {
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
