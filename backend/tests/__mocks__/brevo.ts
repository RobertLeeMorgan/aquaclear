import { jest } from "@jest/globals";

export const setupBrevoMock = async () => {
  await jest.unstable_mockModule("@getbrevo/brevo", () => ({
    TransactionalEmailsApi: class {
      setApiKey(_: string, __: string) {}
      sendTransacEmail(_: any) {
        return Promise.resolve({ response: {}, body: { messageId: "123" } });
      }
    },
    SendSmtpEmail: class {},
    CreateSmtpEmail: class {},
    TransactionalEmailsApiApiKeys: { apiKey: "apiKey" },
  }));
};
