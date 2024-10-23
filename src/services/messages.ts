import axios from "axios";

const baseURL = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user";

export const fetchMessages = async (token: string) => {
  const response = await axios.get(`${baseURL}/messages`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const fetchUnreadMessageCount = async (token: string) => {
  const response = await axios.get(`${baseURL}/messages/count`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.unread_messages_count;
};

export const markAllMessagesAsRead = async (token: string) => {
  const response = await axios.post(
    `${baseURL}/messages/markAll`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
