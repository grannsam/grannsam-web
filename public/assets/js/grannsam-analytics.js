var trackEvent = function () {};

try {
    var aptabase = await import("https://cdn.jsdelivr.net/npm/@aptabase/web@0.5.0/dist/index.js");
    var liveHost = location.hostname === "www.grannsam.nu" || location.hostname === "grannsam.nu";
    aptabase.init("A-EU-7487354434", {
        appVersion: "0.1.0",
        isDebug: !liveHost
    });
    trackEvent = aptabase.trackEvent;
} catch (error) {}

var PAGE_EVENTS = {
    "/": "viewed_home",
    "/appen": "viewed_appen",
    "/om-oss": "viewed_about",
    "/kontakt": "viewed_contact",
    "/faq": "viewed_faq",
    "/datasakerhet": "viewed_privacy",
    "/radera-konto": "viewed_delete_account"
};

var SECTION_EVENTS = {
    pris: "viewed_pricing",
    engagemang: "viewed_engagement",
    varfor: "viewed_why"
};

var seenSections = new Set();

function pagePath() {
    var path = location.pathname.replace(/\/index\.html$/, "/").replace(/\/$/, "") || "/";
    if (path === "/grannsam.html") return "/";
    return path.replace(/\.html$/, "");
}

function contactIntent() {
    return new URLSearchParams(location.search).get("intent") === "demo" ? "demo" : "contact";
}

function viewEvent() {
    var path = pagePath();
    var props = { path: path };
    if (path === "/kontakt") {
        var intent = contactIntent();
        props.intent = intent;
        if (intent === "demo") return { event: "viewed_demo", props: props };
    }
    return { event: PAGE_EVENTS[path] || "viewed_page", props: props };
}

function claimSection(section) {
    var key = pagePath() + "#" + section;
    if (seenSections.has(key)) return false;
    seenSections.add(key);
    return true;
}

function trackSection(section) {
    if (!section || !claimSection(section)) return;
    trackEvent(SECTION_EVENTS[section] || "viewed_section", {
        section: section,
        path: pagePath()
    });
}

function ctaFromLink(link) {
    var href = link.getAttribute("href") || "";
    var demo = href.indexOf("intent=demo") !== -1;
    if (link.classList.contains("nav-demo")) {
        return { cta: "book_demo", location: "nav" };
    }
    if (demo && link.closest("#hem")) {
        return {
            cta: "book_demo",
            location: window.matchMedia("(max-width: 767px)").matches ? "hero_mobile" : "hero"
        };
    }
    if (demo && link.closest("#pris")) {
        return { cta: "book_demo", location: "pricing" };
    }
    if (demo && link.closest("#faq")) {
        return { cta: "book_demo", location: "faq" };
    }
    if (demo && link.classList.contains("btn") && pagePath() === "/appen") {
        return { cta: "book_demo", location: "appen" };
    }
    if (link.classList.contains("btn") && href.indexOf("#faq") !== -1 && pagePath() === "/appen") {
        return { cta: "faq", location: "appen" };
    }
    if (link.closest(".delete-note") && href.indexOf("/kontakt") !== -1 && !demo) {
        return { cta: "contact", location: "delete_account" };
    }
    if (link.closest(".security-note") && href.indexOf("/kontakt") !== -1 && !demo) {
        return { cta: "contact", location: "datasakerhet" };
    }
    return null;
}

function outboundFromLink(link) {
    var href = link.getAttribute("href") || "";
    var channel = href.indexOf("mailto:") === 0 ? "email" : href.indexOf("tel:") === 0 ? "phone" : "";
    if (!channel) return null;
    if (link.closest("footer")) return { channel: channel, location: "footer" };
    if (link.closest(".contact-aside")) return { channel: channel, location: "contact" };
    if (link.closest(".delete-note")) return { channel: channel, location: "delete_account" };
    if (link.closest(".security-note")) return { channel: channel, location: "datasakerhet" };
    return null;
}

window.setTimeout(function () {
    var view = viewEvent();
    trackEvent(view.event, view.props);
}, 100);

