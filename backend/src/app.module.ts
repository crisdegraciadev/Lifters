import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './resources/users/users.module';
import { TrainingPlanModule } from './resources/training-plans/training-plan.module';
import { WorkoutsModule } from './resources/workouts/workouts.module';
import { ActivitiesModule } from './resources/activities/activities.module';
import { ExercisesModule } from './resources/exercises/exercises.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './resources/users/entities/user.entity';

@Module({
  imports: [
    UsersModule,
    TrainingPlanModule,
    WorkoutsModule,
    ActivitiesModule,
    ExercisesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5439,
      username: 'postgres',
      password: 'postgres',
      database: 'lifters-dev',
      entities: [User],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
