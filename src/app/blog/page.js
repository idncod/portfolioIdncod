import React from 'react';

const BlogPage = () => {
    return (
        <div>
            hi
        </div>
    );
};

export default BlogPage;

// import { db, posts } from '../../../lib/db'
// import styles from './Blog.module.scss';
//
// export default async function BlogPage() {
//     let allPosts = await db.select().from(posts)
//     return (
//         <ul>
//             {allPosts.map((post) => (
//                 <li key={post.id}>{post.title}</li>
//             ))}
//         </ul>
//     )
// }
//
//
// //
// // const BlogPage = async () => {
// //     let posts = [];
// //     let errorMessage = '';
// //
// //     try {
// //         const res = await fetcher('http://localhost:3000/api/posts');
// //
// //         if (!res.ok) {
// //             const errorData = await res.json();
// //             throw new Error(`HTTP error! Status: ${res.status}, Message: ${errorData.error}`);
// //         }
// //
// //         posts = await data.json();
// //     } catch (error) {
// //         console.error('Error fetching posts:', error);
// //         errorMessage = `Error fetching posts: ${error.message}`;
// //     }
// //
// //     return (
// //         <div className={styles.container}>
// //             {errorMessage ? (
// //                 <div>{errorMessage}</div>
// //             ) : (
// //                 posts.map(post => (
// //                     <div key={post.id}>
// //                         <h2>{post.title}</h2>
// //                         <p>{post.content}</p>
// //                         <p>{new Date(post.created_at).toLocaleDateString()}</p>
// //                     </div>
// //                 ))
// //             )}
// //         </div>
// //     );
// // };
//
// export default BlogPage;
