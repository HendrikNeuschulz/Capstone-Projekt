import Link from "next/link";
import styled from "styled-components";
import CommentForm from "../../../../components/CommentForm";
import { useRouter } from "next/router";
import users from "../../../../userdata.json";

export default function Comment({ recipes, onAddComment }) {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return;

  const recipeComments = recipes.find((recipe) => recipe.id === id).comments;

  function findUserData(comment) {
    return users.find((user) => user.id === comment.userId);
  }

  return (
    <>
      <Headline>Comment your Recipes</Headline>
      {recipeComments.length === 0 && <p>Nothing here ¯\_(ツ)_/¯..</p>}
      <ul>
        {recipeComments &&
          recipeComments.map((comment) => {
            const userData = findUserData(comment);
            return (
              <StyledComment key={comment.id}>
                <h2>{userData.name}</h2>
                <p>{comment.text}</p>
              </StyledComment>
            );
          })}
      </ul>
      <CommentForm onAddComment={onAddComment} recipeId={id} />
      <Link href={`/recipes/${id}`}>
        <svg
          id="Layer_1"
          enable-background="new 0 0 64 64"
          height="30"
          viewBox="0 0 64 64"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g>
              <g>
                <path d="m59.5 34h-54.9c-1.1 0-2-.9-2-2s.9-2 2-2h54.9c1.1 0 2 .9 2 2s-.9 2-2 2z" />
              </g>
            </g>
          </g>
          <g>
            <g>
              <g>
                <path d="m26.5 56c-.5 0-1-.2-1.4-.6l-22-22c-.8-.8-.8-2 0-2.8l22-22c.8-.8 2-.8 2.8 0s.8 2 0 2.8l-20.5 20.6 20.6 20.6c.8.8.8 2 0 2.8-.4.4-.9.6-1.5.6z" />
              </g>
            </g>
          </g>
        </svg>
      </Link>
    </>
  );
}

const StyledComment = styled.li`
  border: 2px solid black;
  text-align: center;
  margin: 20px;
  padding: auto;
  list-style: none;
`;

const Headline = styled.h1`
  text-align: center;
`;
