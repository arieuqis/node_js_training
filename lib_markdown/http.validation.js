import fetch from "node-fetch";

const handleError = (error) => {
    throw new Error(error)
}

const checkStatus = async (links) => {
  try {
    const statusArray = await Promise.all(
      links.map(async (url) => {
        const res = await fetch(url);
        return res.status;
      })
    );

    return statusArray;
  } catch (error) {
    handleError(error);
  }
};

const getUrls = (links) => {
  return links.map(obj => Object.values(obj).join());
};

const validateUrls = async (linksArray) => {
  const links = getUrls(linksArray)
  const statusLinks = await checkStatus(links)
  const results = linksArray.map((obj, index) => ({
    ...obj, 
    status: statusLinks[index]
  }))

  return results
};

export default validateUrls;
