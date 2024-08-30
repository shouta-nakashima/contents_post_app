import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    date: {
      type: 'string',
      required: true
    },
    published: {
      type: 'boolean'
    },
    image: {
      type: 'string',
      required: true
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => `${doc._raw.flattenedPath}`
    },
    slugAsParams: {
      type: 'string',
      resolve: (doc) => `${doc._raw.flattenedPath.split('/').slice(1)[0]}`
    }
  }
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Post]
})
