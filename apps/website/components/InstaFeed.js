import { useEffect, useState } from 'react'

export default function InstaFeed({ posts }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
      }}>
      {posts.map((post) => (
        <a
          key={post.shortcode}
          href={`https://www.instagram.com/p/${post.shortcode}/`}
          target="_blank"
          rel="noopener noreferrer">
          <img
            src={post.thumbnail}
            alt="Instagram post"
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </a>
      ))}
    </div>
  )
}
