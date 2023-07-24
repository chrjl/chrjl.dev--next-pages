import Image from 'next/image';

export default function Card(props: CardProps) {
  const { title, description, tags, links } = props;

  return (
    <div className="flex flex-col border-solid border-black border-2 p-4 h-full hover:bg-gray-200">
      <a href={links.target} className="block mb-4">
        <h1 className="uppercase font-bold">{title + ' ->'}</h1>

        {tags && (
          <ul>
            {tags.map((tag, index) => (
              <li
                key={index}
                className="inline-block uppercase text-xs font-light mr-3 last:mr-0"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {description && (
          <div className="mt-4 text-sm font-sans">
            {description.split('\n').map((p, index) => (
              <p key={index} className="mt-2">
                {p}
              </p>
            ))}
          </div>
        )}
      </a>

      {links && <CardLinks {...links} />}
    </div>
  );
}

function CardLinks(props: CardLinksProps) {
  const { repo, assets } = props;

  return (
    <ul className="text-sm mt-auto">
      {assets &&
        assets.map(({ href, description }) => (
          <li key={description}>
            <a
              className="text-blue-600 underline font-['Arimo']"
              href={href}
              target="_blank"
            >
              {description}
            </a>
          </li>
        ))}

      {repo && (
        <li className="mt-4">
          <img
            src="/github-mark.svg"
            alt=""
            className="inline-block align-middle h-4 mr-2"
          />
          <a
            className="text-blue-600 underline text-xs"
            href={repo}
            target="_blank"
          >
            {repo}
          </a>
        </li>
      )}
    </ul>
  );
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
