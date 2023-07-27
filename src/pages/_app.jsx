// These styles apply to every route in the application
import '../styles/globals.css';

// Import local fonts into CSS variables
import localFont from 'next/font/local';

const inter = localFont({
  src: '../styles/fonts/Inter.var.woff2',
  variable: '--font-inter',
});

const arimo = localFont({
  src: '../styles/fonts/Arimo-VariableFont_wght.ttf',
  variable: '--font-arimo',
});

const cousine = localFont({
  src: '../styles/fonts/Cousine-Regular.ttf',
  variable: '--font-cousine',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${arimo.variable} ${cousine.variable}`}>
      <Component {...pageProps} />;
    </main>
  );
}
