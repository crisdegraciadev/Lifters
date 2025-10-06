import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TrainingPlanModule } from './training-plans/training-plan.module';
import { WorkoutsModule } from './no-spec/workouts/workouts.module';
import { WorkoutsModule } from './workouts/workouts.module';

@Module({
  imports: [UsersModule, TrainingPlanModule, WorkoutsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
