import styled from "styled-components";
import CommentRecipe from "../components/CommentForm";
import user from "../userdata.json";

export default function Comment({ onAddComment, comment }) {
  function addComment(comment) {
    const oneName = user[0];
    const newComment = { ...oneName, comment: comment };
    onAddComment(newComment);
  }
  return (
    <>
      <h1>Comment your Recipes</h1>
      <CommentRecipe addComment={addComment} />

      {comment.map((singleComment) => {
        return (
          <Comments>
            {singleComment.name} <br />
            {singleComment.comment}
            {singleComment.commenttwo}
          </Comments>
        );
      })}
    </>
  );
}

const Comments = styled.p`
  border: 2px solid black;
  text-align: center;
  margin: 20px;
  padding: auto;
`;
