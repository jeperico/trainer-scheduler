import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

const modify = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Method not allowed", status: 405 });
  }

  const body = req.body;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:D1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.name, body.email, body.phone, body.message]],
      },
    });

    return res.status(200).json({
      data: response.data,
      status: 200,
    });
  } catch (e) {
    console.error(e);
    const errorMessage =
      e instanceof Error ? e.message : "Internal server error";
    return res.status(500).send({ message: errorMessage, status: 500 });
  }
};

export default modify;
