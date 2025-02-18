import { promises as fs } from "fs";
import path from "path";
import process from "process";
import { OAuth2Client } from "google-auth-library";

const TOKEN_PATH = path.join(process.cwd(), "config/token.json");
const CREDENTIALS_PATH = path.join(process.cwd(), "config/credentials.json");

/**
 * Serializes credentials to a file compatible with GoogleAuth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 * @async
 * @example
 * await saveCredentials(client);
 */

const saveCredentials = async (client: OAuth2Client): Promise<void> => {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content.toString());
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: "authorized_user",
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
};

export default saveCredentials;
