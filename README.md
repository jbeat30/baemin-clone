# 배달의민족 클론코딩 프로젝트

이 프로젝트는 [배달의민족](https://www.baemin.com)을 간략히 클론코딩하여 Next.js의 최신 기능과 다양한 기술을 학습하고자 진행한 프로젝트입니다.

---

## 주요 기술 스택

- **Next.js 15**  
  최신 버전의 Next.js를 활용해 클라이언트와 서버 사이의 효율적인 데이터 흐름을 구현했습니다.

- **pnpm**  
  의존성 관리를 위해 빠르고 효율적인 패키지 매니저인 `pnpm`을 사용했습니다.

- **Tailwind CSS**  
  유틸리티 기반의 CSS 프레임워크로 빠르게 스타일링 작업을 진행했습니다.

- **Prisma**  
  ORM(Object Relational Mapping)을 사용하여 데이터베이스와의 상호작용을 간소화하고 타입 안정성을 보장했습니다.

- **Supabase (PostgreSQL)**  
  데이터베이스는 `Supabase`를 활용했으며, `PostgreSQL`을 기본으로 데이터 처리를 수행했습니다.

- **ESLint**  
  코드 품질 유지를 위해 ESLint를 설정했으며, 각 설정에 주석을 달아 개발자가 쉽게 이해할 수 있도록 가이드를 추가했습니다.

- **Prettier**  
  코드 포맷팅 도구를 설정하여 일관성 있는 코드 스타일을 유지했습니다.

---

## 프로젝트 목표

이 프로젝트는 Next.js 15의 기능을 활용한 **비동기 데이터 처리**와 클론코딩에 초점을 맞추고 있습니다.  
비동기 API의 동작 방식에 대한 이해를 돕기 위해 Next.js 공식 문서의 참고사항을 반영했습니다:  
[https://nextjs.org/docs/messages/sync-dynamic-apis](https://nextjs.org/docs/messages/sync-dynamic-apis)

### 완성도는 낮습니다

상품 디테일은 메뉴만 연결되었고, 리뷰나 다른 정보는 아직 연결되지 않았습니다.  
전반적인 디자인과 모든 기능이 개발되진 않았습니다.  
해당 프로젝트는 공부의 목적을 두었습니다.  
  
---

## 설치 및 실행 방법

### 1. 클론하기
```bash
git clone <repository-url>
cd <repository-name>
```

### 2. 의존성 설치
```bash
pnpm install
```

### 3. 환경 변수 설정
```bash
DATABASE_URL=<Supabase에서 제공된 PostgreSQL 연결 URL (Prisma에서 데이터베이스 연결에 사용)>
DIRECT_DATABASE_URL=<Supabase에서 제공된 PostgreSQL URL (고급 작업이나 마이그레이션 등에 사용)>
```

### 4. 데이터베이스 마이그레이션
```bash
pnpm prisma migrate dev
pnpm prisma generate
```

### 5. 개발 서버 실행
```bash
pnpm dev
```
