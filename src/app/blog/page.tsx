import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import PostLink from './components/post-link';
import PostList from './components/post-list';
import PostListItem from './components/post-list-item';
import type { Post } from './types';

export default function Blog() {
  const posts: Post[] = [...allPosts]
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .map((post) => {
      const { id, title, description, date } = post;

      return {
        id,
        title,
        description,
        date,
      };
    });

  return (
    <main>
      <div>
        <PostList>
          {posts.map((post) => (
            <PostListItem key={post.id}>
              <PostLink post={post} />
            </PostListItem>
          ))}
        </PostList>
      </div>
    </main>
  );
}