function sendHashSection() {
    var section = location.hash.replace(/^#/, "");
    if (section) trackSection(section);
}

window.requestAnimationFrame(sendHashSection);
window.addEventListener("hashchange", sendHashSection);

var sectionElements = Object.keys(SECTION_EVENTS)
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

if (sectionElements.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting || entry.intersectionRatio < 0.45) return;
            trackSection(entry.target.id);
        });
    }, { threshold: [0.45] });
    sectionElements.forEach(function (element) { observer.observe(element); });
}

document.addEventListener("click", function (event) {
    var header = event.target.closest(".accordion-header");
    if (header && header.getAttribute("data-open") !== "true") {
        var question = header.cloneNode(true);
        question.querySelectorAll("span").forEach(function (span) { span.remove(); });
        trackEvent("faq_open", { question: question.textContent.replace(/\s+/g, " ").trim() });
    }
}, true);

document.addEventListener("click", function (event) {
    var link = event.target.closest("a");
    if (!link) return;

    var outbound = outboundFromLink(link);
    if (outbound) {
        trackEvent("outbound_click", outbound);
        return;
    }

    var cta = ctaFromLink(link);
    if (!cta) return;
    trackEvent(cta.cta === "book_demo" ? "demo_cta" : "cta_click", {
        cta: cta.cta,
        location: cta.location
    });
});

var intent = contactIntent();
if (intent === "demo" && document.getElementById("contact-title")) {
    document.title = "Boka en demo av Grannsam | Grannsam";
    document.getElementById("contact-title").textContent = "Boka en demo av Grannsam";
    document.getElementById("contact-lead").textContent = "Berätta kort om er förening så bokar vi en demo av Grannsam och visar hur appen kan stärka grannskapet hos er.";
}

var form = document.getElementById("contact-form");
if (form) {
    var formEvents = intent === "demo"
        ? { submit: "demo_submit", success: "demo_success", error: "demo_error" }
        : { submit: "contact_submit", success: "contact_success", error: "contact_error" };
    var submitButton = form.querySelector("button[type=submit]");
    var submitLabel = submitButton.textContent;
    var formError = document.getElementById("contact-form-error");
    var endpoint = "/api/contact";

    function clearErrors() {
        formError.hidden = true;
        formError.textContent = "";
        form.querySelectorAll("[data-error-for]").forEach(function (error) {
            error.hidden = true;
            error.textContent = "";
            var input = form.elements[error.getAttribute("data-error-for")];
            if (input) input.removeAttribute("aria-invalid");
        });
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        clearErrors();
        submitButton.disabled = true;
        submitButton.textContent = "Skickar...";
        trackEvent(formEvents.submit, { intent: intent });

        var data = new FormData(form);
        fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: data.get("name") || "",
                email: data.get("email") || "",
                association: data.get("association") || "",
                message: data.get("message") || ""
            })
        }).then(function (response) {
            return response.json().then(function (payload) {
                return { ok: response.ok, status: response.status, payload: payload || {} };
            }).catch(function () {
                return { ok: false, status: response.status, payload: {} };
            });
        }).then(function (result) {
            if (!result.ok) {
                var errors = result.payload.errors || {};
                Object.keys(errors).forEach(function (name) {
                    var input = form.elements[name];
                    var error = form.querySelector('[data-error-for="' + name + '"]');
                    if (!input || !error) return;
                    input.setAttribute("aria-invalid", "true");
                    error.hidden = false;
                    error.textContent = errors[name];
                });
                formError.hidden = false;
                formError.textContent = result.payload.error || "Kunde inte skicka meddelandet. Försök igen senare.";
                trackEvent(formEvents.error, {
                    intent: intent,
                    reason: result.payload.errors || result.status === 400 ? "validation" : "server"
                });
                return;
            }

            form.style.display = "none";
            document.getElementById("contact-thanks").style.display = "block";
            trackEvent(formEvents.success, { intent: intent });
        }).catch(function () {
            formError.hidden = false;
            formError.textContent = "Kunde inte skicka meddelandet. Försök igen senare.";
            trackEvent(formEvents.error, { intent: intent, reason: "network" });
        }).finally(function () {
            submitButton.disabled = false;
            submitButton.textContent = submitLabel;
        });
    });
}
