import { Dispatch, bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { sortActions } from "../../store/sort.store"
import { useActions } from "../actions";

jest.mock("react-redux");
jest.mock("@reduxjs/toolkit");

describe("useActions", () => {
  const mockDispatch: jest.MockedFunction<Dispatch> = jest.fn();
  const mockBindActionCreators: jest.MockedFunction<typeof bindActionCreators> = jest.fn();

  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (bindActionCreators as jest.Mock).mockReturnValue(mockBindActionCreators);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should call useDispatch", () => {
    useActions();

    expect(useDispatch).toHaveBeenCalled();
  });

  test("should call bindActionCreators with sortActions and dispatch", () => {
    useActions();

    expect(bindActionCreators).toHaveBeenCalledWith(sortActions, mockDispatch);
  });

  test("should return the result of bindActionCreators", () => {
    const result = useActions();

    expect(result).toBe(mockBindActionCreators);
  });
});