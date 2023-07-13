import { useEffect, useLayoutEffect, useState } from "react";

const ByUsingUseEffect = () => {
  const [posts, setPosts] = useState([]);
  const [layoutValue, setLayoutValue] = useState([]);

  const postsList = posts.map((post) => {
    return (
      <div
        style={{ border: "1px solid black", padding: "10px", margin: "10px" }}
      >
        <div key={post.id}>{post.title}</div>
        <div key={post.id}>{post.body}</div>
        <div key={post.id}>{post.id}</div>
      </div>
    );
  });

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url)
      .then(
        (response /* readableStream */) =>
          response.json() /* converted to json */
      )
      .then((posts) => {
        setPosts(posts);
      });
    console.log("useEffect");
  }, []);

  useLayoutEffect(() => {
    setLayoutValue("From useLayoutEffect");
  }, []);

  return (
    <>
      Called Immediatly before useEffect Hook {layoutValue}
      {postsList}
    </>
  );
};

export default ByUsingUseEffect;

//   forEach(
//     ()=>{}
//     );
