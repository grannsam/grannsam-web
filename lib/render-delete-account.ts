import {
  deleteAccountIntro,
  deleteAccountSections,
} from "@/lib/delete-account";
import { CONTACT_EMAIL, DATA_SECURITY_PATH, CONTACT_PATH } from "@/lib/site";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function withEmailLink(text: string, subject?: string) {
  const href = `mailto:${CONTACT_EMAIL}${
    subject ? `?subject=${encodeURIComponent(subject)}` : ""
  }`;
  return escapeHtml(text).replaceAll(
    escapeHtml(CONTACT_EMAIL),
    `<a href="${href}">${escapeHtml(CONTACT_EMAIL)}</a>`,
  );
}

const listCss = `
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
`;

export function renderDeleteAccountPage(shell: string) {
  const sections = deleteAccountSections
    .map((section) => {
      const paragraphs = section.paragraphs
        .map((paragraph) => `<p>${withEmailLink(paragraph, section.mailSubject)}</p>`)
        .join("\n                    ");
      const steps = section.steps
        ? `<ol>${section.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>`
        : "";
      const items = section.items
        ? `<ul>${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
        : "";
      return `<article class="security-section">
                    <h2>${escapeHtml(section.title)}</h2>
                    ${paragraphs}
                    ${steps}
                    ${items}
                </article>`;
    })
    .join("\n                ");

  const body = `<section id="page-intro">
        <div class="container">
            <div class="text-left fadeInUp" data-delay="0.2">
                <h1
                    class="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black-100 font-medium">
                    Radera ditt Grannsam-konto</h1>
                <div class="page-lead-left md:text-xl md:leading-7 text-base mt-6">
                    <p>${escapeHtml(deleteAccountIntro)}</p>
                </div>
            </div>
        </div>
    </section>

    <section id="security-body" class="lg:pt-15 pt-10 pb-15">
        <div class="container">
            <div class="security-wrap md:text-lg text-base leading-relaxed fadeInUp" data-delay="0.3">
                ${sections}

                <aside class="security-note delete-note">
                    <h2>Frågor om radering eller integritet?</h2>
                    <p>Kontakta oss på <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> eller via <a
                            href="${CONTACT_PATH}">kontaktformuläret</a>. Mer om hur vi arbetar med trygghet och
                        personuppgifter finns på <a href="${DATA_SECURITY_PATH}">Datasäkerhet</a>.</p>
                </aside>
            </div>
        </div>
    </section>

    `;

  const start = shell.indexOf('<section id="page-intro">');
  const end = shell.indexOf("<footer");
  if (start === -1 || end === -1) {
    throw new Error("Datasäkerhet shell is missing the page intro or footer.");
  }

  const head = shell
    .slice(0, start)
    .replace("</style>", `${listCss}    </style>`);
  return head + body + shell.slice(end);
}
