import Link from 'next/link';
import { format } from 'date-fns';
import type { Post } from '../types';

function PostLink({ post }: { post: Post }) {
  const href = `/blog/${post.id}`;
  const date = format(new Date(post.date), 'yyyy.MM.dd');

  return (
    <Link href={href} className="block p-[4px] rounded-[4px] hover:bg-cyan-600">
      <div className="flex flex-col gap-y-[8px]">
        <div className="text-gray-500 text-xl font-bold truncate">
          {post.title}
        </div>
        <div className="text-gray-500 line-clamp-2">{post.description}</div>
        <div className="text-teal-700 text-[0.875rem]">{date}</div>
      </div>
    </Link>
  );
}

export default PostLink;
