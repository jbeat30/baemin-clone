## 명령어
- ### 개발환경 데이터베이스 스키마를 업데이트
  ```bash
  pnpm prisma migrate dev --name init
  ```
- ### 프리스마 클라이언트 생성
  ```bash
  npx prisma generate
  ```
- ### 프리스마 스튜디오 실행 GUI tool
  ```bash
  npx prisma studio
  ```
- ### 프로덕션 데이터베이스 스키마를 업데이트
  ```bash
  npx prisma migrate deploy
  ```
- ### 스키마 상태 그대로 데이터베이스에 밀어넣기
  ```bash
  npx prisma db push
  ``` 
- ### 데이터베이스에 시드 데이터 추가
  ```bash
  npx prisma db seed 
  ```

- ### 마이그레이션 파일 삭제
  ```bash
  rm -rf prisma/migrations
  ```


[Prisma](https://www.prisma.io/) - 프리스마 ORM 공식  
[Prisma Seeding](https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding#integrated-seeding-with-prisma-migrate) - 프리스마 시드 데이터 가이드  
