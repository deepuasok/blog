import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import { getPostBySlug, getAllSlugs } from '@/lib/posts'
import { mdxComponents } from '@/components/MDXComponents'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const remarkPlugins = [remarkGfm] as any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rehypePlugins = [rehypeHighlight] as any

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: 'Not Found' }
  }

  return {
    title: `${post.title} | Deepu Asok`,
    description: post.description,
  }
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div>
      <Link href="/" className="back-link">
        &larr; back
      </Link>

      <article>
        <header>
          <h1>{post.title}</h1>
          <time>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </header>

        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins,
              rehypePlugins,
            },
          }}
        />
      </article>
    </div>
  )
}
