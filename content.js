// Liste blanche des domaines officiels
const trustedDomains = [
  "ville-fecamp.fr",
  "lehavre.fr",
  ".gouv.fr",


// Fonction de vérification
function isTrustedDomain(url) {
  
// Vérifie la liste fixe
  if (trustedDomains.some(domain => url.includes(domain))) {
    return true;
  }

// Vérifie le motif ville-[nom].fr
  const mairiePattern = /^https?:\/\/(?:www\.)?ville-[\p{L}\p{N}-]+\.fr(?:\/|$)/iu;
  if (mairiePattern.test(url)) {
    return true;
  }

  return false;
}
];

// Mots-clés de recherche administrative
const keywords = [
  "passeport",
  "carte identité",
  "carte d'identité",
  "carte grise",
  "acte de naissance",
  "permis de conduire",
  "immatriculation",
  "ants"
];

const searchParams = new URLSearchParams(window.location.search);
const query = searchParams.get("q")?.toLowerCase() || "";
const isRelevantSearch = keywords.some(keyword => query.includes(keyword));

// Fonction pour afficher la bulle
function showTooltip(element, message) {
  const tooltip = document.createElement("div");
  tooltip.textContent = message;
  tooltip.style.position = "absolute";
  // Détermine la couleur selon le message
if (message.includes("✅")) {
  tooltip.style.background = "#4CAF50"; // Vert pour site officiel
} else {
  tooltip.style.background = "#faa200ff"; // Jaune pour site non reconnu
}
// Styles de la bulle
    tooltip.style.border = "1px solid #ccc";
    tooltip.style.padding = "6px 10px";
    tooltip.style.borderRadius = "6px";
    tooltip.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
    tooltip.style.fontSize = "14px";
    tooltip.style.zIndex = "9999";
    tooltip.style.pointerEvents = "none";
    tooltip.style.maxWidth = "250px";

const rect = element.getBoundingClientRect();
  tooltip.style.top = `${rect.top + window.scrollY - 40}px`;
  tooltip.style.left = `${rect.left + window.scrollX}px`;
  tooltip.id = "ants-tooltip";

    document.body.appendChild(tooltip);
}  

function removeTooltip() {
  const existing = document.getElementById("ants-tooltip");
  if (existing) {
    existing.remove();
  }
}

// Activation des bulles uniquement si la recherche est pertinente
if (isRelevantSearch) {
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("mouseenter", () => {
      try {
        const href = link.href;
        if (!href) return;

        // 🛑 Ignorer les liens internes à Google
        if (
        href.includes("/search") ||
        href.includes("/images") ||
        href.includes("/news") ||
        href.includes("/shopping") ||
        href.includes("/maps") ||
        href.includes("/videos") ||
        href.includes("/books") ||
        href.includes("start=") || // pagination
        href.includes("google.com") ||
        href.includes("google.fr") ||
        href.includes("wikipedia.org") // autres domaines Google
      ) {
        return;
      }
      
      const url = new URL(href);
        const domain = url.hostname.toLowerCase();

        const isGouvDomain = domain.endsWith(".gouv.fr");
        const isTrustedDomain = trustedDomains.some(trusted => domain.endsWith(trusted));
        const isOfficial = isGouvDomain || isTrustedDomain;

        const message = isOfficial
          ? "✅ Site officiel reconnu"
          : "⚠️ Ce site n'est pas un domaine officiel. Vérifiez qu'il ne facture pas de frais supplémentaires.";

        showTooltip(link, message);
      } catch (e) {
        // Ignore les liens mal formés
      }
    });

    link.addEventListener("mouseleave", () => {
      removeTooltip();
    });
  });
}
