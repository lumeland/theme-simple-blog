// the bulk of this code is from https://jsr.io/@ooker777/lume-mermaid-plugin
// I've amended the mermaidScript to add the MutationObserver to watch for theme changes,
// and added a white background to mermaid diagrams in case dark mode is set by the user
// I modified it because the mermaid diagrams were not visible in dark mode, unless you add this white background on demand
// I will probably PR this change to the original author, but it is not clear that it would be worth merging
// to their repo, as it is a very specific use case

const mermaidScript = `
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
mermaid.initialize({ startOnLoad: true });

// Function to add white background to mermaid diagrams in dark mode
function setMermaidBackground() {
  const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
  const mermaidDivs = document.querySelectorAll('.mermaid');
  mermaidDivs.forEach(div => {
    if (isDarkMode) {
      div.style.backgroundColor = 'white';
      div.style.padding = '10px';
      div.style.borderRadius = '5px';
    } else {
      div.style.backgroundColor = '';
      div.style.padding = '';
      div.style.borderRadius = '';
    }
  });
}

// Set initial background
document.addEventListener('DOMContentLoaded', setMermaidBackground);

// Watch for theme changes
const observer = new MutationObserver(setMermaidBackground);
observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['data-theme']
});
`;

export default function (){
  return (site) => {
    site.process([".html"], (pages) => {
      for (const page of pages) {
        const document = page.document;
        if (!document) continue;

        const elements = document.querySelectorAll("pre code.language-mermaid");

        if (elements.length) {
          const scriptElement = document.createElement("script");
          scriptElement.setAttribute("type", "module")
          scriptElement.textContent = mermaidScript;
          document.head.appendChild(scriptElement);
        }

        for (const element of elements) {
          const pre = element.parentElement;
          pre.textContent = element.textContent;
          pre.classList.add("mermaid");
        }
      }
    });
  };
}