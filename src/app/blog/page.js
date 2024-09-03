"use client"
import useSWR from 'swr';
import styles from './Blog.module.scss'
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function BlogPage() {
    const { data: posts, error } = useSWR('/api/posts', fetcher);

    if (error) return <div>Error loading posts.</div>;
    if (!posts) return <div>Loading...</div>;

    return (
        <div className={styles.container}>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2 className={styles.title}>{post.title}</h2>
                        <p>{post.content}</p>
                        <small>Posted on: {new Date(post.created_at).toLocaleDateString()}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}
