# Phase 1 검증 가이드

## 설치 및 실행

```bash
# 1. 최신 코드 가져오기
cd /path/to/my-first-website
git pull origin claude/init-project-011CUqzNcYmj8smUDmc3pTBi

# 2. 패키지 설치
cd nextjs-shadcn-app
npm install

# 3. 개발 서버 실행
npm run dev
```

브라우저에서 http://localhost:3000 접속

## 기능별 검증 체크리스트

### 1. Error Pages (에러 페이지)

#### 404 Not Found 페이지
- [ ] URL: `http://localhost:3000/존재하지않는페이지` 접속
- [ ] 404 메시지와 카드 UI가 표시되는지 확인
- [ ] "Go to Home" 버튼이 홈으로 이동하는지 확인
- [ ] "Browse Blog" 버튼이 블로그로 이동하는지 확인
- [ ] "View Dashboard" 버튼이 대시보드로 이동하는지 확인
- [ ] Command Palette (⌘K) 안내 텍스트가 있는지 확인

#### 500 Error 페이지
- [ ] 에러 페이지가 정상적으로 렌더링되는지 확인
- [ ] "Try Again" 버튼이 작동하는지 확인
- [ ] "Go to Home" 버튼이 작동하는지 확인

### 2. Loading States (로딩 상태)

#### Blog Loading
- [ ] `http://localhost:3000/blog` 접속 시 로딩 스켈레톤 표시 (빠르게 지나갈 수 있음)
- [ ] 3개의 카드 스켈레톤이 보이는지 확인
- [ ] 애니메이션(pulse)이 작동하는지 확인

#### Dashboard Loading
- [ ] `http://localhost:3000/dashboard` 접속 시 로딩 스켈레톤 표시
- [ ] 4개의 stat card 스켈레톤이 보이는지 확인
- [ ] 2개의 차트 영역 스켈레톤이 보이는지 확인

#### Data Table Loading
- [ ] `http://localhost:3000/data` 접속 시 로딩 스켈레톤 표시
- [ ] 테이블 행 스켈레톤이 보이는지 확인

**참고:** 로딩이 너무 빠르면 스켈레톤을 보기 어려울 수 있습니다. 네트워크 탭에서 "Slow 3G"로 설정하여 테스트할 수 있습니다.

### 3. New Components (새로운 컴포넌트들)

이 컴포넌트들은 아직 Demo 페이지에 통합되지 않았지만, 파일이 생성되었는지 확인:

#### Avatar (프로필 이미지)
- [ ] 파일 존재: `src/components/ui/avatar.tsx`
- [ ] AvatarImage, AvatarFallback 컴포넌트 확인

#### Badge (뱃지/라벨)
- [ ] 파일 존재: `src/components/ui/badge.tsx`
- [ ] 4가지 variant: default, secondary, destructive, outline

#### Calendar & DatePicker (날짜 선택기)
- [ ] 파일 존재: `src/components/ui/calendar.tsx`
- [ ] 파일 존재: `src/components/ui/date-picker.tsx`
- [ ] react-day-picker 의존성 확인

#### Select (드롭다운 선택)
- [ ] 파일 존재: `src/components/ui/select.tsx`
- [ ] SelectTrigger, SelectContent, SelectItem 등 서브컴포넌트 확인

#### Popover (팝오버)
- [ ] 파일 존재: `src/components/ui/popover.tsx`
- [ ] PopoverTrigger, PopoverContent 확인

#### Dropdown Menu (드롭다운 메뉴)
- [ ] 파일 존재: `src/components/ui/dropdown-menu.tsx`
- [ ] 체크박스, 라디오, 서브메뉴 지원 확인

#### Skeleton (스켈레톤)
- [ ] 파일 존재: `src/components/ui/skeleton.tsx`
- [ ] 위의 loading.tsx 파일들에서 사용되고 있는지 확인

### 4. Documentation (문서)

#### README.md 업데이트
- [ ] 파일 열기: `nextjs-shadcn-app/README.md`
- [ ] 뱃지들이 추가되었는지 확인 (Next.js, React, TypeScript, Tailwind)
- [ ] Features 섹션이 페이지별로 상세히 작성되었는지 확인
- [ ] Tech Stack 섹션 확인
- [ ] API Routes 문서 확인 (`/api/stats`, `/api/users`, `/api/health`)
- [ ] Deployment 가이드 확인 (Vercel)
- [ ] Keyboard Shortcuts 섹션 확인 (⌘K, Esc)
- [ ] Project Structure 트리 확인

### 5. Build Test (빌드 테스트)

```bash
# Production build 테스트
npm run build

# 성공 메시지 확인
# ✓ Compiled successfully
# ✓ Generating static pages (16/16)
```

- [ ] 빌드가 성공하는지 확인
- [ ] TypeScript 에러가 없는지 확인
- [ ] 모든 페이지가 정상적으로 생성되는지 확인

## 추가 검증 (선택사항)

### 컴포넌트를 Demo 페이지에 추가하여 테스트

Demo 페이지 (`src/app/demo/page.tsx`)를 수정하여 새 컴포넌트들을 테스트할 수 있습니다:

```tsx
// 예시: Badge 테스트
import { Badge } from "@/components/ui/badge"

// JSX에 추가:
<div className="flex gap-2">
  <Badge>Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="outline">Outline</Badge>
</div>
```

```tsx
// 예시: Avatar 테스트
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// JSX에 추가:
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
```

```tsx
// 예시: DatePicker 테스트
import { DatePicker } from "@/components/ui/date-picker"

// JSX에 추가:
<DatePicker />
```

## 검증 완료 체크리스트

- [ ] 서버가 정상적으로 실행됨
- [ ] 404 페이지 작동 확인
- [ ] 로딩 스켈레톤 표시 확인 (Blog, Dashboard, Data)
- [ ] 모든 새 컴포넌트 파일 생성 확인
- [ ] README 문서 업데이트 확인
- [ ] 빌드 성공 확인

## 문제가 발생하면

1. **의존성 에러**: `rm -rf node_modules package-lock.json && npm install`
2. **캐시 문제**: `rm -rf .next && npm run dev`
3. **포트 충돌**: 다른 포트 사용 `npm run dev -- -p 3001`

## 다음 단계

Phase 1이 모두 검증되면, Phase 2나 추가 기능 구현을 논의할 수 있습니다.
