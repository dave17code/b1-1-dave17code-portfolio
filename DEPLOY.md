# 🚀 GitHub Pages 배포 가이드

프로젝트 파일은 완성되어 있습니다. **본인 GitHub에 새 저장소를 만들고 업로드한 뒤 Pages를 켜는 작업**을 진행해 주세요. 이 ZIP만으로 원격 저장소나 배포가 자동 생성되지는 않습니다.

아래에서는 저장소 이름을 **`b1-1-portfolio`**로 사용합니다. 같은 이름의 저장소가 이미 있으면 새 이름을 정하고, 명령어와 README의 URL도 그 이름으로 바꿔 주세요.

## 1. 압축 풀고 실행하기

1. ZIP을 압축 해제합니다.
2. VS Code → **File → Open Folder**로 `dave-portfolio` 폴더를 엽니다.
3. VS Code 탐색기 최상위에 `index.html`, `css`, `js`, `images`가 보이는지 확인합니다.
4. 확장 프로그램 **Live Server**를 설치합니다.
5. `index.html` 오른쪽 클릭 → **Open with Live Server**를 선택합니다.
6. 최신 Chrome에서 화면과 Projects 카드가 뜨는지 확인합니다.

**ZIP 자체를 GitHub에 올리는 것이 아니라, 압축을 푼 파일들을 올려야 합니다.** 별도 패키지 설치나 빌드는 필요하지 않습니다.

## 2. GitHub 저장소 만들기

1. GitHub에서 `dave17code` 계정으로 로그인합니다.
2. 오른쪽 위 **+ → New repository**를 선택합니다.
3. Repository name: `b1-1-portfolio`
4. Visibility: **Public**
5. **Add a README file**은 선택하지 않습니다. `.gitignore`와 라이선스도 새로 추가하지 않습니다. ZIP에 README와 `.gitignore`가 이미 있습니다.
6. **Create repository**를 누릅니다.

## 3. 프로젝트 올리기

VS Code에서 **Terminal → New Terminal**을 엽니다. 현재 위치가 `index.html`이 있는 `dave-portfolio` 폴더인지 확인하고 아래 명령을 한 줄씩 실행합니다. macOS 터미널과 Windows Git Bash에서 동일하게 사용할 수 있습니다.

```bash
git init
git add .
git commit -m "feat: build vanilla JavaScript portfolio"
git branch -M main
git remote add origin https://github.com/dave17code/b1-1-portfolio.git
git push -u origin main
```

Git 로그인이 나타나면 본인 계정으로 인증합니다. Git 작성자 이름·이메일이 설정되어 있지 않다는 메시지가 나오는 경우에만, 본인의 실제 Git 커밋 정보로 저장소 설정을 추가한 뒤 `git commit`부터 다시 진행합니다.

```bash
git config user.name "본인의 커밋 작성자 이름"
git config user.email "본인의 GitHub 커밋 이메일"
```

위 두 줄의 예시 문구를 그대로 사용하지 마세요. 이미 설정된 환경이라면 실행할 필요가 없습니다.

업로드 후 GitHub 저장소의 **Code** 화면에서 최상위에 `index.html`이 보이는지 확인합니다. `dave-portfolio/index.html`처럼 한 단계 더 들어가야 보인다면 상위 폴더를 잘못 올린 것입니다.

### 터미널을 사용하지 않는 경우

빈 저장소의 **uploading an existing file**, 또는 **Add file → Upload files**에서 압축을 푼 폴더 **안의 파일과 하위 폴더**를 올릴 수 있습니다. `index.html`이 저장소 최상위에 놓이도록 확인하고 커밋하세요. 숨김 파일까지 포함하기 쉬운 위 Git 방식을 권장합니다.

## 4. GitHub Pages 켜기

1. 저장소의 **Settings**로 이동합니다.
2. 왼쪽 메뉴의 **Pages**를 선택합니다.
3. **Build and deployment → Source**를 **Deploy from a branch**로 선택합니다.
4. Branch: **main**
5. Folder: **/(root)**
6. **Save**를 누릅니다.
7. **Actions** 탭에서 `pages build and deployment` 실행이 성공했는지 확인합니다.
8. **Settings → Pages → Visit site**로 접속합니다.

