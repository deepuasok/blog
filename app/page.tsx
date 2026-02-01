import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts()

  return (
    <div>
      {posts.length === 0 ? (
        <p style={{ color: '#666' }}>No posts yet.</p>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <span className="post-title">{post.title}</span>
                <span className="post-date">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
