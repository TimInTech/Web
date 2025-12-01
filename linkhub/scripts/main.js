/**
 * TimInTech LinkHub - Main JavaScript
 * Handles dynamic link loading, interactions, and share functionality
 */

// ============================================================================
// BRAND ICONS SVG LIBRARY
// ============================================================================
const ICONS = {
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,

  amazon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5855 17.7153c-3.4109.5063-6.6544.4784-9.2945-.0559-.5819-.1118-.6537-.2517-.1678-.4854 2.5206-1.2088 5.4536-2.0364 8.1591-2.2881.5679-.0559.7637.1678.5958.7357-.3076 1.0614-.7916 2.0923-1.2926 3.0937zm8.9449-3.3131c-.3356-.4016-1.1193-.7357-2.1806-.4854-1.4008.3356-2.9971.9594-4.564 1.6951-.3356.1678-.3636.4295-.0839.6253.9594.5958 2.0364.9034 3.1134 1.0453.9873.1398 1.9188-.0839 2.6824-.6253.7357-.5399 1.2926-1.2926 1.2926-2.0644 0-.2797-.0839-.5679-.2599-.7916v.0009zm-5.6043 6.3532c-.1398.6812-.5399 1.0173-1.0173 1.0733-.4295.0559-.8869-.1119-1.1473-.4295-.4016-.4854-.3636-1.3151.0839-2.0644.3636-.5679 1.0173-1.0173 1.7251-1.1752.3356-.0839.6812-.0559.9873.0839.2797.1398.4854.3636.5399.6253.0839.4295-.0279.8869-.1716 1.9028v-.0162zm-.1678-7.7821c-2.5206.2797-5.6602 1.2926-8.1032 2.6264-.4295.2238-.8869.4854-1.3151.7916-.7916.5399-1.2367 1.3131-1.2926 2.1806-.0839 1.0173.3636 1.9747 1.1193 2.6264.9034.7916 2.1526 1.1473 3.4389 1.1193 1.0733-.0279 2.1526-.3356 3.1694-.7916.9594-.4295 1.8628-.9873 2.6264-1.6671.5958-.5119.8869-1.0733.9594-1.7251.0839-.7357-.1119-1.3971-.5958-1.9188-.6812-.7357-1.7531-1.0173-2.9971-.7916-.7357.1398-1.4569.4295-2.1806.7916-.1678.0839-.3356.1959-.5119.2797 0-.0839.0279-.1678.0279-.2517.0839-1.0173.6532-1.8908 1.5566-2.4027 1.7251-.9873 3.9696-1.3971 6.0744-1.1752 1.1193.1119 2.2602.3356 3.3371.6532.4854.1398 1.0173.0839 1.3971-.1678.5958-.3636.8869-1.0173.6812-1.6951-.1398-.5399-.5958-.8869-1.1752-.9873-1.5566-.2797-3.1134-.4016-4.6701-.2517z"/></svg>`,

  komoot: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C6.48 0 2 4.48 2 10c0 6.47 8.03 13.03 9.33 14.14.36.31.9.31 1.27 0C13.97 23.03 22 16.47 22 10c0-5.52-4.48-10-10-10zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>`,

  reddit: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>`,

  spotify: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`,

  youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,

  twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,

  threads: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.932 7.5c-.103 0-.206.004-.309.012a5.343 5.343 0 0 0-2.731 1.035A6.627 6.627 0 0 0 12 7.477a6.627 6.627 0 0 0-1.892 1.07 5.343 5.343 0 0 0-2.731-1.035c-.103-.008-.206-.012-.309-.012-2.347 0-4.254 1.907-4.254 4.254 0 1.748 1.058 3.252 2.571 3.909.417 1.614 1.536 2.966 3.046 3.705.544.266 1.133.47 1.746.598a7.374 7.374 0 0 0 3.646 0c.613-.128 1.202-.332 1.746-.598 1.51-.739 2.629-2.091 3.046-3.705 1.513-.657 2.571-2.161 2.571-3.909 0-2.347-1.907-4.254-4.254-4.254z"/></svg>`,

  pinterest: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>`
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Convert hex color to RGB values
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Create a link card element
 */
function createLinkCard(link) {
  const card = document.createElement('a');
  card.href = link.url;
  card.className = 'link-card';
  card.target = '_blank';
  card.rel = 'noopener noreferrer';
  card.setAttribute('aria-label', `Besuche ${link.title}`);

  // Set CSS custom properties for the card color
  const rgb = hexToRgb(link.color);
  if (rgb) {
    card.style.setProperty('--card-color', link.color);
    card.style.setProperty('--card-color-rgb', `${rgb.r}, ${rgb.g}, ${rgb.b}`);
  }
  card.style.setProperty('--card-bg-color', link.bgColor);

  // Create icon
  const icon = document.createElement('div');
  icon.className = 'link-icon';
  icon.innerHTML = ICONS[link.icon] || ICONS.github;

  // Create content
  const content = document.createElement('div');
  content.className = 'link-content';

  const title = document.createElement('div');
  title.className = 'link-title';
  title.textContent = link.title;

  const description = document.createElement('div');
  description.className = 'link-description';
  description.textContent = link.description;

  content.appendChild(title);
  content.appendChild(description);

  // Create arrow
  const arrow = document.createElement('div');
  arrow.className = 'link-arrow';
  arrow.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>`;

  card.appendChild(icon);
  card.appendChild(content);
  card.appendChild(arrow);

  return card;
}

