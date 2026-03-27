import { describe, it, expect } from "vitest";
import { cosineSimilarity } from "../src/utils/cosineSimilarity.js";

describe("cosineSimilarity", () => {
  it("returns 1 for identical vectors", () => {
    const a = [1, 2, 3];
    const b = [1, 2, 3];
    expect(cosineSimilarity(a, b)).toBeCloseTo(1);
  });

  it("returns 0 for orthogonal vectors", () => {
    const a = [1, 0];
    const b = [0, 1];
    expect(cosineSimilarity(a, b)).toBeCloseTo(0);
  });

  it("returns -1 for opposite vectors", () => {
    const a = [1, 0];
    const b = [-1, 0];
    expect(cosineSimilarity(a, b)).toBeCloseTo(-1);
  });

  it("returns 0 for zero vectors", () => {
    expect(cosineSimilarity([0, 0], [0, 0])).toBe(0);
  });

  it("returns 0 for arrays of different lengths", () => {
    expect(cosineSimilarity([1, 2], [1, 2, 3])).toBe(0);
  });

  it("returns 0 if any input is null or undefined", () => {
    expect(cosineSimilarity(null as any, [1, 2])).toBe(0);
    expect(cosineSimilarity([1, 2], undefined as any)).toBe(0);
  });

  it("returns 0 if any element is NaN or Infinity", () => {
    expect(cosineSimilarity([1, NaN], [1, 2])).toBe(0);
    expect(cosineSimilarity([1, 2], [1, Infinity])).toBe(0);
  });

  it("handles floating point numbers correctly", () => {
    const a = [0.1, 0.2, 0.3];
    const b = [0.1, 0.2, 0.3];
    expect(cosineSimilarity(a, b)).toBeCloseTo(1);
  });
});