/* 외부 라이브러리 없는 JavaScript입니다.
 * 각 기능은 이벤트 → state 변경 → render 함수 순서로 처리합니다.
 */
(() => {
  'use strict';

  const GITHUB_USERNAME = 'dave17code';
  const THEME_KEY = 'dave-portfolio-theme';
  const HEADER_SCROLL_Y = 60;
  const TOP_BUTTON_SCROLL_Y = 300;
  const REVEAL_THRESHOLD = 0.2;
  const REQUEST_TIMEOUT_MS = 15000;
  const desktopMenu = window.matchMedia('(min-width: 768px)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const elements = {
    header: document.querySelector('#site-header'),
    nav: document.querySelector('#nav-links'),
    navLinks: document.querySelectorAll('#nav-links a'),
    menuButton: document.querySelector('#menu-toggle'),
    themeButton: document.querySelector('#theme-toggle'),
    topButton: document.querySelector('#scroll-top'),
    projects: document.querySelector('#projects-content'),
    projectCount: document.querySelector('#project-count'),
    announcement: document.querySelector('#projects-announcement'),
    form: document.querySelector('#contact-form'),
    formStatus: document.querySelector('#form-status'),
  };
  const fields = ['name', 'email', 'message'];
  const sections = [...document.querySelectorAll('main > section')];

  const readTheme = () => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      return saved === 'light' || saved === 'dark' ? saved : 'dark';
    } catch {
      // 저장소를 사용할 수 없는 환경에서도 테마 토글은 계속 동작합니다.
      return 'dark';
    }
  };

  const state = {
    theme: readTheme(),
    menuOpen: false,
    projects: { status: 'idle', repositories: [], error: '' },
    form: {
      values: { name: '', email: '', message: '' },
      errors: { name: '', email: '', message: '' },
      touched: { name: false, email: false, message: false },
      submitted: false,
      success: false,
    },
  };

  // API 문자열을 innerHTML에 넣기 전에 HTML 특수 문자를 이스케이프합니다.
  const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[character]));
  const icon = (name, extraClass = '') => `<svg class="icon ${extraClass}" aria-hidden="true"><use href="images/icons.svg#${name}"></use></svg>`;

  // 1. 테마: click → state.theme → data-theme, 버튼, localStorage
  const renderTheme = () => {
    document.documentElement.dataset.theme = state.theme;
    elements.themeButton.setAttribute('aria-pressed', String(state.theme === 'dark'));
    elements.themeButton.title = state.theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환';
    document.querySelector('meta[name="theme-color"]').content = state.theme === 'dark' ? '#232428' : '#f8f9fc';
  };
  elements.themeButton.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    renderTheme();
    try { localStorage.setItem(THEME_KEY, state.theme); } catch { /* 화면 전환 유지 */ }
  });

  // 2. 모바일 메뉴: click → state.menuOpen → active 클래스 / aria-expanded
  const renderMenu = () => {
    elements.nav.classList.toggle('active', state.menuOpen);
    elements.menuButton.classList.toggle('active', state.menuOpen);
    elements.menuButton.setAttribute('aria-expanded', String(state.menuOpen));
    elements.menuButton.setAttribute('aria-label', state.menuOpen ? '메뉴 닫기' : '메뉴 열기');
  };
  const closeMenu = () => { state.menuOpen = false; renderMenu(); };
  elements.menuButton.addEventListener('click', () => {
    state.menuOpen = !state.menuOpen;
    renderMenu();
  });
  document.addEventListener('click', (event) => {
    if (state.menuOpen && !elements.header.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && state.menuOpen) {
      closeMenu();
      elements.menuButton.focus();
    }
  });
  desktopMenu.addEventListener('change', closeMenu);

  // 앵커의 기본 이동을 제어하여 메뉴를 닫고 부드럽게 스크롤합니다.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      closeMenu();
      target.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
      // 키보드 사용자의 다음 Tab도 이동한 섹션부터 시작합니다.
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      try { history.replaceState(null, '', link.getAttribute('href')); } catch { /* file:// 대응 */ }
    });
  });

  // 스크롤당 한 프레임만 갱신해 불필요한 DOM 쓰기를 줄입니다.
  let scrollScheduled = false;
  const renderScroll = () => {
    elements.header.classList.toggle('scrolled', window.scrollY >= HEADER_SCROLL_Y);
    elements.topButton.hidden = window.scrollY < TOP_BUTTON_SCROLL_Y;
    const marker = elements.header.offsetHeight + 100;
    let currentId = 'home';
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= marker) currentId = section.id;
    });
    elements.navLinks.forEach((link) => {
      if (link.getAttribute('href') === `#${currentId}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scrollScheduled = false;
  };
  window.addEventListener('scroll', () => {
    if (!scrollScheduled) { scrollScheduled = true; requestAnimationFrame(renderScroll); }
  }, { passive: true });
  elements.topButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    document.querySelector('.site-header .brand').focus({ preventScroll: true });
  });

  // 화면에 20% 들어온 요소를 한 번만 표시합니다.
  const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: REVEAL_THRESHOLD }) : null;
  const observeReveals = (root = document) => {
    root.querySelectorAll('.reveal').forEach((element) => {
      if (reducedMotion.matches || !revealObserver) element.classList.add('is-visible');
      else revealObserver.observe(element);
    });
  };

  // 3. 프로젝트: fetch → loading / success / error / empty → renderProjects
  const dateFormatter = new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' });
  const cardTemplate = (repository) => {
    // 구조분해 할당으로 GitHub 응답에서 필요한 값만 추출합니다.
    const { name, description, language, stargazers_count, updated_at, fork, archived } = repository;
    const curated = Object.hasOwn(PROJECT_DESCRIPTIONS, name) ? PROJECT_DESCRIPTIONS[name] : null;
    const title = curated?.title || name;
    // 새 저장소도 자동 표시합니다. 상세 설명을 추가하려면 설명 사전만 편집하세요.
    const summary = curated?.description || (description ? String(description).replace(/\s+/g, ' ').slice(0, 80) : '새로 추가된 공개 저장소입니다. 구현 내용과 사용 방법은 GitHub의 코드와 README에서 확인하실 수 있습니다.');
    const repoURL = `https://github.com/${GITHUB_USERNAME}/${encodeURIComponent(name)}`;
    const languageClass = ({ JavaScript: 'javascript', TypeScript: 'typescript', Python: 'python', Swift: 'swift', HTML: 'html', Shell: 'shell' })[language] || 'other';
    const date = new Date(updated_at);
    const validDate = !Number.isNaN(date.getTime());
    const repoType = archived ? 'ARCHIVED' : fork ? 'FORK' : 'PUBLIC';
    const stars = Number.isFinite(stargazers_count) ? stargazers_count : 0;
    return `<article class="project-card reveal">
      <div class="project-card-top"><span class="project-folder">${icon('folder')}</span><span class="repo-type">${repoType}</span></div>
      <h3>${escapeHTML(title)}</h3>
      <p class="repo-name">${escapeHTML(name)}</p>
      <p class="project-description">${escapeHTML(summary)}</p>
      <div class="project-meta"><span class="language language-${languageClass}">${escapeHTML(language || '언어 미지정')}</span><span class="project-stars" aria-label="GitHub 스타 ${stars}개">${icon('star')} ${stars}</span></div>
      <div class="project-card-footer"><a class="text-link" href="${repoURL}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(title)} GitHub 저장소 보기 (새 탭)">저장소 보기 ${icon('external')}</a>${validDate ? `<time class="repo-date" datetime="${date.toISOString()}" title="최근 업데이트">${dateFormatter.format(date)}</time>` : ''}</div>
    </article>`;
  };

  const renderProjects = () => {
    const { status, repositories, error } = state.projects;
    elements.projects.setAttribute('aria-busy', String(status === 'loading'));
    elements.projectCount.textContent = status === 'success' || status === 'empty' ? String(repositories.length) : '—';
    if (status === 'loading') {
      elements.projects.innerHTML = '<div class="state-panel"><span class="spinner" aria-hidden="true"></span><h3>프로젝트를 불러오는 중입니다.</h3><p>GitHub에서 최신 저장소 목록을 가져오고 있습니다.</p></div>';
      elements.announcement.textContent = '프로젝트를 불러오는 중입니다.';
    } else if (status === 'error') {
      elements.projects.innerHTML = `<div class="state-panel">${icon('alert', 'state-icon')}<h3>프로젝트를 불러올 수 없습니다.</h3><p>${escapeHTML(error)}</p><button class="button button-primary" type="button" id="retry-projects">다시 시도</button></div>`;
      elements.announcement.textContent = `프로젝트를 불러올 수 없습니다. ${error}`;
    } else if (status === 'empty') {
      elements.projects.innerHTML = `<div class="state-panel">${icon('folder', 'state-icon')}<h3>표시할 프로젝트가 없습니다.</h3><p>공개 저장소가 추가되면 이곳에서 확인하실 수 있습니다.</p></div>`;
      elements.announcement.textContent = '표시할 프로젝트가 없습니다.';
    } else if (status === 'success') {
      // map으로 객체 배열을 HTML 카드 배열로 바꾸고 join으로 합칩니다.
      elements.projects.innerHTML = `<div class="projects-grid">${repositories.map(cardTemplate).join('')}</div>`;
      elements.announcement.textContent = `${repositories.length}개의 프로젝트를 불러왔습니다.`;
      observeReveals(elements.projects);
    }
  };

  const fetchProjects = async () => {
    if (state.projects.status === 'loading') return;
    const retryHadFocus = document.activeElement?.id === 'retry-projects';
    state.projects.status = 'loading';
    state.projects.error = '';
    renderProjects();
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    try {
      const repositories = [];
      let page = 1;
      let hasMore = true;
      while (hasMore) {
        // 100개보다 많은 저장소도 누락하지 않도록 다음 페이지까지 확인합니다.
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated&direction=desc&type=owner&page=${page}`, {
          headers: { Accept: 'application/vnd.github+json' }, signal: controller.signal,
        });
        if (!response.ok) {
          if (response.status === 403 || response.status === 429) {
            throw new Error('GitHub 요청이 제한되었습니다. 잠시 후 다시 시도해 주세요. 인증 없는 요청은 시간당 60회로 제한될 수 있습니다.');
          }
          if (response.status === 404) throw new Error('GitHub 계정을 찾을 수 없습니다. 설정된 사용자 이름을 확인해 주세요.');
          throw new Error(`GitHub 응답에 문제가 있습니다. (HTTP ${response.status}) 잠시 후 다시 시도해 주세요.`);
        }
        const data = await response.json();
        if (!Array.isArray(data) || !data.every((item) => item && typeof item.name === 'string')) {
          throw new Error('저장소 데이터 형식을 확인할 수 없습니다. 다시 시도해 주세요.');
        }
        repositories.push(...data);
        const linkHeader = response.headers.get('link');
        hasMore = linkHeader ? linkHeader.includes('rel="next"') : data.length === 100;
        page += 1;
      }
      state.projects.repositories = repositories;
      state.projects.status = repositories.length ? 'success' : 'empty';
    } catch (error) {
      state.projects.repositories = [];
      state.projects.status = 'error';
      state.projects.error = error.name === 'AbortError'
        ? '응답 시간이 초과되었습니다. 인터넷 연결을 확인하고 다시 시도해 주세요.'
        : error instanceof TypeError
          ? '인터넷 연결 또는 GitHub 상태를 확인한 후 다시 시도해 주세요.'
          : error.message;
    } finally {
      window.clearTimeout(timeout);
      renderProjects();
      // 재시도로 사라진 버튼의 포커스를 결과 영역으로 이어 줍니다.
      if (retryHadFocus) {
        elements.projects.setAttribute('tabindex', '-1');
        elements.projects.focus({ preventScroll: true });
      }
    }
  };
  // 동적으로 생성되는 재시도 버튼도 이벤트 위임으로 처리합니다.
  elements.projects.addEventListener('click', (event) => {
    if (event.target.closest('#retry-projects')) fetchProjects();
  });

  // 4. 폼: input / submit → values, errors, success → 입력별 안내
  const validateField = (name) => {
    const value = state.form.values[name].trim();
    if (!value) return ({ name: '이름을 입력해 주세요.', email: '이메일을 입력해 주세요.', message: '메시지를 입력해 주세요.' })[name];
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return '올바른 이메일 형식으로 입력해 주세요. 예: you@example.com';
    if (name === 'email' && elements.form.elements.email.validity.typeMismatch) return '올바른 이메일 형식으로 입력해 주세요.';
    return '';
  };
  const renderField = (name) => {
    const input = elements.form.elements[name];
    const error = state.form.errors[name];
    document.querySelector(`#${name}-error`).textContent = error;
    input.setAttribute('aria-invalid', String(Boolean(error)));
  };
  const renderFormStatus = () => {
    const hasErrors = fields.some((name) => Boolean(state.form.errors[name]));
    elements.formStatus.hidden = !state.form.success && !(state.form.submitted && hasErrors);
    elements.formStatus.classList.toggle('is-error', !state.form.success);
    elements.formStatus.textContent = state.form.success
      ? '입력 확인이 완료되었습니다! 데모 폼이므로 메시지는 실제 전송되지 않았습니다.'
      : '입력 내용을 확인해 주세요. 각 항목 아래의 안내를 참고하시면 됩니다.';
  };
  fields.forEach((name) => {
    const input = elements.form.elements[name];
    input.addEventListener('input', () => {
      state.form.values[name] = input.value;
      state.form.success = false;
      if (state.form.touched[name] || state.form.submitted) {
        state.form.errors[name] = validateField(name);
        renderField(name);
      }
      renderFormStatus();
    });
    input.addEventListener('blur', () => {
      state.form.values[name] = input.value;
      state.form.touched[name] = true;
      state.form.errors[name] = validateField(name);
      renderField(name);
    });
  });
  elements.form.addEventListener('submit', (event) => {
    event.preventDefault();
    state.form.submitted = true;
    fields.forEach((name) => {
      // 자동 완성처럼 input 이벤트를 거치지 않은 값도 제출 시 읽습니다.
      state.form.values[name] = elements.form.elements[name].value;
      state.form.errors[name] = validateField(name);
      renderField(name);
    });
    const invalidField = fields.find((name) => state.form.errors[name]);
    state.form.success = !invalidField;
    renderFormStatus();
    if (invalidField) elements.form.elements[invalidField].focus();
    else elements.formStatus.focus({ preventScroll: true });
  });

  // 초기 렌더링: 저장된 테마와 현재 스크롤 위치를 반영합니다.
  document.documentElement.classList.add('js');
  renderTheme();
  renderMenu();
  renderScroll();
  document.querySelector('#year').textContent = new Date().getFullYear();
  // classList.remove도 초기 상태 정리에 활용합니다.
  elements.formStatus.classList.remove('is-error');
  observeReveals();
  fetchProjects();
})();
