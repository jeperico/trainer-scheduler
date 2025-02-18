import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";

/**
 * Create a google spreadsheet
 * @param {string} title Spreadsheets title
 * @return {string} Created spreadsheets ID
 */

const create = async (title: string) => {
  const auth = new GoogleAuth({
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const service = google.sheets({ version: "v4", auth: auth });
  const resource = {
    properties: {
      title,
    },
  };

  try {
    const spreadsheet = await service.spreadsheets.create({
      requestBody: resource,
      fields: "spreadsheetId",
    });
    console.log(`Spreadsheet ID: ${spreadsheet}`);
    console.log(`Spreadsheet ID: ${spreadsheet.data.spreadsheetId}`);
    return spreadsheet.data.spreadsheetId;
  } catch (err) {
    console.error("Error creating spreadsheet:", err);
    throw err;
  }
};

export default create;
