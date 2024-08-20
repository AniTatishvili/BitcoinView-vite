import axios from "axios";

export const signupMonday = async (data: { username: string; password: string; email: string; phone_number: string }) => {
  return (
    await axios.post(
      `eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM5OTY2MDU2OCwiYWFpIjoxMSwidWlkIjo2NDEzMTU2MCwiaWFkIjoiMjAyNC0wOC0yMFQxODoyMzoyMC43MjNaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjQ2NjI0NTksInJnbiI6ImV1YzEifQ.NVdrNv6M9J3mNAOx2yyjn6e2P9FB1QsvUMgKj4Ll-zI`,
      data
    )
  ).data;
};
