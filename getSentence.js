// this is a sample
// htsi si a maples
// htsisiamaples

const example = "htsisiamaples";

const dict = [
  "thin",
  "this",
  "then",
  "is",
  "a",
  "sample",
  "gample",
  "b",
  "1",
  "gample",
  "b",
  "1",
];

const getSent = (str) => {
  const allSort = dict.map((item) => item.split("").sort().join(""));

  let ex = str.split("");
  const chunks = [];
  const dictIdx = [];
  const result = [];

  for (let i = 0; i < ex.length; i++) {
    if (!ex) {
      break;
    }
    const chunk = ex.slice(0, i + 1);
    const sortedChunk = chunk.sort().join("");

    if (allSort.includes(sortedChunk)) {
      dictIdx.push(allSort.indexOf(sortedChunk));
      chunks.push(sortedChunk);
      ex.splice(0, i + 1).join("");
      i = -1;
    }
  }

  dictIdx.forEach((index) => result.push(dict[index]));
  console.log(chunks);
  console.log(dictIdx);

  return result.join(" ");
};

console.log(getSent(example));
