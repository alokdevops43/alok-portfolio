/* ============================================================
   ALOK CHOUDHARY — PORTFOLIO SCRIPT
   Skills data, Projects data, rendering, scroll animations,
   parallax, navigation, and interactions.
   ============================================================ */

(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ============================================================
  // DATA
  // ============================================================

  const SKILLS_DATA = {
    "Programming": [
      { name: "C++", svg: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.109-7.11a7.133 7.133 0 0 1 6.156 3.553l-3.076 1.78a3.567 3.567 0 0 0-3.08-1.78A3.56 3.56 0 0 0 8.444 12 3.56 3.56 0 0 0 12 15.555a3.567 3.567 0 0 0 3.08-1.778l3.078 1.78A7.135 7.135 0 0 1 12 19.11zm7.109-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.789v-.79h.79v-.79h.79v.79h.79z"/></svg>' },
      { name: "Python", svg: '<svg viewBox="0 0 24 24"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.68H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.89.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg>' },
      { name: "JavaScript", svg: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>' }
    ],
    "Software Engineering": [
      { name: "AI-Assisted Dev", svg: '<svg viewBox="0 0 24 24"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>' },
      { name: "DSA", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' },
      { name: "OOP", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>' },
      { name: "Problem Solving", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>' },
      { name: "Git & GitHub", svg: '<svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>' },
      { name: "REST APIs", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9"/></svg>' }
    ],
    "Frontend": [
      { name: "HTML", svg: '<svg viewBox="0 0 24 24"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.071-.747.168-1.967.013-.149H6.16l.558 6.495h7.103l-.298 3.358-1.538.427-1.543-.428-.102-1.128h-2.62l.19 2.167 4.073 1.134 4.075-1.134.588-6.592H8.531z"/></svg>' },
      { name: "CSS", svg: '<svg viewBox="0 0 24 24"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.002l5.166-1.424.685-7.846-.011-.11H7.51l-.209-2.6 12.063-.006-.764-2.606z"/></svg>' },
      { name: "JavaScript", svg: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>' },
      { name: "React.js", svg: '<svg viewBox="0 0 24 24"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.592.068-.852.2-1.56.8-1.895 3.68-.962 7.067C1.89 9.752.754 11.32.754 12.002c0 .68 1.14 2.256 4.543 3.408-.936 3.39-.607 6.27.96 7.072.262.13.544.196.853.196 1.348 0 3.11-.96 4.89-2.618 1.78 1.654 3.538 2.6 4.884 2.6.31 0 .594-.066.853-.196 1.564-.8 1.898-3.68.964-7.068 3.396-1.15 4.533-2.728 4.533-3.408 0-.69-1.137-2.254-4.533-3.4.934-3.39.603-6.274-.964-7.076a1.87 1.87 0 0 0-.853-.196zm-.128 1.478c.098 0 .186.022.272.066.89.456.984 2.673.34 5.384-.146-.04-.3-.074-.456-.11a32.544 32.544 0 0 0-1.61-2.682c1.262-1.708 2.6-2.81 3.454-2.81v.152zm-8.147.166c.856 0 2.2 1.108 3.462 2.822a32.073 32.073 0 0 0-1.598 2.672c-.54.036-1.078.1-1.6.192a19.91 19.91 0 0 1-.512-2.26c-.32-1.88-.152-3.32.248-3.426zm4.08 4.834a30.06 30.06 0 0 1 1.047 1.746c-.36.082-.728.146-1.1.2a30.484 30.484 0 0 0-.558-1.06 30.16 30.16 0 0 0-.611-.886zm-2.494.056a29.46 29.46 0 0 0-.59.862 30.48 30.48 0 0 0-.558 1.06c-.37-.054-.737-.118-1.096-.2a29.882 29.882 0 0 1 1.047-1.746 29.68 29.68 0 0 1 1.197.024zm-2.213 2.46c.302.602.626 1.192.976 1.768a30.53 30.53 0 0 0-.38 2.39c-.462-.126-.908-.27-1.33-.426-1.58-.578-2.718-1.292-2.718-1.694 0-.4 1.138-1.114 2.72-1.694.424-.156.87-.3 1.332-.426.1.33.228.66.364.982l.036.1zm9.396-.1c.472.124.918.268 1.34.424 1.576.58 2.712 1.294 2.712 1.694 0 .398-1.136 1.114-2.712 1.694-.42.156-.866.3-1.34.424a30.542 30.542 0 0 0-.363-.98l-.036-.1a30.88 30.88 0 0 0-.976-1.77c.13-.482.244-.968.34-1.462.148.046.3.084.453.122l.582-.046zm-1.773 1.09a30.06 30.06 0 0 1-.558 1.062c.37.054.737.118 1.096.2a30.01 30.01 0 0 1-1.047 1.746 29.86 29.86 0 0 1-1.197-.024 29.35 29.35 0 0 0 .59-.862c.2-.3.39-.606.558-1.062l.558-1.06zm-4.396 0l.558 1.06c.196.3.39.61.59.862-.4.026-.8.026-1.197.024a30.06 30.06 0 0 1-1.047-1.746c.36-.082.727-.146 1.096-.2zm2.216 1.908c.34.602.65 1.224.936 1.862-.338.088-.69.162-1.048.226a30.48 30.48 0 0 0-.558-1.062 29.26 29.26 0 0 0-.67-1.026zm-2.213-.024a30.41 30.41 0 0 0-.67 1.026c-.188.354-.376.706-.552 1.062a19.4 19.4 0 0 1-1.052-.226c.286-.64.6-1.26.936-1.862a30.122 30.122 0 0 0 1.338 0zm3.478 2.56c.1.454.182.914.244 1.378-.416.164-.862.312-1.33.436.138-.48.264-.974.374-1.48l.218-.116c.174-.068.34-.142.494-.218zm-4.676 0c.158.076.32.15.494.218l.218.116c.108.506.234 1 .374 1.48a20.023 20.023 0 0 1-1.33-.436c.06-.464.142-.924.244-1.378zm5.848.726c-.152 2.708-.994 4.456-1.884 4.456-.098 0-.186-.022-.272-.066-.89-.456-.984-2.674-.34-5.386.146.04.3.074.455.11a32.06 32.06 0 0 0 1.612 2.682c-.18.246-.354.388-.57.388v-.184zm-7.018 0v.184c-.218 0-.394-.142-.574-.388a32.544 32.544 0 0 0 1.61-2.682c.158.036.312.07.458.11.64 2.71.546 4.928-.34 5.384-.088.044-.176.066-.272.066-.892 0-1.738-1.748-1.888-4.456l.006-.218z"/></svg>' },
      { name: "Next.js", svg: '<svg viewBox="0 0 24 24"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10306.36 10306.36 0 0 0 4.735 7.17l1.9 2.878.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.86-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/></svg>' }
    ],
    "Backend": [
      { name: "Node.js", svg: '<svg viewBox="0 0 24 24"><path d="M11.998 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383.637-.222.766-.272 1.445-.657.071-.04.164-.025.237.015l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.134-.141.134-.238V6.94c0-.1-.052-.192-.137-.24l-8.791-5.072a.27.27 0 0 0-.271 0L3.211 6.7c-.087.049-.14.143-.14.242v10.074c0 .097.053.19.137.236l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v9.968c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.468 18.6A1.856 1.856 0 0 1 1.542 17V6.94c0-.653.35-1.262.926-1.585L11.263.278a1.929 1.929 0 0 1 1.846 0l8.794 5.077c.576.323.927.932.927 1.585v10.074c0 .653-.351 1.261-.927 1.585l-8.794 5.077c-.28.163-.6.247-.922.247h-.189zm2.722-6.951c-3.843 0-4.65-1.764-4.65-3.245 0-.142.114-.253.256-.253h1.138c.127 0 .234.092.253.216.172 1.164.686 1.75 3.02 1.75 1.858 0 2.65-.42 2.65-1.405 0-.568-.224-.99-3.113-1.273-2.414-.237-3.907-.771-3.907-2.703 0-1.78 1.502-2.84 4.02-2.84 2.828 0 4.226.981 4.404 3.087a.258.258 0 0 1-.064.19.26.26 0 0 1-.186.082h-1.143a.252.252 0 0 1-.246-.199c-.273-1.216-.937-1.605-2.788-1.605-2.053 0-2.292.716-2.292 1.252 0 .65.282.839 3.015 1.205 2.709.362 4.005.876 4.005 2.756 0 1.922-1.603 3.024-4.398 3.024l.026-.039z"/></svg>' },
      { name: "Express.js", svg: '<svg viewBox="0 0 24 24"><path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.511 4.86 3.556-4.86a1.466 1.466 0 0 1 1.802-.708L17.7 10.68l5.002 6.588c.16.207.162.49.054.712l-.756.608zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.14-.69zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/></svg>' },
      { name: "MongoDB", svg: '<svg viewBox="0 0 24 24"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>' },
      { name: "Authentication", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1"/></svg>' }
    ],
    "AI Engineering": [
      { name: "Generative AI", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>' },
      { name: "LLM APIs", svg: '<svg viewBox="0 0 24 24"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>' },
      { name: "Prompt Engineering", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17l6-6-6-6"/><line x1="12" y1="19" x2="20" y2="19"/></svg>' },
      { name: "RAG", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>' },
      { name: "AI Agents", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>' }
    ],
    "DevOps & Cloud": [
      { name: "Linux", svg: '<svg viewBox="0 0 24 24"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 0 0-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587.26 1.22.517 1.846.75 1.37.51 2.77.769 3.916.692 1.146-.077 2.065-.455 2.59-1.222.183-.257.33-.556.394-.88.7.398 1.598.538 2.172.141.33-.227.554-.541.672-.902.118-.362.14-.767.074-1.175-.033-.195-.078-.382-.128-.563.397-.147.637-.375.735-.687.098-.312.065-.667-.113-1.005-.277-.52-.89-1.052-1.287-1.376-.086-.093-.172-.181-.262-.263-.26-.282-.505-.487-.652-.65l-.144-.225c.681-.62 1.286-1.395 1.59-2.336.176-.465.254-.977.241-1.467-.013-.498-.093-1.025-.302-1.5-.174-.39-.442-.729-.772-.973-.1-.067-.2-.128-.31-.185-.047-.023-.095-.045-.146-.065.123-.035.242-.077.358-.128.425-.189.737-.44.89-.723.152-.285.18-.585.106-.906a2.79 2.79 0 0 0-.403-.951c-.354-.466-.831-.854-1.318-1.157a11.6 11.6 0 0 0-1.6-.733c-.593-.22-1.2-.382-1.736-.467C14.922.028 13.64-.053 12.504 0"/></svg>' },
      { name: "Docker", svg: '<svg viewBox="0 0 24 24"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186h-2.12a.186.186 0 0 0-.185.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg>' },
      { name: "Kubernetes", svg: '<svg viewBox="0 0 24 24"><path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623zm1.166-3.027a.44.44 0 0 0 .704.34l.006.002 2.149-1.525a5.145 5.145 0 0 0-3.016-1.44l.152 2.618.005.005zm1.577 1.29a.44.44 0 0 0 .18.758l.003.01 2.515.728a5.14 5.14 0 0 0-.732-3.256l-1.965 1.755-.001.005zm-.622 1.065a.44.44 0 0 0-.491.607l-.004.005 1.003 2.422a5.18 5.18 0 0 0 2.07-2.601l-2.574-.438-.004.005zM11.998.45a.463.463 0 0 0-.087.008l-.022.005h-.013L1.76 3.063a.462.462 0 0 0-.311.345L.005 14.088a.462.462 0 0 0 .126.44l7.09 6.932a.46.46 0 0 0 .455.116l10.24-2.724a.464.464 0 0 0 .313-.349l1.44-10.677a.46.46 0 0 0-.126-.436L12.455.458a.462.462 0 0 0-.381-.01h-.016l-.06.002zm.257 3.044c.388-.008.76.073 1.1.25a2.72 2.72 0 0 1 1.443 2.1l.012.139a2.72 2.72 0 0 1-.312 1.486l-.062.107a2.71 2.71 0 0 1-1.108 1.058l-.084.046c-.367.175-.77.257-1.182.24a2.71 2.71 0 0 1-1.804-.877l-.088-.099a2.72 2.72 0 0 1-.632-1.416l-.013-.139a2.72 2.72 0 0 1 .312-1.487l.062-.107a2.71 2.71 0 0 1 1.108-1.058l.084-.046c.367-.175.77-.257 1.182-.24l-.018-.001.002.003z"/></svg>' },
      { name: "CI/CD", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>' },
      { name: "Cloud Computing", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>' }
    ],
    "Practices": [
      { name: "Responsive Design", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>' },
      { name: "API Integration", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>' },
      { name: "Testing", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>' },
      { name: "Deployment", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>' }
    ]
  };

  const PROJECTS_DATA = [
    {
      number: "01",
      title: "PulseLens",
      category: "Productivity Analytics",
      description: "A modern productivity analytics dashboard built with HTML, CSS, and Vanilla JavaScript. PulseLens transforms daily activity data into meaningful insights through interactive analytics, productivity metrics, streaks, goals, and personalized recommendations.",
      features: ["Daily productivity tracking","Interactive analytics dashboard","Productivity and focus scoring","Goal tracking","Progress monitoring","Daily streak system","Weekly insights","Monthly insights","Rule-based recommendations","Animated charts","LocalStorage support","Responsive design"],
      tech: ["HTML","CSS","JavaScript","LocalStorage","Data Visualization"],
      liveUrl: "https://pulse-lens.vercel.app/"
    },
    {
      number: "02",
      title: "EchoBeat",
      category: "Music Streaming Experience",
      description: "A premium music streaming experience built entirely with HTML, CSS, and JavaScript. The interface combines a luxury dark aesthetic, glassmorphism, immersive motion, and responsive interaction into a complete music experience.",
      features: ["Music streaming interface","Interactive music player","Music library","Search","Favorites","Albums","Playlists","Artist showcase","Lyrics drawer","Queue management","Settings panel","Dark theme","Glassmorphism","Micro-interactions","Responsive design","LocalStorage","Accessibility"],
      tech: ["HTML","CSS","JavaScript"],
      liveUrl: "https://echo-beat-rho.vercel.app/"
    },
    {
      number: "03",
      title: "Future Forge",
      category: "Career Learning Platform",
      subtitle: "One Platform. Three Career Paths. Endless Possibilities.",
      description: "A structured career-learning platform designed to help students become job-ready through curated roadmaps, resources, projects, books, and progress tracking across three career tracks: Quant Developer, Software Engineer, and Blockchain Engineer.",
      features: ["Personalized onboarding","User profile","Career roadmaps","Progress tracking","Book libraries","YouTube resources","Official documentation","Hands-on projects","Smart search","Dark mode","Learning dashboard","Personal notes","Learning timelines","Curated resources"],
      tech: ["HTML","CSS","JavaScript","Frontend Engineering","Learning Platform Architecture"],
      liveUrl: "https://future-forge-afbg.vercel.app/"
    },
    {
      number: "04",
      title: "ORBIT",
      category: "WebGL / 3D Experience",
      subtitle: "Global Surveillance System",
      description: "A cinematic WebGL-powered orbital surveillance experience featuring a photorealistic 3D Earth, satellite visualization, space environment, and intelligence dashboards.",
      features: ["Photorealistic 3D Earth","Satellite visualization","Cinematic camera transitions","Dynamic space environment","Orbital intelligence dashboard","Interactive data visualization","Glassmorphism UI","Micro-interactions","Responsive design","High-performance WebGL rendering"],
      tech: ["WebGL","Three.js","JavaScript"],
      liveUrl: "https://orbit-global-surveillance-system.vercel.app/",
      featured: true
    },
    {
      number: "05",
      title: "ASTRA OS",
      category: "Creative Frontend Engineering",
      subtitle: "Interstellar Mission Operating System",
      description: "A cinematic frontend experience inspired by deep-space mission control systems and science-fiction interfaces. The application explores what an interstellar operating system could feel like — built without frontend frameworks.",
      features: ["Cinematic boot sequence","Mission control","Galaxy navigation","Planet explorer","AI core","Research laboratory","Satellite network","Live command center","Animated starfield","Glassmorphism","Scene transitions","Dynamic lighting","Parallax","Responsive design","Offline-ready architecture"],
      tech: ["HTML","CSS","JavaScript"],
      liveUrl: "https://astra-os-virid.vercel.app/",
      featured: true
    }
  ];

  // ============================================================
  // RENDER SKILLS
  // ============================================================
  function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;

    Object.entries(SKILLS_DATA).forEach(([category, skills], catIdx) => {
      const catDiv = document.createElement('div');
      catDiv.className = 'skill-category anim-reveal';
      catDiv.style.transitionDelay = (catIdx * 0.08) + 's';

      const title = document.createElement('h3');
      title.className = 'skill-category__title';
      title.textContent = category;

      const cards = document.createElement('div');
      cards.className = 'skill-category__cards';

      skills.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'skill-card';

        const iconWrap = document.createElement('div');
        iconWrap.className = 'skill-card__icon';
        iconWrap.innerHTML = skill.svg;

        const name = document.createElement('span');
        name.className = 'skill-card__name';
        name.textContent = skill.name;

        card.appendChild(iconWrap);
        card.appendChild(name);
        cards.appendChild(card);
      });

      catDiv.appendChild(title);
      catDiv.appendChild(cards);
      grid.appendChild(catDiv);
    });
  }

  // ============================================================
  // RENDER PROJECTS
  // ============================================================
  function renderProjects() {
    const list = document.getElementById('projectsList');
    if (!list) return;

    PROJECTS_DATA.forEach((p, i) => {
      const article = document.createElement('article');
      article.className = 'project anim-reveal';
      article.style.transitionDelay = (i * 0.1) + 's';

      let subtitleHtml = '';
      if (p.subtitle) {
        subtitleHtml = `<p class="project__subtitle">${p.subtitle}</p>`;
      }

      let featuredClass = p.featured ? ' project__visual--featured' : '';

      article.innerHTML = `
        <div class="project__content">
          <span class="project__num">${p.number}</span>
          <h3 class="project__title">${p.title}</h3>
          <p class="project__category">${p.category}</p>
          ${subtitleHtml}
          <p class="project__desc">${p.description}</p>
          <div class="project__tech">
            ${p.tech.map(t => `<span class="project__tech-tag">${t}</span>`).join('')}
          </div>
          <div class="project__actions">
            <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="project__link">
              VIEW PROJECT <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div class="project__visual${featuredClass}" data-parallax="0.05">
          <div class="project__visual-inner">
            <span class="project__visual-number">${p.number}</span>
            <span class="project__visual-title">${p.title}</span>
          </div>
        </div>
      `;

      list.appendChild(article);
    });
  }

  // ============================================================
  // NAVIGATION
  // ============================================================
  function initNav() {
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    const allLinks = document.querySelectorAll('.nav__link');

    // Scroll class
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          nav.classList.toggle('scrolled', window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Mobile toggle
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click (mobile)
    allLinks.forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Active section highlighting
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = { rootMargin: '-20% 0px -80% 0px' };
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          allLinks.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`.nav__link[data-section="${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, observerOptions);
    sections.forEach(s => sectionObserver.observe(s));
  }

  // ============================================================
  // SCROLL REVEAL ANIMATIONS
  // ============================================================
  function initScrollReveal() {
    if (prefersReduced) {
      document.querySelectorAll('.anim-reveal').forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.anim-reveal').forEach(el => observer.observe(el));
  }

  // ============================================================
  // PARALLAX
  // ============================================================
  function initParallax() {
    if (prefersReduced) return;

    const elements = document.querySelectorAll('[data-parallax]');
    if (!elements.length) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          elements.forEach(el => {
            const speed = parseFloat(el.dataset.parallax) || 0.1;
            const rect = el.getBoundingClientRect();
            const center = rect.top + rect.height / 2;
            const offset = (center - window.innerHeight / 2) * speed;
            el.style.transform = `translateY(${offset}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ============================================================
  // MAGNETIC BUTTONS
  // ============================================================
  function initMagnetic() {
    if (prefersReduced) return;

    document.querySelectorAll('.btn, .project__link').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  // ============================================================
  // INIT
  // ============================================================
  function init() {
    renderSkills();
    renderProjects();
    initNav();
    initScrollReveal();
    initParallax();
    initMagnetic();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
