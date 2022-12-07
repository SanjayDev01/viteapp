import { useParams } from "react-router-dom";

export default function ALLPosts() {
  const { pageNumber } = useParams();
  return <h2>All Posts; page:{pageNumber}</h2>;
}
