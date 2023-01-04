import { describe, expect, it } from "vitest";
import { add } from "@vpwtest/tester";

describe("vite-wasm-plugin", () => {
  it("checks if the plugin works with vitest", () => {
    expect(add(1, 3)).toBe(4);
  });
});