// ============================================================================
// LOAD LINKS
// ============================================================================

async function loadLinks() {
  const container = document.getElementById('links-container');

  try {
    const response = await fetch('data/links.json');
    if (!response.ok) throw new Error('Failed to load links');

    const links = await response.json();

    // Clear loading state
    container.innerHTML = '';

    // Create and append link cards
    links.forEach(link => {
      const card = createLinkCard(link);
      container.appendChild(card);
    });

    // Update link count
    const linkCount = document.getElementById('link-count');
    if (linkCount) {
      linkCount.textContent = links.length;
    }

  } catch (error) {
    console.error('Error loading links:', error);
    container.innerHTML = `
      <div class="loading">
        <p style="color: var(--color-neon-pink);">❌ Fehler beim Laden der Links</p>
        <p style="font-size: 0.875rem; color: var(--color-text-muted);">Bitte lade die Seite neu.</p>
      </div>
    `;
  }
}

// ============================================================================
// SHARE FUNCTIONALITY
// ============================================================================

function setupShareButtons() {
  const shareButtons = document.querySelectorAll('.share-btn');
  const pageUrl = window.location.href;
  const pageTitle = 'TimInTech - Alle meine Links';

  shareButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const shareType = btn.dataset.share;

      switch (shareType) {
        case 'whatsapp':
          window.open(`https://wa.me/?text=${encodeURIComponent(pageTitle + ' ' + pageUrl)}`, '_blank');
          break;

        case 'telegram':
          window.open(`https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle)}`, '_blank');
          break;

        case 'twitter':
          window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle)}`, '_blank');
          break;

        case 'copy':
          copyToClipboard(pageUrl, btn);
          break;
      }
    });
  });
}

/**
 * Copy text to clipboard with visual feedback
 */
async function copyToClipboard(text, button) {
  try {
    await navigator.clipboard.writeText(text);

    // Visual feedback
    const originalHTML = button.innerHTML;
    button.classList.add('copied');
    button.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>`;

    setTimeout(() => {
      button.classList.remove('copied');
      button.innerHTML = originalHTML;
    }, 2000);

  } catch (err) {
    console.error('Failed to copy:', err);
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      button.classList.add('copied');
      setTimeout(() => button.classList.remove('copied'), 2000);
    } catch (err) {
      console.error('Fallback copy failed:', err);
    }
    document.body.removeChild(textArea);
  }
}

// ============================================================================
// ANALYTICS & TRACKING (Optional)
// ============================================================================

/**
 * Track link clicks (for analytics)
 */
function setupAnalytics() {
  document.addEventListener('click', (e) => {
    const linkCard = e.target.closest('.link-card');
    if (linkCard) {
      const linkTitle = linkCard.querySelector('.link-title')?.textContent;
      console.log('Link clicked:', linkTitle);
      // Here you could send data to your analytics service
      // Example: gtag('event', 'link_click', { link_name: linkTitle });
    }
  });
}

// ============================================================================
// PERFORMANCE MONITORING
// ============================================================================

/**
 * Log performance metrics
 */
function logPerformance() {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0];
      console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
    });
  }
}

// ============================================================================
// INITIALIZATION
// ============================================================================

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function init() {
  console.log('🚀 TimInTech LinkHub initialized');

  // Load links
  loadLinks();

  // Setup share buttons
  setupShareButtons();

  // Setup analytics (optional)
  setupAnalytics();

  // Log performance metrics (optional, remove in production)
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    logPerformance();
  }
}

// ============================================================================
// SERVICE WORKER REGISTRATION (for offline support)
// ============================================================================

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(registration => console.log('SW registered:', registration.scope))
      .catch(err => console.log('SW registration failed:', err));
  });
}
