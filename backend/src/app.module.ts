import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TrainingPlanModule } from './training-plans/training-plan.module';
import { WorkoutsModule } from './no-spec/workouts/workouts.module';
import { WorkoutsModule } from './workouts/workouts.module';
import { ActivitiesModule } from './activities/activities.module';
import { ExercisesModule } from './exercises/exercises.module';

@Module({
  imports: [UsersModule, TrainingPlanModule, WorkoutsModule, ActivitiesModule, ExercisesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
