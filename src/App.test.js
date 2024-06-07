import { renderHook, act } from "@testing-library/react";
import useConverter from "./utils/useConverter";

describe("useConverter Hook", () => {
  test("converts celcius to fahrenheit correctly", () => {
    const { result } = renderHook(() => useConverter(100, "celcius"));

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(212);
  });

  test("converts fahrenheit to celcius correctly", () => {
    const { result } = renderHook(() => useConverter(212, "fahrenheit"));

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBeCloseTo(100);
  });
});
