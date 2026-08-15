

(function () {
  'use strict';



  const KB = {
    about: {
      keywords: ['who','about','alok','yourself','introduce','introduction','tell me','bio','background','summary','describe','what do you do','what does alok do'],
      response: `Alok Choudhary is a <strong>Software Engineer, Full Stack Developer, and AI Engineer</strong>. He builds software across the boundary of product engineering, backend systems, and intelligent applications.\n\nHis engineering approach is problem-first: understand deeply, architect cleanly, and ship software that performs well, scales gracefully, and stays maintainable.`,
      section: 'about'
    },

    skills: {
      keywords: ['skills','technologies','tech stack','stack','tools','what can','proficient','expertise','capable','competencies','know','programming','languages','frameworks','specializ'],
      response: `Alok works across a wide range of technologies:\n\n<strong>Programming:</strong> C++, Python, JavaScript\n<strong>Frontend:</strong> HTML, CSS, React.js, Next.js\n<strong>Backend:</strong> Node.js, Express.js, MongoDB, Authentication\n<strong>AI Engineering:</strong> Generative AI, LLM APIs, Prompt Engineering, RAG, AI Agents\n<strong>DevOps & Cloud:</strong> Linux, Docker, Kubernetes, CI/CD, Cloud Computing\n<strong>Software Engineering:</strong> DSA, OOP, Git & GitHub, REST APIs\n<strong>Practices:</strong> Responsive Design, API Integration, Testing, Deployment`,
      section: 'skills'
    },

    programming: {
      keywords: ['programming language','code in','coding language','c\\+\\+','python','javascript','which language'],
      response: `Alok's primary programming languages are:\n\n• <strong>C++</strong> — for algorithms, data structures, and competitive problem-solving\n• <strong>Python</strong> — for AI/ML, scripting, and backend\n• <strong>JavaScript</strong> — for full-stack web development (frontend & backend)`,
      section: 'skills'
    },

    frontend: {
      keywords: ['frontend','front-end','front end','react','next','html','css','ui','user interface'],
      response: `On the frontend, Alok works with:\n\n• HTML & CSS — semantic markup, responsive layouts\n• JavaScript — vanilla JS and modern ES6+\n• <strong>React.js</strong> — component-driven UIs\n• <strong>Next.js</strong> — server-side rendering, static generation\n\nHe's also experienced with responsive design, animations, and accessibility.`,
      section: 'skills'
    },

    backend: {
      keywords: ['backend','back-end','back end','node','express','server','api','database','mongo','mongodb'],
      response: `Alok's backend stack includes:\n\n• <strong>Node.js</strong> & <strong>Express.js</strong> — RESTful APIs and server-side logic\n• <strong>MongoDB</strong> — NoSQL database design\n• Authentication systems\n• REST API design and integration`,
      section: 'skills'
    },

    ai: {
      keywords: ['ai','artificial intelligence','machine learning','ml','llm','generative','prompt','rag','agent','gpt','openai','gemini','model'],
      response: `Alok is actively working in AI Engineering:\n\n• <strong>Generative AI</strong> — building AI-powered applications\n• <strong>LLM APIs</strong> — integrating large language models\n• <strong>Prompt Engineering</strong> — crafting effective prompts\n• <strong>RAG</strong> — Retrieval-Augmented Generation pipelines\n• <strong>AI Agents</strong> — autonomous agent architectures`,
      section: 'skills'
    },

    devops: {
      keywords: ['devops','docker','kubernetes','k8s','ci/cd','cicd','cloud','linux','deploy','container','infrastructure','aws','gcp','azure'],
      response: `Alok's DevOps & Cloud skills:\n\n• <strong>Linux</strong> — system administration\n• <strong>Docker</strong> — containerization\n• <strong>Kubernetes</strong> — orchestration\n• <strong>CI/CD</strong> — continuous integration & deployment pipelines\n• <strong>Cloud Computing</strong> — modern cloud infrastructure`,
      section: 'skills'
    },

    projects: {
      keywords: ['projects','portfolio','work','built','created','made','showcase','case study','what have you built','show me'],
      response: `Alok has built 5 production-quality projects:\n\n<strong>01 — PulseLens</strong> — Productivity analytics dashboard\n<strong>02 — EchoBeat</strong> — Premium music streaming experience\n<strong>03 — Future Forge</strong> — Career learning platform\n<strong>04 — ORBIT</strong> — WebGL 3D orbital surveillance\n<strong>05 — ASTRA OS</strong> — Cinematic space mission OS\n\nAsk me about any specific project for more details!`,
      section: 'projects'
    },

    pulselens: {
      keywords: ['pulselens','pulse lens','productivity','analytics dashboard','productivity dashboard'],
      response: `<strong>PulseLens</strong> — Productivity Analytics\n\nA modern productivity analytics dashboard built with HTML, CSS, and Vanilla JavaScript. It transforms daily activity data into meaningful insights through interactive analytics, productivity metrics, streaks, goals, and personalized recommendations.\n\n<strong>Key features:</strong> Daily tracking, focus scoring, goal tracking, streaks, weekly/monthly insights, animated charts, LocalStorage support.\n\n<strong>Tech:</strong> HTML, CSS, JavaScript, LocalStorage, Data Visualization`,
      section: 'projects',
      link: 'https://pulse-lens.vercel.app/'
    },

    echobeat: {
      keywords: ['echobeat','echo beat','music','streaming','player','music app'],
      response: `<strong>EchoBeat</strong> — Music Streaming Experience\n\nA premium music streaming experience built entirely with HTML, CSS, and JavaScript. It combines a luxury dark aesthetic, glassmorphism, immersive motion, and responsive interaction.\n\n<strong>Key features:</strong> Interactive music player, library, search, favorites, playlists, lyrics drawer, queue management, accessibility.\n\n<strong>Tech:</strong> HTML, CSS, JavaScript`,
      section: 'projects',
      link: 'https://echo-beat-rho.vercel.app/'
    },

    futureforge: {
      keywords: ['future forge','futureforge','career','learning platform','roadmap','career path'],
      response: `<strong>Future Forge</strong> — Career Learning Platform\n\n"One Platform. Three Career Paths. Endless Possibilities."\n\nA structured career-learning platform to help students become job-ready through curated roadmaps, resources, projects, books, and progress tracking. Covers Quant Developer, Software Engineer, and Blockchain Engineer tracks.\n\n<strong>Tech:</strong> HTML, CSS, JavaScript, Frontend Engineering`,
      section: 'projects',
      link: 'https://future-forge-afbg.vercel.app/'
    },

    orbit: {
      keywords: ['orbit','webgl','3d','earth','satellite','surveillance','three.js','globe'],
      response: `<strong>ORBIT</strong> — WebGL / 3D Experience\n\nA cinematic WebGL-powered orbital surveillance experience featuring a photorealistic 3D Earth, satellite visualization, space environment, and intelligence dashboards.\n\n<strong>Key features:</strong> Photorealistic 3D Earth, cinematic camera transitions, orbital intelligence dashboard, high-performance WebGL rendering.\n\n<strong>Tech:</strong> WebGL, Three.js, JavaScript`,
      section: 'projects',
      link: 'https://orbit-global-surveillance-system.vercel.app/'
    },

    astraos: {
      keywords: ['astra','astra os','astraos','space','mission','interstellar','operating system','spacecraft'],
      response: `<strong>ASTRA OS</strong> — Creative Frontend Engineering\n\n"Interstellar Mission Operating System"\n\nA cinematic frontend experience inspired by deep-space mission control systems and science-fiction interfaces. Built <strong>without frontend frameworks</strong>.\n\n<strong>Key features:</strong> Cinematic boot sequence, galaxy navigation, planet explorer, AI core, animated starfield, dynamic lighting, offline-ready.\n\n<strong>Tech:</strong> HTML, CSS, JavaScript`,
      section: 'projects',
      link: 'https://astra-os-virid.vercel.app/'
    },

    contact: {
      keywords: ['contact','reach','email','mail','connect','touch','talk','message','hire','get in touch','how to contact'],
      response: `You can reach Alok through:\n\n📧 <strong>Email:</strong> <a href="mailto:alokc5651@gmail.com">alokc5651@gmail.com</a>\n🐙 <strong>GitHub:</strong> <a href="https://github.com/alokdevops43" target="_blank" rel="noopener">github.com/alokdevops43</a>\n💼 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/alok-choudhary-39012b407/" target="_blank" rel="noopener">Alok Choudhary</a>`,
      section: 'contact'
    },

    github: {
      keywords: ['github','git','repo','repository','source code','open source','code'],
      response: `Alok's GitHub profile:\n\n🐙 <a href="https://github.com/alokdevops43" target="_blank" rel="noopener">github.com/alokdevops43</a>\n\nCheck out his repositories for project source code and contributions.`,
      link: 'https://github.com/alokdevops43'
    },

    linkedin: {
      keywords: ['linkedin','linked in','professional','network'],
      response: `Alok's LinkedIn profile:\n\n💼 <a href="https://www.linkedin.com/in/alok-choudhary-39012b407/" target="_blank" rel="noopener">linkedin.com/in/alok-choudhary</a>`,
      link: 'https://www.linkedin.com/in/alok-choudhary-39012b407/'
    },

    learning: {
      keywords: ['learning','studying','exploring','currently','interest','curious','what are you learning','working on','focus'],
      response: `Alok is currently exploring and deepening his knowledge in:\n\n• Software Engineering\n• AI Engineering\n• System Design\n• Algorithms\n• Backend Architecture\n• Cloud Infrastructure\n• Developer Tools\n• WebGL / Creative Development`,
      section: 'learning'
    },

    philosophy: {
      keywords: ['philosophy','approach','principle','methodology','how do you work','engineering approach','values','mindset'],
      response: `Alok's engineering philosophy:\n\n<strong>01 BUILD</strong> — Build useful things instead of demos that only look good.\n<strong>02 THINK</strong> — Understand the problem before writing the solution.\n<strong>03 LEARN</strong> — Continuously improve fundamentals and engineering depth.\n<strong>04 SHIP</strong> — Turn ideas into usable, deployed products.`,
      section: 'philosophy'
    },

    hire: {
      keywords: ['hire','hiring','why should','collaborate','freelance','work with','available','opportunity','job','career','open to','looking for'],
      response: `Alok is a technically strong developer who works across Software Engineering, Full Stack Development, and AI Engineering. He builds production-quality applications with clean architecture, strong fundamentals, and a problem-first mindset.\n\nInterested in working together? Reach out:\n\n📧 <a href="mailto:alokc5651@gmail.com">alokc5651@gmail.com</a>\n💼 <a href="https://www.linkedin.com/in/alok-choudhary-39012b407/" target="_blank" rel="noopener">LinkedIn</a>`,
      section: 'contact'
    },

    resume: {
      keywords: ['resume','cv','curriculum','download'],
      response: `I don't have a resume link available in the portfolio at this time. You can reach Alok directly to request his resume:\n\n📧 <a href="mailto:alokc5651@gmail.com">alokc5651@gmail.com</a>`
    },

    greeting: {
      keywords: ['hello','hi','hey','sup','yo','howdy','good morning','good evening','good afternoon','what\'s up','greetings'],
      response: `Hey! 👋 I'm here to help you explore Alok's portfolio. Ask me about his skills, projects, tech stack, or how to get in touch.`
    },

    thanks: {
      keywords: ['thanks','thank you','thx','appreciate','helpful','great','awesome','cool','nice'],
      response: `You're welcome! Let me know if there's anything else you'd like to know about Alok or his work. 🙌`
    }
  };

  const SUGGESTED_QUESTIONS = [
    'Who is Alok?',
    'What are his skills?',
    'Tell me about his projects',
    'What tech stack does he use?',
    'What is Alok learning?',
    'How can I contact Alok?',
    'Show me his GitHub',
    'Why should I hire Alok?'
  ];

  const INITIAL_MESSAGE = "Hey, I'm <strong>Ask Alok</strong> 👋 Ask me anything about Alok, his skills, projects, experience, or how to get in touch.";

  const FALLBACK_PORTFOLIO = "I'm here specifically to answer questions about Alok and this portfolio. Try asking about his <strong>skills</strong>, <strong>projects</strong>, <strong>tech stack</strong>, or <strong>contact details</strong>.";

  const FALLBACK_NO_INFO = "I don't have that information in Alok's portfolio. You can contact Alok directly for more details: <a href=\"mailto:alokc5651@gmail.com\">alokc5651@gmail.com</a>";

  // ============================================================
  // DOM REFERENCES
  // ============================================================

  const chatbot = document.getElementById('askAlok');
  const fab = document.getElementById('chatbotFab');
  const panel = document.getElementById('chatbotPanel');
  const messagesEl = document.getElementById('chatbotMessages');
  const suggestionsEl = document.getElementById('chatbotSuggestions');
  const form = document.getElementById('chatbotForm');
  const input = document.getElementById('chatbotInput');
  const sendBtn = document.getElementById('chatbotSend');
  const closeBtn = document.getElementById('chatbotClose');
  const clearBtn = document.getElementById('chatbotClear');

  let isProcessing = false;

  // ============================================================
  // UTILITIES
  // ============================================================

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function getTimestamp() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function scrollToBottom() {
    requestAnimationFrame(() => {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    });
  }

  // ============================================================
  // INTENT MATCHING ENGINE
  // ============================================================

  function normalizeText(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s+#]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function matchIntent(userMessage) {
    const normalized = normalizeText(userMessage);
    let bestMatch = null;
    let bestScore = 0;

    for (const [intentKey, intent] of Object.entries(KB)) {
      let score = 0;

      for (const keyword of intent.keywords) {
        // Use regex for keyword matching to support word boundaries
        try {
          const regex = new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\\\/g, '\\'), 'i');
          if (regex.test(normalized)) {
            // Longer keywords get more weight
            score += keyword.length;
          }
        } catch (e) {
          // Simple includes fallback
          if (normalized.includes(keyword)) {
            score += keyword.length;
          }
        }
      }

      if (score > bestScore) {
        bestScore = score;
        bestMatch = intent;
      }
    }

    // Require a minimum confidence threshold
    if (bestScore < 2) {
      return null;
    }

    return bestMatch;
  }

  function generateResponse(userMessage) {
    const intent = matchIntent(userMessage);

    if (!intent) {
      // Check if it's a question about something personal we don't have
      const personal = /salary|age|married|girlfriend|boyfriend|family|school|college|university|degree|gpa|grade|company|employer|intern|job title|position|location|city|country|address/i;
      if (personal.test(userMessage)) {
        return { text: FALLBACK_NO_INFO };
      }
      return { text: FALLBACK_PORTFOLIO };
    }

    const result = { text: intent.response };

    if (intent.section) {
      result.section = intent.section;
    }
    if (intent.link) {
      result.link = intent.link;
    }

    return result;
  }

  // ============================================================
  // MESSAGE RENDERING
  // ============================================================

  function addMessage(text, type, options = {}) {
    const msg = document.createElement('div');
    msg.className = `chatbot__msg chatbot__msg--${type}`;

    // Sanitize user messages, allow HTML in bot messages
    const content = type === 'user' ? escapeHtml(text) : text;
    let html = `<div class="chatbot__msg-content">${content.replace(/\n/g, '<br>')}</div>`;

    // Add section navigation button
    if (options.section) {
      html += `<a href="#${options.section}" class="chatbot__nav-btn" data-scroll-section="${options.section}">Go to ${options.section.charAt(0).toUpperCase() + options.section.slice(1)} ↗</a>`;
    }

    // Add external link button
    if (options.link && !options.section) {
      html += `<a href="${options.link}" target="_blank" rel="noopener noreferrer" class="chatbot__nav-btn">Open Link ↗</a>`;
    }

    // Timestamp
    html += `<span class="chatbot__msg-time">${getTimestamp()}</span>`;

    msg.innerHTML = html;
    messagesEl.appendChild(msg);
    scrollToBottom();

    // Attach click handlers to nav buttons for smooth scroll
    const navBtns = msg.querySelectorAll('[data-scroll-section]');
    navBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = btn.getAttribute('data-scroll-section');
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Close chat on mobile after navigation
          if (window.innerWidth <= 600) {
            toggleChat(false);
          }
        }
      });
    });
  }

  function showTyping() {
    const typing = document.createElement('div');
    typing.className = 'chatbot__typing';
    typing.id = 'chatbotTyping';
    typing.innerHTML = '<span class="chatbot__typing-dot"></span><span class="chatbot__typing-dot"></span><span class="chatbot__typing-dot"></span>';
    messagesEl.appendChild(typing);
    scrollToBottom();
  }

  function hideTyping() {
    const typing = document.getElementById('chatbotTyping');
    if (typing) typing.remove();
  }

  // ============================================================
  // SUGGESTIONS
  // ============================================================

  function renderSuggestions(questions) {
    suggestionsEl.innerHTML = '';
    questions.forEach(q => {
      const chip = document.createElement('button');
      chip.className = 'chatbot__chip';
      chip.textContent = q;
      chip.type = 'button';
      chip.addEventListener('click', () => {
        handleUserMessage(q);
      });
      suggestionsEl.appendChild(chip);
    });
  }

  // ============================================================
  // CORE CHAT LOGIC
  // ============================================================

  function handleUserMessage(text) {
    const trimmed = text.trim();
    if (!trimmed || isProcessing) return;

    isProcessing = true;
    sendBtn.disabled = true;
    input.value = '';

    // Add user message
    addMessage(trimmed, 'user');

    // Hide suggestions after first real question
    suggestionsEl.innerHTML = '';

    // Show typing indicator
    showTyping();

    // Simulate a natural response delay (200-600ms)
    const delay = 300 + Math.random() * 400;
    setTimeout(() => {
      hideTyping();
      const response = generateResponse(trimmed);
      addMessage(response.text, 'bot', {
        section: response.section,
        link: response.link
      });

      // Show follow-up suggestions after response
      const followUp = SUGGESTED_QUESTIONS.filter(q =>
        normalizeText(q) !== normalizeText(trimmed)
      ).slice(0, 4);
      renderSuggestions(followUp);

      isProcessing = false;
      sendBtn.disabled = false;
      input.focus();
    }, delay);
  }

  // ============================================================
  // CHAT TOGGLE
  // ============================================================

  function toggleChat(forceState) {
    const isOpen = typeof forceState === 'boolean' ? forceState : !chatbot.classList.contains('open');

    chatbot.classList.toggle('open', isOpen);
    fab.setAttribute('aria-expanded', isOpen);

    if (isOpen) {
      input.focus();
    }
  }

  function clearChat() {
    messagesEl.innerHTML = '';
    addMessage(INITIAL_MESSAGE, 'bot');
    renderSuggestions(SUGGESTED_QUESTIONS);
  }

  // ============================================================
  // EVENT LISTENERS
  // ============================================================

  fab.addEventListener('click', () => toggleChat());

  closeBtn.addEventListener('click', () => toggleChat(false));

  clearBtn.addEventListener('click', clearChat);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleUserMessage(input.value);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && chatbot.classList.contains('open')) {
      toggleChat(false);
    }
  });

  // Close panel when clicking outside (desktop)
  document.addEventListener('click', (e) => {
    if (chatbot.classList.contains('open') &&
        !panel.contains(e.target) &&
        !fab.contains(e.target)) {
      toggleChat(false);
    }
  });

  // ============================================================
  // INITIALIZE
  // ============================================================

  addMessage(INITIAL_MESSAGE, 'bot');
  renderSuggestions(SUGGESTED_QUESTIONS);

})();
