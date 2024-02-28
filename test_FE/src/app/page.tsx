import styles from "./page.module.css";
import posts from "./posts.json";
import CollectionsPage from "./CollectionsPage";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Danh sách bài viết</h1>
        <ul className={styles.post_block}>
          {posts.map((post) => (
            <li className={styles.item_post} key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <p>Tác giả: {post.author}</p>
            </li>
          ))}
        </ul>
      </div>
      <CollectionsPage />
    </main>
  );
}
