import crypto from "crypto";

export function createHash(data) {
  return crypto.createHash("sha3-512").update(data).digest("hex");
}

export function normalizeData(data) {
  if (typeof data === "string") {
    return data;
  }

  return JSON.stringify(data);
}
