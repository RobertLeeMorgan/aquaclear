import { jest } from "@jest/globals";

export const setupServiceMocks = async () => {
  // --- Mock openaiService ---
  await jest.unstable_mockModule("../../src/services/openaiService.js", () => ({
    getChatReply: jest.fn(() => Promise.resolve("AI reply")),
  }));

  // --- Mock utils/recentMessages ---
  await jest.unstable_mockModule("../../src/utils/recentMessages.js", () => ({
    default: jest.fn(() => Promise.resolve([])),
  }));

  // --- Mock utils/cookie ---
  await jest.unstable_mockModule("../../src/utils/cookie.js", () => ({
    default: jest.fn(() => Promise.resolve("user123")),
  }));

  // --- Mock utils/vagueMessage ---
  await jest.unstable_mockModule("../../src/utils/vagueMessage.js", () => ({
  default: jest.fn((message: string) => {
    if (message === "vague msg") return true;
    return false;
  }),
}));

  // --- Mock utils/sectionFilter ---
  await jest.unstable_mockModule("../../src/utils/sectionFilter.js", () => ({
  default: jest.fn((message: string) => {
    if (message === "normal message") return ["filter1", "filter2"];
    return [];
  }),
}));
};
