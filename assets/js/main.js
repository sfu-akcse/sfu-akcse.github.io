(function bootstrap(global) {
  const { React, ReactDOM } = global;
  const App = global.AKCSE && global.AKCSE.App;
  const rootElement = document.getElementById('root');

  if (!React || !ReactDOM || !App || !rootElement) {
    console.error('AKCSE site failed to initialize.');
    return;
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
})(window);
