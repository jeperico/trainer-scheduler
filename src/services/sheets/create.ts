import { google } from "googleapis";
import authorize from "./authorize";

/**
 * Create a google spreadsheet
 * @param {string} title Spreadsheets title
 * @return {Promise<string>} Created spreadsheets ID
 * @async
 */

const create = async (title: string): Promise<string> => {
  const auth = await authorize();
  const service = google.sheets({ version: "v4", auth });

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
    console.log(`Spreadsheet ID: ${spreadsheet.data.spreadsheetId}`);
    return spreadsheet.data.spreadsheetId!;
  } catch (err) {
    // TODO (developer) - Handle exception
    throw err;
  }
};

create("MIGUIELS").catch(console.error);

export default create;
