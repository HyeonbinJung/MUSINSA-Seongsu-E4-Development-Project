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

## 모바일 동작

휴대폰에서도 PC와 동일한 레이아웃이 나오도록 `index.html` 의 뷰포트를 `width=1440`
(콘텐츠 1360px + 좌우 여백 40px)으로 고정했습니다. 브라우저가 그 폭을 화면에 맞게
축소해서 보여주므로 세로로 쌓이는 모바일 레이아웃으로 리플로우되지 않습니다.
`<meta viewport>` 는 데스크톱 브라우저가 무시하므로, 창을 좁힌 PC에서는 기존
브레이크포인트(1100px / 640px)가 그대로 동작합니다.

iOS · Android 공통으로 함께 잡은 것:

| 증상 | 대응 |
| --- | --- |
| 좁은 칼럼에서 글자만 커져 비율이 깨짐 | `html { -webkit-text-size-adjust: 100% }` |
| 탭한 표/행에 hover 배경이 남음 | 행·셀 hover를 전부 `@media (hover: hover)` 로 감쌈 |
| 탭할 때 회색 하이라이트 박스 | `@media (hover: none)` 에서 `-webkit-tap-highlight-color: transparent` |
| Safari 헤더 블러 미적용 | `-webkit-backdrop-filter` 병기 |
| 주소창 때문에 `100vh` 가 화면보다 큼 | `@supports` 로 `100dvh` |
| 버튼에 iOS 기본 컨트롤 스타일 적용 | `button { -webkit-appearance: none }` |

가로 넘침 방지용 `overflow-x` 는 `hidden` 이 아니라 `clip` 입니다 — `hidden` 은 body를
스크롤 컨테이너로 만들어 sticky 헤더를 깨뜨립니다.

**트레이드오프**: PC 레이아웃을 그대로 축소하는 방식이라 6인치 화면 기준 배율이
약 0.27배가 됩니다. 본문 15px는 물리적으로 4px 정도로 보이므로 확대 없이는 읽기
어렵습니다. 핀치 줌은 의도적으로 막지 않았습니다 (`user-scalable`, `maximum-scale`
미지정). 가독성이 필요하면 `width=1440` 을 `width=1024` 정도로 낮추거나,
기존 브레이크포인트를 되살리는 쪽이 낫습니다.

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
