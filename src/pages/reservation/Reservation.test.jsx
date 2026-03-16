
import { render, screen } from "@testing-library/react";
import { describe, beforeEach, test, expect } from "vitest";

import { MemoryRouter } from "react-router-dom";
import Reservation from "@pages/reservation/Reservation";
import bookingFormEnum from "@utils/bookingFormEnum";

describe("React component Reservation page", () => {
  // React component Reservation page test set.

  beforeEach(() => {
    // Render the Reservation page
    render(
      <>
        <MemoryRouter>
          <Reservation selectedForm={bookingFormEnum.ORIGINAL} />
        </MemoryRouter>
      </>,
    );
  });

  // TEST - REACT COMPONENT - RESERVATION PAGE: TITLE
  test("React component Reservation page: title", () => {

    const run = () => {
      const paragraph = screen.getByTestId("reservation-page-title");
      return paragraph;
    };

    expect(run()).toHaveTextContent("Reserve a table");
  });
});
