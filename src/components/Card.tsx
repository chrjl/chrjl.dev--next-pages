import ReactMarkdown from 'react-markdown';

import GithubMark from '../assets/GithubMark';

export default function Card(props: CardProps) {
  const { data, content } = props;
  const { title, tags, links } = data;

  return (
    <div className="group text-lg border-solid border-black border-2 p-4 h-full hover:bg-gray-200">
      <div className="text-center sm:text-left font-medium uppercase">
        {links.target ? (
          <a
            href={links.target}
            target="_blank"
            className="block font-semibold group-hover:font-bold text-black [&>h1>*]:underline [&>h1]:after:content-['_->'] "
          >
            <CardTitle title={title} tags={tags} />
          </a>
        ) : (
          <CardTitle title={title} tags={tags} />
        )}
      </div>

      {content && (
        <div className="mt-6 [&>*]:mt-2 whitespace-normal text-sm font-content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      )}

      {links && (
        <div className="mt-8 group-hover:font-bold">
          {links.assets && (
            <ul className="text-sm font-content mt-auto mb-4">
              <CardLinksAssets assets={links.assets} />
            </ul>
          )}
          {links.repo && (
            <div className="flex flex-row items-center mt-8">
              <GithubMark className="inline h-4 w-4 mr-2" />
              <div>
                <CardLinksRepos repos={links.repo} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function CardTitle({ title, tags }: CardTitleProps) {
  // check type and build title element or fragment
  const titleFrag = Array.isArray(title) ? (
    title.map((segment, index) => (
      <span
        key={index}
        className="inline-block after:content-['_'] last:after:content-none whitespace-pre-wrap"
      >
        {segment}
      </span>
    ))
  ) : (
    <span className="inline-block whitespace-pre-wrap">{title}</span>
  );

  return (
    <>
      <h1 className="leading-snug">{titleFrag}</h1>

      <ul className="text-xs mt-3">
        {tags.map((tag, index) => (
          <li key={index} className="inline-block uppercase mr-3 last:mr-0">
            {tag}
          </li>
        ))}
      </ul>
    </>
  );
}

function CardLinksAssets({ assets }: CardLinksAssetsProps) {
  return assets.map(({ href, description }) => (
    <li key={description} className="mt-1">
      <a href={href} target="_blank">
        {description}
      </a>
    </li>
  ));
}

function CardLinksRepos({ repos }: CardLinksReposProps) {
  if (typeof repos === 'string') repos = [repos];

  return repos.map((href, index) => (
    <a
      key={index}
      className="block text-xs group-hover:font-bold"
      href={href}
      target="_blank"
    >
      {href}
    </a>
  ));
}

interface CardTitleProps {
  title: string | [string, string?];
  tags?: string[];
}

interface CardLinksReposProps {
  repos: string | string[];
}

interface CardLinksAssetsProps {
  assets: { description: string; href: string }[];
}

interface CardProps {
  data: {
    title: string | [string, string?];
    tags?: string[];
    links?: {
      repo?: string;
      target?: string;
      assets?: {
        description: string;
        href: string;
      }[];
    };
  };
  content?: string;
}
