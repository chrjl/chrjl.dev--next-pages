import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export default function Card(props: CardProps) {
  const { data, content } = props;
  const { title, tags, links } = data;

  return (
    <div className="group border-solid border-black border-2 p-4 h-full hover:bg-gray-200">
      {links.target ? (
        <a href={links.target} target="_blank" className="block">
          <div className="font-medium group-hover:font-bold">
            <h1 className="uppercase underline">{title + ' ->'}</h1>

            {tags && (
              <ul className="text-xs mt-2">
                <CardTags tags={tags} />
              </ul>
            )}
          </div>
        </a>
      ) : (
        <div className="block">
          <h1 className="uppercase font-medium">{title}</h1>

          {tags && (
            <ul className="text-xs mt-2">
              <CardTags tags={tags} />
            </ul>
          )}
        </div>
      )}

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
              <img
                src="/github-mark.svg"
                alt=""
                className="inline h-4 w-4 mr-2"
              />
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

function CardTags({ tags }: CardTagsProps) {
  return tags.map((tag, index) => (
    <li key={index} className="inline-block uppercase mr-3 last:mr-0">
      {tag}
    </li>
  ));
}

function CardLinksAssets({ assets }: CardLinksAssetsProps) {
  return assets.map(({ href, description }) => (
    <li key={description} className="mt-1">
      <a className="text-blue-600 underline" href={href} target="_blank">
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
      className="block text-blue-600 underline text-xs group-hover:font-bold"
      href={href}
      target="_blank"
    >
      {href}
    </a>
  ));
}

interface CardTagsProps {
  tags: string[];
}

interface CardLinksReposProps {
  repos: string | string[];
}

interface CardLinksAssetsProps {
  assets: { description: string; href: string }[];
}

interface CardProps {
  data: {
    title: string;
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
