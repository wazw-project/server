/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SystemModule } from './systems/system.module';
import { MarkerModule } from './Markers/marker.module';
import { RequestModule } from './request/request.module';
import { ManagersModule } from './managers/managers.module';
import { PreauthMiddleware } from './auth/preauth.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    //mongodb://localhost:27017/waze-project
    // ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb+srv://naama_frank-kod:VWSi2A2igrlqgFCw@cluster0.sddzqju.mongodb.net/waze-final-project?retryWrites=true&w=majority'),                                                   
    UserModule,
    SystemModule,
    MarkerModule,
    RequestModule,
    ManagersModule,
 
  ],
  controllers: [],
  providers: [],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PreauthMiddleware).forRoutes({
      path: '*', method: RequestMethod.ALL
    });
    //console.log("aaa")
  }
}
