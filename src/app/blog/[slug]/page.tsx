import { format } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.id,
  }));
}

function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.id === params.slug);

  if (!post) notFound();

  const date = format(new Date(post.date), 'yyyy.MM.dd');
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <main>
      <article className="blog-article">
        <h1>{post.title}</h1>
        <div>{date}</div>
        <MDXContent />
      </article>
    </main>
  );
}

export default PostPage;
