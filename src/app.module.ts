import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      //host: 'localhost',
      //port: 5432,
      url: 'postgres://bncqhlnr:L7zHdfej3_wc6q3v6Eq28KyvnYmCczQ7@trumpet.db.elephantsql.com/bncqhlnr',
      //database: 'micro_auth',
      username: 'bncqhlnr',
      password: 'L7zHdfej3_wc6q3v6Eq28KyvnYmCczQ7',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true, // never true in production!
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
