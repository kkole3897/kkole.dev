import { format } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';
import type { MDXComponents } from 'mdx/types';
import Heading from './components/heading';
import PostLink from './components/post-link';
import Divider from './components/divider';

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
  a: ({ children, target, href }) => (
    <PostLink href={href as string} target={target}>
      {children}
    </PostLink>
  ),
  hr: () => <Divider />,
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
        <div className="flex flex-col gap-y-[40px]">
          <MDXContent components={mdxComponents} />
        </div>
      </article>
    </main>
  );
}

export default PostPage;
