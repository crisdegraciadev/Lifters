import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './resources/users/users.module';
import { TrainingPlanModule } from './resources/training-plans/training-plan.module';
import { WorkoutsModule } from './no-spec/workouts/workouts.module';
import { WorkoutsModule } from './resources/workouts/workouts.module';
import { ActivitiesModule } from './resources/activities/activities.module';
import { ExercisesModule } from './resources/exercises/exercises.module';

@Module({
  imports: [UsersModule, TrainingPlanModule, WorkoutsModule, ActivitiesModule, ExercisesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
