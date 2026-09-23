import type { LegalBlock, LegalDocument } from "@/lib/legal";
import {
  CONTACT_EMAIL,
  CONTACT_PATH,
  DATA_SECURITY_PATH,
  DELETE_ACCOUNT_PATH,
  PRIVACY_PATH,
  TERMS_PATH,
} from "@/lib/site";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function withLinks(text: string) {
  const replacements = [
    {
      token: `Radera konto (${DELETE_ACCOUNT_PATH})`,
      html: `<a href="${DELETE_ACCOUNT_PATH}">Radera konto</a>`,
    },
    {
      token: `integritetspolicy (${PRIVACY_PATH})`,
      html: `<a href="${PRIVACY_PATH}">integritetspolicy</a>`,
    },
    {
      token: `(${DELETE_ACCOUNT_PATH})`,
      html: `<a href="${DELETE_ACCOUNT_PATH}">Radera konto</a>`,
    },
    {
      token: `(${PRIVACY_PATH})`,
      html: `<a href="${PRIVACY_PATH}">Integritetspolicy</a>`,
    },
    {
      token: `(${TERMS_PATH})`,
      html: `<a href="${TERMS_PATH}">Användarvillkor</a>`,
    },
    {
      token: CONTACT_EMAIL,
      html: `<a href="mailto:${CONTACT_EMAIL}">${escapeHtml(CONTACT_EMAIL)}</a>`,
    },
  ];

  let html = escapeHtml(text);
  for (const { token, html: replacement } of replacements) {
    html = html.replaceAll(escapeHtml(token), replacement);
  }

  return html.replaceAll(
    /\[fylls i: [^\]]+\]/g,
    (match) => `<span class="legal-todo">${match}</span>`,
  );
}

function renderBlock(block: LegalBlock) {
  const paragraphs = (block.paragraphs ?? [])
    .map((paragraph) => `<p>${withLinks(paragraph)}</p>`)
    .join("\n                    ");
  const items = block.items
    ? `<ul>${block.items.map((item) => `<li>${withLinks(item)}</li>`).join("")}</ul>`
    : "";
  const table = block.table
    ? `<div class="security-table"><table><thead><tr>${block.table.headers
        .map((header) => `<th>${withLinks(header)}</th>`)
        .join("")}</tr></thead><tbody>${block.table.rows
        .map(
          (row) =>
            `<tr>${row.map((cell) => `<td>${withLinks(cell)}</td>`).join("")}</tr>`,
        )
        .join("")}</tbody></table></div>`
    : "";

  return `<article class="security-section">
                    <h2>${escapeHtml(block.title)}</h2>
                    ${paragraphs}
                    ${items}
                    ${table}
                </article>`;
}

const legalCss = `
        .security-section ol,
        .security-section ul {
            margin-top: 16px;
            padding-left: 1.25rem;
        }

        .security-section li + li {
            margin-top: 8px;
        }

        .security-section ol {
            list-style: decimal;
        }

        .security-section ul {
            list-style: disc;
        }

        .page-updated {
            margin-top: 16px;
            font-size: 0.95rem;
            line-height: 1.4;
        }

        .security-table {
            margin-top: 16px;
            overflow-x: auto;
        }

        .security-section table {
            width: 100%;
            min-width: 32rem;
            border-collapse: collapse;
            font-size: 0.95em;
        }

        .security-section th,
        .security-section td {
            text-align: left;
            vertical-align: top;
            padding: 10px 16px 10px 0;
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
        }

        .security-section th {
            font-weight: 700;
        }

        .legal-todo {
            background: #fff3cd;
        }
`;

export function renderLegalPage(
  shell: string,
  legal: LegalDocument,
  eyebrow: string,
) {
  const sections = legal.blocks.map(renderBlock).join("\n                ");
  const body = `<section id="page-intro">
        <div class="container">
            <div class="text-left fadeInUp" data-delay="0.2">
                <h3
                    class="border border-[#bebebe] py-2.5 px-5 rounded-3xl md:text-base md:leading-5 text-sm inline-block font-normal mb-[5px]">
                    <i class="ri-arrow-right-up-line text-primary"></i>
                    ${escapeHtml(eyebrow)}
                </h3>
                <h1
                    class="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black-100 font-medium">
                    ${escapeHtml(legal.title)}</h1>
                <div class="page-lead-left md:text-xl md:leading-7 text-base mt-6">
                    <p>${withLinks(legal.intro)}</p>
                    <p class="page-updated">Senast uppdaterad ${escapeHtml(legal.updated)}</p>
                </div>
            </div>
        </div>
    </section>

    <section id="security-body" class="lg:pt-15 pt-10 pb-15">
        <div class="container">
            <div class="security-wrap md:text-lg text-base leading-relaxed fadeInUp" data-delay="0.3">
                ${sections}

                <aside class="security-note legal-note">
                    <h2>Frågor?</h2>
                    <p>Mejla oss på <a href="mailto:${CONTACT_EMAIL}">${escapeHtml(CONTACT_EMAIL)}</a> eller via <a
                            href="${CONTACT_PATH}">kontaktformuläret</a>. Mer om hur vi arbetar med trygghet finns på <a
                            href="${DATA_SECURITY_PATH}">Datasäkerhet</a>.</p>
                </aside>
            </div>
        </div>
    </section>

    `;

  const start = shell.indexOf('<section id="page-intro">');
  const end = shell.indexOf("<footer>");
  if (start === -1 || end === -1) {
    throw new Error("Datasäkerhet shell is missing the page intro or footer.");
  }

  const head = shell.slice(0, start).replace("</style>", `${legalCss}    </style>`);
  return head + body + shell.slice(end);
}
