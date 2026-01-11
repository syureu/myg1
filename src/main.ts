import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // 글로벌 파이프 설정
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,               // DTO에 정의되지 않은 속성은 제거
    forbidNonWhitelisted: true,    // 정의되지 않은 속성 포함 시 에러 발생
    transform: true,               // 요청 데이터를 DTO 타입으로 자동 변환
    enableImplicitConversion: true, // 쿼리 파라미터의 문자열을 숫자로 자동 변환
  }));
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
