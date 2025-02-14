import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RedirectIfNotLoggedIn from "./RedirectIfNotLoggedIn";
import { useUserInfo } from "@/Hooks/useUserInfo";
import { useCustomSearchParams } from "@/Hooks/useCustomSearchParams";
import { MemoryRouter } from "react-router";
import { Navigate } from "react-router";

jest.mock("@/Hooks/useUserInfo");
jest.mock("@/Hooks/useCustomSearchParams");

const mockUseUserInfo = useUserInfo as jest.Mock;
const mockUseCustomSearchParams = useCustomSearchParams as jest.Mock;

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  Navigate: jest.fn(() => null), // Mock Navigate for assertions
}));

const TestComponent = () => {
  return (
    <MemoryRouter>
      <RedirectIfNotLoggedIn>
        <div>Child Content</div>
      </RedirectIfNotLoggedIn>
    </MemoryRouter>
  );
};

test("redirects to correct route if user is not logged in", () => {
  mockUseUserInfo.mockReturnValue({ userInfo: null, loading: false });
  mockUseCustomSearchParams.mockReturnValue({
    getParam: jest.fn(() => "mockAppId"),
    paramsString: "param1=value1&param2=value2",
  });

  render(<TestComponent />);

  // Assert that Navigate was called with the correct route
  expect(Navigate).toHaveBeenCalledWith(
    { to: "/mockAppId?param1=value1&param2=value2" },
    {}
  );
});

test("redirects to home page if user is not logged in and no appId is found", () => {
  mockUseUserInfo.mockReturnValue({ userInfo: null, loading: false });
  mockUseCustomSearchParams.mockReturnValue({
    getParam: jest.fn(() => null),
    paramsString: "param1=value1&param2=value2",
  });

  render(<TestComponent />);

  // Assert that Navigate was called with the correct route
  expect(Navigate).toHaveBeenCalledWith(
    { to: "/?param1=value1&param2=value2" },
    {}
  );
});

test("renders children if user is logged in", () => {
  mockUseUserInfo.mockReturnValue({ userInfo: { id: "123" }, loading: false });
  mockUseCustomSearchParams.mockReturnValue({
    getParam: jest.fn(() => null),
    paramsString: "",
  });

  render(<TestComponent />);

  // Assert that children are rendered
  expect(screen.getByText("Child Content")).toBeInTheDocument();
});

test("renders children while loading", () => {
  mockUseUserInfo.mockReturnValue({ userInfo: null, loading: true });
  mockUseCustomSearchParams.mockReturnValue({
    getParam: jest.fn(() => null),
    paramsString: "",
  });

  render(<TestComponent />);

  // Assert that children are rendered
  expect(screen.getByText("Child Content")).toBeInTheDocument();
});
