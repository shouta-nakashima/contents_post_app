import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'blog/**/*.mdx',
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
    }
  }
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Post]
})
