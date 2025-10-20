import { React } from './lib/react.js';
import { createRoot } from 'https://esm.sh/react-dom@18/client';
import { App } from './App.js';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('AKCSE site failed to find the root element.');
} else {
  const root = createRoot(rootElement);
  root.render(React.createElement(App));
}
