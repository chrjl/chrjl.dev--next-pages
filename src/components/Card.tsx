import Image from 'next/image';

export default function Card(props: CardProps) {
  const { title, description, tags, links } = props;

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
          {description && <CardDescription description={description} />}
        </a>
      ) : (
        <div className="block">
          <h1 className="uppercase font-medium">{title}</h1>
          {description && <CardDescription description={description} />}

          {tags && (
            <ul className="text-xs mt-2">
              <CardTags tags={tags} />
            </ul>
          )}
        </div>
      )}

    </div>
  );
}

function CardDescription({ description }: CardDescriptionProps) {
  const paragraphs = description.split('\n');

  return (
    <div className="mt-4 first:mt-0 text-sm font-content">
      {paragraphs.map((p, index) => (
        <p key={index} className="mt-2">
          {p}
        </p>
      ))}
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

interface CardDescriptionProps {
  description: string;
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
  title: string;
  description?: string;
  tags?: string[];
  links?: {
    repo?: string;
    assets?: { description: string; href: string }[];
    target?: string;
  };
}
