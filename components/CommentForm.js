import Link from "next/link";
import User from "../userdata.json";

export default function CommentRecipe({ addComment, User, comment }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { comment } = Object.fromEntries(formData);
    addComment(comment);
    event.target.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Comment: </label>
        <input
          type="text"
          name="comment"
          placeholder="give us your opinion"
        ></input>
        <button type="submit" variant="submit">
          Do it
        </button>
      </form>

      <Link href={"/mealcenter"}>
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
