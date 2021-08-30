import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Post from "../../post/components/Post";
import { PostType } from "../../../interfaces/Post";

type Props = {
  title: string;
  posts: PostType[];
  onUpdated?: () => void;
};

const FeedSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default function Feed({ title, posts, onUpdated }: Props): JSX.Element {
  return (
    <FeedSection>
      <h2>
        <FontAwesomeIcon icon={faNewspaper} style={{ marginRight: 8 }} />
        {title}
      </h2>
      {posts.length
        ? posts?.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              post={post.post}
              user={post.user}
              imageUrl={post.imageUrl}
              onUpdated={onUpdated}
            />
          ))
        : "Aucun post à afficher !"}
    </FeedSection>
  );
}
