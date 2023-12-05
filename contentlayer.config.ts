import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrismPlus from 'rehype-prism-plus';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'blog/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    thumbnailUrl: {
      type: 'string',
    },
  },
  computedFields: {
    id: {
      type: 'string',
      // eslint-disable-next-line no-underscore-dangle
      resolve: (post) => post._raw.flattenedPath.replace(/blog\//, ''),
    },
  },
}));

export default makeSource({
  contentDirPath: 'src/contents',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [rehypePrismPlus],
  },
});
