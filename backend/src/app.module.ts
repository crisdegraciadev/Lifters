import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TrainingPlanModule } from './training-plan/training-plan.module';

@Module({
  imports: [UsersModule, TrainingPlanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
