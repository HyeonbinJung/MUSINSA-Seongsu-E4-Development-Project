# E4 Development Investment Proposal — React

Claude Design 프로젝트 `E4 Investment Site.dc.html` 를 Vite + React 앱으로 변환한 것입니다.
인라인 스타일은 전부 CSS 파일로 분리했고, 덱 데이터는 컴포넌트 밖으로 빼서 `src/data/` 에 모았습니다.

## 실행

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
npm run preview
```

## 구조

```
index.html                  폰트 로드 + #root
src/
  main.jsx                  진입점 (ThemeProvider + 전역 CSS)
  App.jsx                   라우팅 테이블, 헤더/푸터 셸
  config.js                 테마 기본값, 카운트업 on/off·duration, 넘버럴 표시 여부
  styles/
    theme.css               디자인 토큰(다크/라이트) + 섹션 등장 애니메이션
    base.css                리셋, 섹션 헤더·스탯 그리드·표·KeyMessage 등 공용 프리미티브
  hooks/
    useTheme.jsx            테마 컨텍스트, localStorage('e4-theme') 영속화
    useRoute.js             해시 라우팅(#/sec3), 페이지 전환 시 스크롤 리셋
    useRotator.js           자동 순환 인덱스(Pillars, Operating blocks)
  components/
    CountGroup.jsx          IntersectionObserver + rAF 기반 숫자 카운트업
    Header / Footer / ImageSlot / SectionHeader / KeyMessage
  sections/                 Home, ExecutiveSummary … Team (각 .jsx + .css 짝)
  data/
    nav.js                  네비 항목 / 페이지 id
    content.js              전 섹션 텍스트·수치 데이터
public/assets/              미디어 5개 (히어로 영상, 층별 도면, zone 이미지 3종)
```

## 원본 대비 달라진 점

| 원본 (Design Canvas) | 여기 |
| --- | --- |
| `<sc-if>` / `<sc-for>` | JSX 조건부 렌더 · `.map()` |
| `DCLogic` 클래스 state | `useState` / 커스텀 훅 |
| `state.page` 전환 | 해시 라우팅 (`#/sec5`) — 딥링크·뒤로가기 동작 |
| `document.querySelectorAll` 로 `.om-in` 클래스 주입 | CSS `nth-child` 스태거 + 페이지 `key` 로 리플레이 |
| `data-count-group` + 전역 IntersectionObserver | `<CountGroup>` 컨텍스트 + `<Num>` |
| `<image-slot>` 커스텀 엘리먼트 | `<ImageSlot>` (로드 실패 시 자리표시자) |
| 인라인 `style` 속성 | CSS 클래스 + 디자인 토큰 |
| 에디터 props (defaultTheme 등) | `src/config.js` |

반응형 브레이크포인트(1100px / 640px)는 원본에 없던 부분이라 새로 추가했습니다.

## 에셋

| 파일 | 크기 | 쓰이는 곳 |
| --- | --- | --- |
| `seongsu-hero.mp4` | 4.5 MB | Home 히어로 배경 영상 |
| `floorplan-1f-4f.png` | 2.3 MB | Ⅴ. Retail Floor Plan & Zoning (1F–4F) |
| `zone-anchor.png` | 2.5 MB | Ⅴ. Platform 카드(POP-UP), Zone 카드(Anchor Destination) |
| `zone-discovery.png` | 1.9 MB | Ⅴ. Platform 카드(CAFÉ), Zone 카드(Discovery Zone) |
| `zone-stay.png` | 1.2 MB | Ⅴ. Platform 카드(GALLERY), Zone 카드(Stay Extension) |

원본 그대로라 용량이 큰 편입니다 (합계 약 12 MB). 배포 전에 WebP 변환·리사이즈를 하면
초기 로딩이 눈에 띄게 빨라집니다. `ImageSlot` 은 파일이 없거나 로드에 실패하면
자리표시자를 대신 보여주므로 교체 중에도 레이아웃은 깨지지 않습니다.
