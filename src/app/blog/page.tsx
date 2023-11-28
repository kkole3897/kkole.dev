import PostLink from './components/PostLink';
import PostList from './components/PostList';
import PostListItem from './components/PostListItem';

export default function Blog() {
  return (
    <main>
      <div>
        <PostList>
          <PostListItem>
            <PostLink
              href="/blog/first"
              title="타이틀"
              summary="요약"
              date="2023.10.22"
            />
          </PostListItem>
          <PostListItem>
            <PostLink
              href="/blog/second"
              title="타이틀"
              summary="요약"
              date="2023.10.22"
            />
          </PostListItem>
        </PostList>
      </div>
    </main>
  );
}