이 방법은 빌드가 없는 정적 사이트에 적합하며, 별도의 Actions YAML을 작성할 필요가 없습니다. [GitHub 공식 배포 설정 안내](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 5. 확인할 주소

저장소 이름을 위와 같이 만들었다면 다음 주소가 됩니다. **배포 성공 전에는 아직 접속되지 않을 수 있습니다.**

```text
저장소: https://github.com/dave17code/b1-1-portfolio
사이트: https://dave17code.github.io/b1-1-portfolio/
```

저장소 이름을 다르게 지었다면 마지막 경로를 그 이름으로 바꿉니다. CSS, JS, 이미지는 모두 상대 경로로 연결되어 있어 프로젝트 하위 경로 배포에 맞춰져 있습니다.

## 6. 실제 배포 사이트 확인하기

- Chrome에서 배포 주소에 접속합니다.
- 테마 버튼 클릭 → 새로고침 → 선택한 테마 유지 확인
- 폭을 줄이거나 개발자 도구의 기기 모드 사용 → 햄버거 열기·닫기 확인
- 메뉴 클릭 → 섹션 이동, 아래로 스크롤 → 헤더 배경·맨 위 버튼 확인
- Projects에서 본인 저장소 카드와 GitHub 링크 확인
- 폼을 빈 값으로 제출 → 필드별 오류, 틀린 이메일 → 형식 오류 확인
- 올바른 이름·이메일·메시지 → 입력 확인 성공 메시지 확인

프로필과 CSS가 안 보이면 주소의 철자·대소문자, 파일 업로드 여부, `index.html`의 위치부터 확인해 주세요. API만 오류이면 인터넷 연결과 GitHub 요청 제한 상태를 확인합니다. 403이 발생하면 반복 새로고침하지 않고 제한이 풀릴 때까지 기다립니다.

## 7. README와 제출물 마무리

1. README의 **배포 전** 문구를 **배포 완료**로 바꿉니다.
2. **생성 예정 / 배포 예정** 표기를 삭제하고 실제 접속한 URL을 기록합니다.
3. 포함된 스크린샷을 사용할 수 있으며, 실제 배포 화면을 다시 촬영하면 제출 증거가 더 명확해집니다.
4. README 수정 후 아래 명령을 실행합니다.

```bash
git add README.md images/screenshots
git commit -m "docs: update deployment URL and screenshots"
git push
```

이후에도 파일을 수정하고 `main`에 push하면 Pages가 다시 배포됩니다.

### Chrome에서 스크린샷 찍기

- 데스크톱: 페이지를 열고 화면 캡처
- 모바일: 개발자 도구 → 기기 툴바 → 폭 390px 정도로 설정 → 화면 캡처
- 다크 모드: 테마를 다크로 전환한 후 캡처
- 전체 페이지: 개발자 도구의 명령 메뉴에서 **Capture full size screenshot** 검색

macOS 개발자 도구는 `⌘⌥I`, Windows는 `F12`로 열 수 있습니다. 기기 툴바 버튼은 개발자 도구 왼쪽 위의 휴대전화·태블릿 아이콘입니다.

## 배포가 안 될 때

| 증상 | 확인할 내용 |
| --- | --- |
| 404 | Actions 성공 여부, Pages의 `main`·`/(root)`, 루트 `index.html` |
| 디자인·이미지가 없음 | `css/`, `js/`, `images/` 업로드와 파일명 대소문자 |
| 이전 화면이 계속 보임 | 배포 완료를 기다린 뒤 강력 새로고침 |
| 프로젝트 API만 오류 | 에러 메시지 확인, 403·429면 시간 간격을 두고 재시도 |
| Git push 인증 실패 | VS Code/GitHub의 로그인 흐름으로 인증한 뒤 다시 push |
| `remote origin already exists` | `git remote -v`로 기존 주소 확인; 다른 프로젝트 폴더인지 먼저 확인 |

기존 저장소를 강제 덮어쓰거나 `git push --force`를 사용할 필요는 없습니다.
