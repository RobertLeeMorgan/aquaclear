// __mocks__/index.js
export const setupMocks = async (opts: { mockHandleChatbot?: boolean } = {}) => {
  const { mockHandleChatbot = true } = opts;

  const { setupOpenAIMock } = await import("./openai.js");
  const { setupSupabaseMock } = await import("./supabase.js");
  const { setupBrevoMock } = await import("./brevo.js");
  const { setupChatbotRouterMock } = await import("./chatbotRouter.js");
  const { setupServiceMocks } = await import("./services.js");
  const { setupHandleChatbotMock } = await import("./chatbotController.js");

  await Promise.all([
    setupOpenAIMock(),
    setupSupabaseMock(),
    setupBrevoMock(),
    setupChatbotRouterMock(),
    setupServiceMocks(),
    mockHandleChatbot ? setupHandleChatbotMock() : Promise.resolve(),
  ]);
};
