import { format } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';
import type { MDXComponents } from 'mdx/types';
import Heading from './components/heading';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.id,
  }));
}

const mdxComponents: MDXComponents = {
  h1: ({ children }) => <Heading>{children}</Heading>,
  h2: ({ children }) => <Heading as="h2">{children}</Heading>,
  h3: ({ children }) => <Heading as="h3">{children}</Heading>,
  h4: ({ children }) => <Heading as="h4">{children}</Heading>,
  h5: ({ children }) => <Heading as="h5">{children}</Heading>,
  h6: ({ children }) => <Heading as="h6">{children}</Heading>,
};

function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.id === params.slug);

  if (!post) notFound();

  const date = format(new Date(post.date), 'yyyy.MM.dd');
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <main>
      <article className="blog-article">
        <Heading>{post.title}</Heading>
        <div className="mb-[40px] text-gray-500">{date}</div>
        <MDXContent components={mdxComponents} />
      </article>
    </main>
  );
}

export default PostPage;
