import { MAX_PARTITION_KEY_LENGTH } from "./constants";
import { deterministicPartitionKey } from "./dpk";
import {
  mockedPartitionMaxSize,
  mockedPartitionNumber,
  mockedPartitionObject,
} from "./fixtures";
import * as utils from "./utils";

describe("deterministicPartitionKey", () => {
  const normalizeDataSpy = jest.spyOn(utils, "normalizeData");
  const createHashSpy = jest.spyOn(utils, "createHash");

  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Throws an error if Partition key reached maximum size", () => {
    expect(() => deterministicPartitionKey(mockedPartitionMaxSize)).toThrow(
      `Partition key reached maximum size of ${MAX_PARTITION_KEY_LENGTH}`
    );
  });

  it("Returns a deterministic Partition Key", () => {
    let partitionKey = deterministicPartitionKey(mockedPartitionNumber);

    expect(normalizeDataSpy).toHaveBeenCalled();
    expect(createHashSpy).toHaveBeenCalled();

    expect(typeof partitionKey).toBe("string");
    expect(partitionKey).toBe(
      "36dde7d288a2166a651d51ec6ded9e70e72cf6b366293d6f513c75393c57d6f33b949879b9d5e7f7c21cd8c02ede75e74fc54ea15bd043b4df008533fc68ae69"
    );

    partitionKey = deterministicPartitionKey(mockedPartitionObject);

    expect(typeof partitionKey).toBe("string");
    expect(partitionKey).toBe(
      "4ffbf46f02008fa8120a30f443077338cf2bfd66a72ca3e19e4c9ee0f8a201f179aa0e9819fc91a5bcdf488b7a1c32727e5c57329b823076f6944ea27afb9e47"
    );
  });
});
