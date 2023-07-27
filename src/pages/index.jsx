import fs from 'fs';
import Card from '../components/Card';

export default function Page({ portfolio }) {
  return (
    <div className="container max-w-screen-sm mx-auto my-8 whitespace-pre-line font-sans">
      <header className="my-8">
        <h1 className="mb-4 text-4xl text-center font-bold">Christopher Lee</h1>
        <h2 className="text-xl text-center font-bold">
          JavaScript and Cloud Developer
        </h2>
        <h3 className="text-center text-sm">
          Los Angeles, California
          <span className="px-4">|</span>
          <a
            className="text-blue-600 underline"
            href="https://github.com/chrjl"
            target="_blank"
          >
            <img
              src="/github-mark.svg"
              alt=""
              className="inline-block align-middle h-4 mr-1"
            />
            chrjl
          </a>
        </h3>
      </header>

      <ul>
        {portfolio.map((project) => (
          <li key={project.title} className="m-8">
            <Card {...project} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const portfolio = fs.readFileSync('./public/portfolio.json', 'utf-8');
  return {
    props: {
      portfolio: JSON.parse(portfolio),
    },
  };
}
