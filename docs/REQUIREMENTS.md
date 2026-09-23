# B1-1 필수 요구사항 대응표

필수 기능만 구현했습니다. 선택으로 명시된 프로젝트 필터와 별도 보너스 기능은 포함하지 않았습니다.

| 요구사항 | 구현 위치 / 동작 | 상태 |
| --- | --- | --- |
| `index.html`, `css/`, `js/`, `images/` 분리 | 역할별 파일과 폴더 | 구현 |
| 외부 CSS, defer JavaScript | HTML의 stylesheet와 두 개의 defer script | 구현 |
| VS Code + Live Server | `.vscode/` 권장 확장, README 실행 절차 | 사용자가 설치·실행 |
| header, nav, main, section, article, footer | HTML 구조와 동적으로 생성되는 프로젝트 article | 구현 |
| Hero, About, Skills, Projects, Contact, Footer | 전체 섹션 | 구현 |
| 섹션 앵커 링크 | 헤더 메뉴와 CTA, 로고 | 구현 |
| 이미지 alt | 캐릭터의 모습과 역할 설명 | 구현 |
| label과 for-id 매칭 | name, email, message | 구현 |
| CSS 변수 | 색상, 폰트, 간격, 크기, 반경 | 구현 |
| `[data-theme="dark"]` 변수 | 라이트 기본 변수 + 다크 재정의 | 구현 |
| 네비게이션 Flexbox | `.navigation`, `.nav-actions` | 구현 |
| Projects Grid | `repeat(auto-fit, minmax(min(100%, 320px), 1fr))` | 구현 |
| 모바일 퍼스트 + 768px/1024px | 기본 모바일 스타일 후 min-width 쿼리 | 구현 |
| 모바일 햄버거 | `classList.toggle('active', state.menuOpen)` | 구현 |
| 버튼·카드 hover / transition / shadow | 버튼, 스킬 카드, 프로젝트 카드 | 구현 |
| const, let | JavaScript 전체 | 구현 |
| addEventListener | onclick HTML 속성 없이 이벤트 연결 | 구현 |
| querySelector / querySelectorAll | DOM 참조와 반복 선택 | 구현 |
| textContent / innerHTML | 상태 안내와 동적 프로젝트 카드 | 구현 |
| classList.add / remove / toggle | 등장 애니메이션, 상태 초기화, 테마·메뉴·스크롤 | 구현 |
| click / submit / scroll / input | 버튼, 문의 폼, 스크롤 UI, 실시간 검증 | 구현 |
| preventDefault | 앵커 이동 제어와 폼 새로고침 방지 | 구현 |
| 부드러운 스크롤 | scrollIntoView / scrollTo + CSS scroll-behavior | 구현 |
| 300px 스크롤 탑 | 기준 이상에서 표시, 클릭 시 맨 위 | 구현 |
| 60px 헤더 스타일 | 배경·테두리·그림자 변경 | 구현 |
| localStorage 테마 유지 | `dave-portfolio-theme` | 구현 |
| Intersection Observer | threshold 0.2, 첫 등장 후 unobserve | 구현 |
| 필수값 검증 | trim 후 빈 값 검사 | 구현 |
| 이메일 형식 | 정규식 + 브라우저 typeMismatch | 구현 |
| 입력 근처 오류 | 각 필드 아래 설명과 aria-invalid | 구현 |
| 제출 성공 메시지 | 입력 확인 완료, 실제 발송 아님을 안내 | 구현 |
| 화살표 함수 | 핸들러와 함수 정의 | 구현 |
| 템플릿 리터럴 | 카드·로딩·에러·빈 상태 HTML | 구현 |
| 구조분해 | API 데이터와 프로젝트 상태 추출 | 구현 |
| map / forEach | 카드 변환 / 메뉴·필드·애니메이션 순회 | 구현 |
| filter | 요구사항상 선택 | 제외 |
| fetch + async/await | 본인 공개 저장소 API, 페이지네이션 | 구현 |
| 로딩·성공·실패·빈 상태 | `state.projects.status`별 렌더링 | 구현 |
| try/catch | API 요청 및 localStorage 예외 | 구현 |
| 403 응답 처리 | 오류 안내 + 다시 시도, 429도 동일 처리 | 구현 |
| 3개 이상 상태 → 렌더링 | 테마·API·폼·메뉴 4개 | 구현 |
| GitHub Pages 배포 | DEPLOY.md의 본인 계정 작업 | 배포 후 완료 |
| README 설명·기술·URL·이미지 | README에 포함, URL은 배포 예정으로 명시 | 배포 후 URL 확정 |
| 제출 URL 2개와 화면 3종 | ZIP에 화면 포함, URL은 직접 배포 후 제출 | 사용자 최종 제출 |

## 평가 때 설명할 핵심

1. **시맨틱 HTML**: 페이지 머리말·메뉴·본문·독립 프로젝트·하단 정보를 태그 역할로 구분했습니다. 읽는 사람과 보조 기술이 구조를 파악하기 쉽습니다.
2. **Flexbox와 Grid**: 한 방향으로 로고와 메뉴를 나란히 정렬하는 곳은 Flexbox, 행과 열로 반복되는 카드 목록은 Grid입니다.
3. **DOM과 이벤트**: 요소를 선택하고 리스너를 붙인 뒤, 이벤트가 발생하면 상태를 바꾸고 render 함수가 화면을 수정합니다.
4. **비동기 데이터**: 요청 전에 loading을 표시하고 await로 응답을 기다립니다. HTTP 상태를 먼저 확인한 뒤 데이터를 렌더링하며 오류는 catch에서 처리합니다.
5. **상태와 화면 분리**: 현재 테마, 메뉴, 프로젝트 응답, 폼 오류를 state에 보관합니다. 상태를 기준으로 화면을 만드는 연습이 이후 React 학습의 기초입니다.

기본값인 다크 테마와 모션 감소 대응은 함께 동작합니다. 모션 감소 설정 사용자는 애니메이션 없이 내용을 볼 수 있습니다.
