import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { logger } from './routes/common/middlewares/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/type-orm/typeorm.config';
import { ProjectModule } from './routes/project/project.module';
import { ProjectController } from './routes/project/project.controller';
import { TechnologyModule } from './routes/technology/technology.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    ProjectModule,
    TechnologyModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes(ProjectController);
  }
}
