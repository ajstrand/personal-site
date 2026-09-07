import { render } from 'preact';
import "preact/debug";
import Counter from './Counter';

// A dictionary mapping string keys to Preact components
const COMPONENT_MAP = {
  Counter: Counter
};

function hydrateIslands() {
  const islands = document.querySelectorAll('.preact-island');

  islands.forEach((element) => {
    const componentName = element.getAttribute('data-component');
    const rawProps = element.getAttribute('data-props');

    const Component = COMPONENT_MAP[componentName];
    if (!Component) return;

    try {
      const props = JSON.parse(rawProps);
      // Clean up server-side placeholder text inside element before injection
      element.innerHTML = '';
      render(<Component {...props} />, element);
    } catch (error) {
      console.error(`Failed to hydrate island: ${componentName}`, error);
    }
  });
}

// Run bootstrap script once the DOM structure is accessible
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', hydrateIslands);
} else {
  hydrateIslands();
}
