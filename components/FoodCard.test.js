import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FoodCard from "./FoodCard";

describe("Button", () => {
  it("should display delete button und foodcard", () => {
    const expectedPath = "m256 80h-32v-48h-64v48h-32v-80h128zm0 0";

    render(
      <button type="button" variant="submit">
        delete
      </button>
    );
  });
});
