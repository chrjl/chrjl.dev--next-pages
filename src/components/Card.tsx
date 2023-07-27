import Image from 'next/image';

export default function Card(props: CardProps) {
  const { title, description, tags, links } = props;

  return (
    <div className="group border-solid border-black border-2 p-4 h-full hover:bg-gray-200">
      {links.target ? (
        <a href={links.target} target="_blank" className="block pb-6 mb-2">
          <div className="font-medium group-hover:font-bold">
            <h1 className="uppercase underline">{title + ' ->'}</h1>
            {tags && <CardTags tags={tags} />}
          </div>
          {description && <CardDescription description={description} />}
        </a>
      ) : (
        <div className="block pb-8">
          <h1 className="uppercase font-medium">{title}</h1>
          {tags && <CardTags tags={tags} />}
          {description && <CardDescription description={description} />}
        </div>
      )}

      {links && <CardLinks {...links} />}
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
    </div>
  );
}

function CardTags({ tags }: CardTagsProps) {
  return (
    <ul>
      {tags.map((tag, index) => (
        <li
          key={index}
          className="inline-block uppercase text-xs mr-3 last:mr-0"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

function CardLinks(props: CardLinksProps) {
  const { repo, assets } = props;

  return (
    <>
      {assets && (
        <ul className="text-sm mt-auto mb-4">
          {assets.map(({ href, description }) => (
            <li key={description}>
              <a
                className="text-blue-600 underline"
                href={href}
                target="_blank"
              >
                {description}
              </a>
            </li>
          ))}
        </ul>
      )}

      {repo && (
        <>
          <a
            className="inline text-blue-600 underline text-xs group-hover:font-bold"
            href={repo}
            target="_blank"
          >
            <img
              src="/github-mark.svg"
              alt=""
              className="inline h-4 w-4 mr-2"
            />
            {repo}
          </a>
        </>
      )}
    </>
  );
}

interface CardDescriptionProps {
  description: string;
}

interface CardTagsProps {
  tags: string[];
}

interface CardLinksProps {
  repo?: string;
  assets?: { description: string; href: string }[];
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
