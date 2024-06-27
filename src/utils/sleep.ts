/**
 * Await for a given amount of time
 */
const sleep = (ms: number) => {
  return new Promise((resolve) => {
    return setTimeout(resolve, ms);
  });
};

export default sleep;
