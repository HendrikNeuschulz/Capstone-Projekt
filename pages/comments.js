import CommentRecipe from "../components/CommentForm";

export default function Comment({ onSetComment }) {
  function addComment(name, comment) {
    const newComment = { name, comment };
    onSetComment((comment) => [newComment, ...comment]);
  }
  return (
    <>
      <h1>Comment your Recipes</h1>
      <CommentRecipe addComment={addComment} />
    </>
  );
}
