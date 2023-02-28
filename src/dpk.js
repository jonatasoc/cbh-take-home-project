import {
  TRIVIAL_PARTITION_KEY,
  MAX_PARTITION_KEY_LENGTH,
} from "./constants.js";
import { createHash, normalizeData } from "./utils/index.js";

export const deterministicPartitionKey = (event) => {
  let candidate = TRIVIAL_PARTITION_KEY;

  // Always return a trivial partition key if no event is informed
  if (!event) {
    return candidate;
  }

  // Sometimes we can receive the partitionKey as object property, hence handle it here
  candidate = event.partitionKey ?? event;

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    throw new Error(
      `Partition key reached maximum size of ${MAX_PARTITION_KEY_LENGTH}`
    );
  }

  return createHash(normalizeData(candidate));
};
