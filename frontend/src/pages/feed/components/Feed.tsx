import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Post from "../../../common/components/Post";
import { PostType } from "../../../interfaces/Post";

type Props = {
  posts: PostType[];
};

const FeedSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default function Feed({ posts }: Props): JSX.Element {
  return (
    <FeedSection>
      <h1>
        <FontAwesomeIcon icon={faNewspaper} style={{ marginRight: 8 }} />
        Votre feed
      </h1>
      {posts?.map((post) => (
        <Post key={post.id} id={post.id} post={post.post} userId={post.userId} imageUrl={post.imageUrl} />
      ))}
    </FeedSection>
  );
}
