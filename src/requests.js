const getPuzzleRequestsData = async WordCount => {
  let response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${WordCount}`);
  if (response.status === 200) {
    let data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to fetch data");
  }
};

export { getPuzzleRequestsData as default };
