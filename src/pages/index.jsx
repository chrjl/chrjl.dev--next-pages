import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Head from 'next/head';
import Card from '../components/Card';
import GithubMark from '../assets/GithubMark';

export default function Page({ portfolio }) {
  return (
    <>
      <Head>
        <title>Christopher Lee | Portfolio</title>
      </Head>
      <div className="container max-w-screen-sm mx-auto my-8 whitespace-pre-line font-sans">
        <header className="my-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">Christopher Lee</h1>
          <h2 className="text-xl font-semibold">
            JavaScript Developer
            <div className="text-base font-medium">
              AWS Certified Solutions Architect Associate
            </div>
          </h2>
          <h3 className="text-sm mt-2">
            Los Angeles, California
            <span className="px-4">|</span>
            <a
              className="text-blue-600 underline"
              href="https://github.com/chrjl"
              target="_blank"
            >
              <GithubMark className="inline-block h-4 mr-1" />
              chrjl
            </a>
          </h3>
        </header>

        <ul>
          {portfolio.map((project) => (
            <li key={project.data.title} className="m-8">
              <Card {...project} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = JSON.parse(fs.readFileSync('./src/posts/index.json', 'utf-8'));

  const portfolio = posts.map((post) => {
    if (typeof post === 'string') {
      const filePath = path.join(process.cwd(), 'src/posts', post);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const matterResult = matter(fileContent);

      return {
        data: matterResult.data,
        content: matterResult.content,
        isEmpty: matterResult.isEmpty,
      };
    } else {
      return post;
    }
  });

  return {
    props: {
      portfolio,
    },
  };

  /*
  type Posts = (string | Project)[]
  type Portfolio = Project[]

  interface Project {
    data: {
      title: string | [string, string?];
      tags?: string[];
      links?: Links;
    },
    content: string,    
  }
  
  interface Links {
    target: string;
    repo: string | string[];
    assets: {
      description: string,
      href: string,
    }[]
  }
  */
}
