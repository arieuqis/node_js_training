import fs from "fs"

const handleError = (error) => {
  throw new Error("no such file");
};

const extractLinks = (text) => {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const result = []
    let temp

    while((temp = regex.exec(text)) !== null){
        result.push({
            [temp[1]]: temp[2]
        })
    }

    return result.length === 0 ? 'no links were found'  : result
}

const getFileAsyncAwait = async (filePath) => {
  const encoding = "utf-8";
  try {
    const text = await fs.promises.readFile(filePath, encoding);
    return extractLinks(text)
  } catch (error) {
    handleError(error);
  }
};

const getFileAsyncThen = (filePath) => {
  const encoding = "utf-8";
  fs.promises
    .readFile(filePath, encoding)
    .then((data) => console.log(chalk.green(data)))
    .catch((error) => handleError(error));
};

const getFileSync = (filePath) => {
  const encoding = "utf-8";
  fs.readFile(filePath, encoding, (error, data) => {
    if (error) {
      handleError(error);
    }
    console.log(chalk.green(data));
  });
};

export default getFileAsyncAwait
