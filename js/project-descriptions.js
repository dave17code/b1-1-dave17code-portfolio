// 2026-09-19: 공개 저장소 45개의 README와 기본 브랜치 소스를 확인했습니다.
// 목록/언어/스타/날짜는 GitHub API, 제목/핵심 설명만 이 사전에서 제공합니다.
// 저장소 크기와 무관하게 각 설명은 핵심을 담은 한 문장으로 작성했습니다.
// 근거 파일은 docs/REPOSITORY-NOTES.md에 정리되어 있습니다.
const PROJECT_DESCRIPTIONS = Object.freeze({
  // 배포 가이드에서 안내하는 새 저장소 이름입니다. API에 나타날 때만 표시됩니다.
  'b1-1-portfolio': {
    title: 'Developer Portfolio',
    description: '순수 HTML·CSS·JavaScript로 반응형 화면을 만들고, GitHub 저장소 연동과 테마·폼 상태 관리를 구현한 포트폴리오입니다.',
  },
  'b5-2-mini-git': {
    title: 'Mini Git',
    description: '커밋과 브랜치를 그래프로 관리하고, DFS·BFS 탐색과 역색인 검색을 직접 구현한 Python 기반 Git 학습 도구입니다.',
  },
  'b4-2-linux-failure-analysis': {
    title: 'Linux 장애 분석',
    description: '메모리 누수, CPU 과점유, 데드락을 재현하고, 프로세스 상태와 로그를 수집해 원인을 분석하는 Linux 실습입니다.',
  },
  'b4-1-linux-server-security-monitoring': {
    title: 'Linux 보안과 모니터링',
    description: '사용자 권한과 SSH·방화벽 설정을 정리하고, 셸 스크립트로 시스템 자원 사용량을 기록하는 Linux 서버 실습입니다.',
  },
  'b5-1-mini-redis': {
    title: 'Mini Redis',
    description: '해시맵, 이중 연결 리스트, 최소 힙을 직접 구현하고, TTL 만료와 LRU 메모리 관리를 연결한 키·값 저장소입니다.',
  },
  'b2-2-git-conflict-craft': {
    title: 'Git 협업과 충돌 해결',
    description: 'Python 유틸리티를 함께 만들며, 브랜치와 PR 리뷰부터 병합 충돌 해결까지 GitHub Flow 협업 과정을 기록했습니다.',
  },
  'b7-1-ChatFlow': {
    title: 'ChatFlow',
    description: 'JWT 로그인과 대화 기록, Markdown 답변을 연결하고, 입력과 오류 안내를 다듬은 React 기반 AI 채팅 화면입니다.',
  },
  'b2-1-python-file-based-budget': {
    title: '파일 기반 가계부',
    description: '수입과 지출을 JSONL 파일에 저장하고, 거래 검색과 월별 예산 관리, CSV 입출력을 제공하는 Python 가계부입니다.',
  },
  'docker_workstation': {
    title: 'Docker 워크스테이션',
    description: 'Docker로 Nginx 웹 환경을 구성하고, 포트 연결과 볼륨 저장을 확인하며 재현 가능한 개발 환경을 구축하는 실습입니다.',
  },
  'python_quiz_game': {
    title: 'Python 퀴즈 게임',
    description: '객관식 문제를 등록하고 무작위로 풀며, 퀴즈 목록과 최고 점수를 JSON 파일에 저장하는 Python 콘솔 게임입니다.',
  },
  'noona-react-course': {
    title: 'React 프로젝트 실습',
    description: '컴포넌트와 상태 관리 기초부터 날씨 조회와 라우팅 예제까지, 작은 화면을 직접 만들며 React를 익히는 학습 기록입니다.',
  },
  'OneBiteChallenge-JavaScript': {
    title: 'JavaScript 챌린지',
    description: '날짜별 연습 문제로 JavaScript 문법을 익히고, DOM 이벤트와 배열 처리, 비동기 API 호출을 연습한 기록입니다.',
  },
  'NodeJSClass': {
    title: 'JavaScript·TypeScript 기초',
    description: '변수와 형 변환, 연산자부터 TypeScript 예제까지, 짧은 코드를 실행하며 언어의 기본 동작을 확인하는 학습 기록입니다.',
  },
  'boost-wiz-frontend': {
    title: 'Boost Wiz 초기 구성',
    description: 'Next.js와 TypeScript 프로젝트의 초기 환경을 구성하고, 기본 페이지와 레이아웃 구조를 확인하는 시작 템플릿입니다.',
  },
  'OneBite-React-Section08': {
    title: 'React 할 일 목록',
    description: '할 일을 추가하고 완료 상태를 바꾸거나 삭제하며, 컴포넌트 사이의 데이터 전달과 React 상태 업데이트를 익히는 예제입니다.',
  },
  'TokitOnboarding': {
    title: 'Tokit 온보딩',
    description: '프론트엔드 온보딩 과제와 실행 절차를 정리하고, 인증 등 API 연동 연습에 사용할 NestJS 목 서버를 포함한 저장소입니다.',
  },
  'OneBite-React-Section05': {
    title: 'React 컴포넌트 기초',
    description: '버튼, 카운터, 입력 폼을 컴포넌트로 나누고, props와 상태를 연결하며 React의 이벤트 처리 흐름을 익히는 예제입니다.',
  },
  'OneBite-React-Section03': {
    title: 'JavaScript 모듈 연습',
    description: '계산 함수를 모듈로 분리하고, import·export와 외부 패키지 사용을 통해 JavaScript 코드 구성 방법을 익힙니다.',
  },
  'OneBite-React-Section02': {
    title: 'JavaScript 심화 문법',
    description: '참과 거짓을 판별하는 값부터 Promise와 async·await까지, 예제 코드를 통해 JavaScript 동작을 살펴봅니다.',
  },
  'OneBite-React-Section01': {
    title: 'JavaScript 기본 문법',
    description: '반복문과 함수, 객체와 배열의 기초를 짧은 예제로 연습하며, 콘솔 출력으로 JavaScript 코드의 실행 결과를 확인합니다.',
  },
  'React-MiniBlog': {
    title: 'React 미니 블로그',
    description: '게시글 목록과 상세 보기, 댓글 컴포넌트를 구성하고, React Router로 페이지를 연결하는 미니 블로그 학습 예제입니다.',
  },
  'ReactTutorial': {
    title: 'React 튜토리얼',
    description: '컴포넌트와 이벤트, 조건부 화면, 커스텀 훅 등 React의 주요 개념을 챕터별 코드와 작은 화면 예제로 정리한 저장소입니다.',
  },
  'SwiftEssential': {
    title: 'SwiftUI 레이아웃 기초',
    description: '텍스트와 버튼, 색상과 프레임을 각각의 화면으로 실험하며, SwiftUI의 뷰 구성과 레이아웃 원리를 익히는 예제 모음입니다.',
  },
  'SwiftUI-ToDoList': {
    title: 'SwiftUI 할 일 앱',
    description: '할 일의 추가와 삭제, 완료 상태 변경을 화면에 연결하고, SwiftData로 목록을 저장하는 SwiftUI 기반 할 일 앱입니다.',
  },
  'SwiftDataExample': {
    title: 'SwiftData 저장 연습',
    description: '모델과 저장 컨테이너를 구성하고, 항목 조회와 추가·삭제를 화면에 연결하며 SwiftData의 데이터 관리 흐름을 익힙니다.',
  },
  'SwiftUI-WordRelay': {
    title: 'SwiftUI 끝말잇기',
    description: '입력한 단어와 기존 단어 목록을 비교하고, 결과에 따라 목록과 알림을 갱신하며 SwiftUI의 상태 변화를 배우는 게임입니다.',
  },
  'SwiftUI-PetInformationApp': {
    title: '반려동물 소개 화면',
    description: '반려동물의 사진과 기본 정보, 좋아하는 것을 카드로 배치하며, SwiftUI의 스택과 이미지 스타일을 익히는 화면 예제입니다.',
  },
  'SwiftUI-Essential': {
    title: 'SwiftUI 뷰와 바인딩',
    description: '뷰 배치와 조건부 화면을 구성하고, 상태와 바인딩으로 부모·자식 뷰를 연결하며 SwiftUI의 화면 갱신 원리를 연습합니다.',
  },
  'SwiftUI-Observable3': {
    title: 'ObservableObject 상태 관리',
    description: '카운터 객체와 입력 화면을 연결하고, StateObject로 객체를 유지하며 SwiftUI의 관찰과 상태 관리 차이를 살펴봅니다.',
  },
  'SwiftUI-Bindable': {
    title: 'SwiftUI Bindable',
    description: '관찰 가능한 책 모델을 입력 필드와 연결하고, 제목 변경을 화면에 반영하며 SwiftUI의 양방향 바인딩을 확인하는 예제입니다.',
  },
  'SwiftUI-ObservableMacro': {
    title: 'Observable 매크로',
    description: 'Observable 매크로를 적용한 카운터 모델에서, 버튼으로 바꾼 값이 SwiftUI 화면에 반영되는 과정을 확인하는 예제입니다.',
  },
  'SwiftUI-Environment': {
    title: 'SwiftUI 환경 값',
    description: 'Environment로 현재 색상 테마를 읽고, 라이트·다크 모드에 맞춰 배경과 글자색이 달라지는 SwiftUI 화면을 만듭니다.',
  },
  'SwiftUI-MakingView': {
    title: 'SwiftUI 커스텀 뷰',
    description: '게시글 카드와 버튼, 카운터를 개별 뷰로 구성하고, 스택과 스타일을 조합하며 재사용 가능한 SwiftUI 화면 요소를 연습합니다.',
  },
  'AppStoreNameMeditation': {
    title: '이름을 담은 말씀 묵상',
    description: '사용자의 이름을 성경 구절에 반영하고, 구절과 글꼴 선택을 제공하며 개인 설정을 저장하는 UIKit 기반 말씀 묵상 앱입니다.',
  },
  'TeamSpaWeather': {
    title: '날씨와 지도',
    description: '위치와 도시 정보를 바탕으로 날씨 예보를 조회하고, 기온과 강수 정보를 지도와 화면에 표시하는 UIKit 기반 날씨 앱입니다.',
  },
  'TeamSpaInstagramClone': {
    title: 'Instagram 프로필 클론',
    description: '프로필과 팔로우 정보, 사진 목록을 배치하고, UIKit 컬렉션 뷰로 Instagram 프로필 화면 구성을 연습한 프로젝트입니다.',
  },
  'AVKitPractice': {
    title: 'AVKit 비디오 플레이어',
    description: '외부 JSON에서 영상 목록을 가져와 테이블 뷰에 표시하고, 선택한 영상을 AVKit 플레이어로 재생하는 UIKit 예제입니다.',
  },
  'TeamSpaNBTheater': {
    title: '영화 예매 앱',
    description: '로그인과 영화 목록, 상세 화면을 연결하고, 예매 날짜와 인원을 선택하는 흐름을 구현한 UIKit 기반 영화 예매 실습 앱입니다.',
  },
  'TeamSpaToDoList2.0': {
    title: '챕터별 할 일 목록',
    description: '할 일을 챕터별로 묶고, 섹션 추가와 삭제, 완료 스위치를 데이터에 연결하며 UIKit 테이블 뷰를 확장한 할 일 앱입니다.',
  },
  'TeamSpaToDoList1.0': {
    title: 'UIKit 할 일 목록',
    description: '알림 창에서 할 일을 입력하고, 목록과 스와이프 삭제를 연결하며 UserDefaults로 데이터를 보관하는 UIKit 할 일 앱입니다.',
  },
  'TeamSpaWishList': {
    title: '상품 위시리스트',
    description: '외부 API에서 상품 정보를 불러오고, 선택한 상품을 Core Data에 저장해 목록으로 확인하는 UIKit 기반 위시리스트입니다.',
  },
  'TeamSpaBurgerKiosk': {
    title: '버거 주문 키오스크',
    description: '버거와 음료, 디저트를 고르는 화면을 구성하고, 장바구니와 주문 금액을 연결하는 UIKit 기반 키오스크 팀 프로젝트입니다.',
  },
  'TeamSpaKiosk1.0': {
    title: 'Swift 콘솔 키오스크',
    description: '터미널 입력으로 메뉴와 음료를 고르고, 주문 상태와 금액을 다루며 Swift의 분기문과 함수 흐름을 익히는 콘솔 키오스크입니다.',
  },
  'NotificationCenterPractice': {
    title: '화면 사이 데이터 전달',
    description: '두 화면 사이에서 입력한 문자열을 알림으로 전달하고, NotificationCenter의 발행과 구독 흐름을 확인하는 UIKit 예제입니다.',
  },
  'StarbucksSnapKitPractice': {
    title: 'Starbucks 화면 연습',
    description: '스타벅스 홈 화면의 문구와 콘텐츠를 배치하고, SnapKit 제약과 컬렉션 뷰로 UIKit 레이아웃을 구성하는 클론 실습입니다.',
  },
  'TeamSpaCalculator': {
    title: 'Swift 계산기',
    description: '숫자 입력과 사칙연산 버튼을 연결하고, 연산 상태와 초기화를 처리하며 UIKit의 입력 이벤트를 익히는 간단한 계산기 앱입니다.',
  },
});
