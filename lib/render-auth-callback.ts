import {
  ANDROID_APP_STORE_URL,
  APP_AUTH_URL,
  IOS_APP_STORE_URL,
  SITE_NAME,
} from "@/lib/site";

const pageCss = `
        .auth-actions {
            margin-top: 32px;
        }

        .auth-actions .btn {
            margin: 0;
            min-height: 44px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .auth-stores {
            margin-top: 16px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px 24px;
        }

        .auth-stores a {
            color: #2c8526;
            text-decoration: underline;
            min-height: 44px;
            display: inline-flex;
            align-items: center;
        }
`;

const pageScript = `
<script>
(function () {
  var appUrl = ${JSON.stringify(APP_AUTH_URL)};
  var siteName = ${JSON.stringify(SITE_NAME)};
  var hash = window.location.hash || "";
  var search = window.location.search || "";
  var hashParams = new URLSearchParams(hash.charAt(0) === "#" ? hash.slice(1) : hash);
  var queryParams = new URLSearchParams(search);
  var error = queryParams.get("error") || hashParams.get("error");
  var errorCode = queryParams.get("error_code") || hashParams.get("error_code");
  var type = hashParams.get("type") || queryParams.get("type");
  var title = document.getElementById("auth-title");
  var lead = document.getElementById("auth-lead");
  var open = document.getElementById("open-app");
  if (!title || !lead || !open) return;

  if (error) {
    title.textContent = "Länken fungerade inte";
    document.title = "Länken fungerade inte | " + siteName;
    lead.textContent = errorCode === "otp_expired"
      ? "Länken har gått ut. Öppna appen och be om ett nytt mejl."
      : "Öppna appen och be om ett nytt mejl.";
    open.setAttribute("href", appUrl);
    return;
  }

  var confirmsEmail = !type || type === "signup" || type === "email" || type === "email_change";
  if (!confirmsEmail) {
    title.textContent = "Öppna appen";
    document.title = "Öppna appen | " + siteName;
    lead.textContent = "Öppna Grannsam-appen för att fortsätta.";
  }

  var openHref = appUrl + search + hash;
  open.setAttribute("href", openHref);

  var ua = navigator.userAgent || "";
  var phone = /iPhone|iPad|iPod|Android/i.test(ua)
    || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  if (phone) window.location.href = openHref;
})();
</script>`;

export function renderAuthCallbackPage(shell: string) {
  const body = `<section id="page-intro">
        <div class="container">
            <div class="text-left">
                <h1 id="auth-title"
                    class="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black-100 font-medium">
                    E-post bekräftad</h1>
                <div class="page-lead-left md:text-xl md:leading-7 text-base mt-6">
                    <p id="auth-lead">Öppna appen på telefonen för att fortsätta.</p>
                    <div class="auth-actions">
                        <a id="open-app" class="btn bg-primary text-white border-primary hover:bg-black-200 hover:text-white"
                            href="${APP_AUTH_URL}">Öppna appen</a>
                    </div>
                    <p class="auth-stores">
                        <a href="${IOS_APP_STORE_URL}">Hämta i App Store</a>
                        <a href="${ANDROID_APP_STORE_URL}">Hämta på Google Play</a>
                    </p>
                </div>
            </div>
        </div>
    </section>

    `;

  const start = shell.indexOf('<section id="page-intro">');
  const end = shell.indexOf("<footer");
  if (start === -1 || end === -1) {
    throw new Error("Datasäkerhet shell is missing the page intro or footer.");
  }

  const head = shell.slice(0, start).replace("</style>", `${pageCss}    </style>`);
  return (head + body + shell.slice(end)).replace("</body>", `${pageScript}\n</body>`);
}
