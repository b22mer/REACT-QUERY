import { useState } from "react";
import { PostDetail } from "./PostDetail";
import { useQuery } from "react-query";
const maxPostPage = 10;

async function fetchPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0"
  );
  return response.json();
}

export function Posts() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);
//(쿼리키:이름, 쿼리에 대한 데이터를 가져오는 방식)
//isFetching, isLoading
const  {data, isError,error, isLoading}= useQuery("posts", fetchPosts);
  if(isLoading) return <div>로기딩중</div>
  if(isError) return <div>error <>{error.toString()}</></div>
  

  return (
    <>
      <ul>
        {data.map((post) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button disabled onClick={() => {}}>
          Previous page
        </button>
        <span>Page {currentPage + 1}</span>
        <button disabled onClick={() => {}}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
