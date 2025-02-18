import { promises as fs } from "fs";
import { google } from "googleapis";
import path from "path";
import { OAuth2Client } from "google-auth-library";

const TOKEN_PATH = path.join(process.cwd(), "config/token.json");

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 * @async
 * @example
 * const credentials = await loadSavedCredentialsIfExist();
 */

const loadSavedCredentialsIfExist = async (): Promise<OAuth2Client | null> => {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content.toString());
    return google.auth.fromJSON(credentials) as OAuth2Client;
  } catch (err) {
    return null;
  }
};

export default loadSavedCredentialsIfExist;
