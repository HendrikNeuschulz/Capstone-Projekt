import styled from "styled-components";

export default function CommentForm({ onAddComment, recipeId }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { comment } = Object.fromEntries(formData);
    const formattedComment = comment.trim();
    if (formattedComment === "") {
      return alert("Please add a comment.");
    }
    onAddComment(recipeId, comment);
    event.target.reset();
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="comment">Comment: </label>
        <textarea
          type="text"
          name="comment"
          placeholder="give us your opinion"
          rows={10}
          cols={40}
          maxLength={100}
          minLength={3}
        ></textarea>
        <StyledButton
          type="submit"
          variant="submit"
          aria-label="submit comment"
        >
          <StyledCheckIcon
            id="Layer_1"
            enable-background="new 0 0 512.001 512.001"
            height="40"
            viewBox="0 0 512.001 512.001"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
            fill="#3cb371"
          >
            <g>
              <path d="m437.02 74.981c-48.352-48.352-112.639-74.981-181.019-74.981-68.381 0-132.669 26.629-181.021 74.981s-74.98 112.64-74.98 181.019c0 68.38 26.629 132.667 74.98 181.02s112.638 74.98 181.017 74.98c68.382 0 132.67-26.628 181.022-74.98 48.353-48.352 74.981-112.64 74.981-181.02.001-68.379-26.628-132.666-74.98-181.019zm-181.023 407.019c-124.615 0-225.997-101.383-225.997-226s101.384-226 226.001-226 226 101.383 226 226-101.385 226-226.004 226z" />
              <path d="m358.246 140.701c-12.592 0-24.428 4.904-33.324 13.807l-103.003 103.002-34.839-34.839c-8.902-8.902-20.738-13.805-33.327-13.805s-24.425 4.903-33.327 13.805c-18.378 18.377-18.378 48.281 0 66.658l68.164 68.164c8.901 8.902 20.737 13.804 33.326 13.805h.001c12.593 0 24.43-4.905 33.327-13.808l136.332-136.329c18.377-18.376 18.377-48.278 0-66.654-8.903-8.903-20.74-13.806-33.33-13.806zm12.117 59.247-136.335 136.332c-3.234 3.236-7.536 5.018-12.111 5.018-4.576 0-8.879-1.782-12.114-5.018l-68.164-68.164c-6.681-6.681-6.681-17.551 0-24.232 3.236-3.236 7.538-5.018 12.114-5.018s8.878 1.782 12.114 5.018l45.445 45.445c2.813 2.813 6.628 4.394 10.606 4.394s7.794-1.581 10.606-4.394l113.613-113.613c3.232-3.234 7.532-5.016 12.107-5.016 4.577 0 8.88 1.783 12.117 5.02 6.682 6.68 6.682 17.549.002 24.228z" />
            </g>
          </StyledCheckIcon>
        </StyledButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  text-align: center;
`;

const StyledButton = styled.button`
  border: none;
  background-color: #e8e1d1;
`;

const StyledCheckIcon = styled.svg`
  color: #3cb371;

  color: #3cb371;
  &:active {
    fill: hotpink;
    transform: scale(0.7);
    color: #3cb371;
  }
`;
