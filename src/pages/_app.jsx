// These styles apply to every route in the application
import '../styles/globals.css';

// Import fonts from Fontsource, set tailwind.config.js for Tailwind default families
import '@fontsource-variable/inter';
import '@fontsource/arimo/latin-400.css';
import '@fontsource/arimo/latin-400-italic.css';
import '@fontsource/arimo/latin-700.css';
import '@fontsource/cousine/latin-400.css';
import '@fontsource/cousine/latin-700.css';

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
