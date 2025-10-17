import Post from './Post';
import { useEffect, useState } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async function () {
      try {
        const rest = await fetch(API_URL);
        const posts = await rest.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((post) => {
          return <Post key={post.id} {...post} />;
        })
      )}
    </>
  );
}

export default Posts;
