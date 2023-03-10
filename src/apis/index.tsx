export const BASE_URL = "http://localhost:4011";

export default {
  widget: {
    upload: `${BASE_URL}/widget`,
    // update: (id: string) => `${BASE_URL}/${id}`,
  },
  response: {
    upload: `${BASE_URL}/userRequest`,
  },
  responseEdit: {
    upload: `${BASE_URL}/userRequest/e08adc83-a5cc-4a6a-a84f-01b522af9935`,
  }
};