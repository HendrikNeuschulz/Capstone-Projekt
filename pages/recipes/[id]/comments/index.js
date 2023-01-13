import Link from "next/link";
import styled from "styled-components";
import CommentForm from "../../../../components/CommentForm";
import { useRouter } from "next/router";
import users from "../../../../userdata.json";
import Image from "next/image";

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
      <title>what do u think?</title>
      <main>
        <Headline>Comment your Recipes</Headline>
        {recipeComments.length === 0 && <p>Nothing here ¯\_(ツ)_/¯..</p>}
        <CommentsList>
          {recipeComments &&
            recipeComments.map((comment) => {
              const userData = findUserData(comment);
              return (
                <>
                  <StyledComment key={comment.id}>
                    <StyledCommentName>
                      <Image
                        src={userData.image}
                        width={25}
                        height={25}
                        alt={userData.name}
                      />
                      {userData.name}
                    </StyledCommentName>
                    <StyledCommentText>{comment.text}</StyledCommentText>
                  </StyledComment>
                </>
              );
            })}
        </CommentsList>
        <CommentForm onAddComment={onAddComment} recipeId={id} />
        <StyledCommentBackLink href={`/recipes/${id}`}>
          <svg
            id="Layer_1"
            enableBackground="new 0 0 64 64"
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
        </StyledCommentBackLink>
      </main>
    </>
  );
}

const Headline = styled.h1`
  text-align: center;
`;

const CommentsList = styled.ul`
  padding: 0;
`;

const StyledComment = styled.li`
  list-style: none;
  margin-bottom: 16px;
  border: 2px solid black;
  border-radius: 20px;
  text-align: center;
  padding: 0 5px;
`;

const StyledCommentName = styled.h2`
  font-family: oswald;
  font-size: 15px;
  text-align: start;
`;

const StyledCommentText = styled.p`
  font-weight: bold;
  font-family: oswald;
`;

const StyledCommentBackLink = styled(Link)`
  position: fixed;
  bottom: 9px;
  left: 15px;
`;
