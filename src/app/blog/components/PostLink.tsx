import Link from 'next/link';

interface Props {
  title: string;
  href: string;
  summary: string;
  date: string;
}

function PostLink(props: Props) {
  const { href, title, summary, date } = props;

  return (
    <Link href={href} className="block p-[4px] rounded-[4px] hover:bg-cyan-600">
      <div className="flex flex-col gap-y-[8px]">
        <div className="text-gray-500 text-xl font-bold truncate">{title}</div>
        <div className="text-gray-500 line-clamp-2">{summary}</div>
        <div className="text-teal-700 text-[0.875rem]">{date}</div>
      </div>
    </Link>
  );
}

export default PostLink;
