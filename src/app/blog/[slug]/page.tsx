import { format } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';
import type { MDXComponents } from 'mdx/types';
import Heading from './components/heading';
import PostLink from './components/post-link';
import Divider from './components/divider';
import Blockquote from './components/blockquote';
import './style.css';
import PostList from './components/post-list';
import PostListItem from './components/post-list-item';
import PostOrderedList from './components/post-ordered-list';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.id,
  }));
}

const mdxComponents: MDXComponents = {
  h2: ({ children }) => <Heading as="h2">{children}</Heading>,
  h3: ({ children }) => <Heading as="h3">{children}</Heading>,
  h4: ({ children }) => <Heading as="h4">{children}</Heading>,
  h5: ({ children }) => <Heading as="h5">{children}</Heading>,
  h6: ({ children }) => <Heading as="h6">{children}</Heading>,
  a: ({ children, href }) => (
    <PostLink href={href as string}>{children}</PostLink>
  ),
  hr: () => <Divider />,
  blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
  ul: ({ children }) => <PostList>{children}</PostList>,
  li: ({ children }) => <PostListItem>{children}</PostListItem>,
  ol: ({ children }) => <PostOrderedList>{children}</PostOrderedList>,
};

function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.id === params.slug);

  if (!post) notFound();

  const date = format(new Date(post.date), 'yyyy.MM.dd');
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <main>
      <article>
        <div className="flex flex-col gap-y-[24px] pb-[40px]">
          <Heading>{post.title}</Heading>
          <div>{date}</div>
        </div>
        <div className="flex flex-col gap-y-[40px] leading-7">
          <MDXContent components={mdxComponents} />
        </div>
      </article>
    </main>
  );
}

export default PostPage;
