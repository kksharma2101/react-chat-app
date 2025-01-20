import { StreamChat } from "stream-chat";

export async function Get() {
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  // create token
  const token = serverClient.createToken(user_id);
}
