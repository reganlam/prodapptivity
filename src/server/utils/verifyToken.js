import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client();

async function verifyToken(idToken) {
  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_OAUTH_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    return payload;
  } catch (error) {
    console.error("JWT verification failed:", error.message);

    return null;
  }
}

export default verifyToken;
