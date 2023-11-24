import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GqlModule } from './gql/gql.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GqlModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
