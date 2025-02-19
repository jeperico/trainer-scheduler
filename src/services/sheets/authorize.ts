import path from "path";
import process from "process";
import { authenticate } from "@google-cloud/local-auth";
import { OAuth2Client } from "google-auth-library";

import loadSavedCredentialsIfExist from "./loadSavedCredentialsIfExist";
import saveCredentials from "./saveCredentials";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
const CREDENTIALS_PATH = path.resolve("config/credentials.json");

/**
 * @description Load or request or authorization to call APIs.
 * @module services/sheets/authorize
 *
 * @return {Promise<OAuth2Client>}
 * @async
 * @example
 * const client = await authorize();
 */
const authorize = async (): Promise<OAuth2Client> => {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
};

export default authorize;
