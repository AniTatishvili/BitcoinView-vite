export const useMakeBlob = async (url: RequestInfo | URL) => {
  try {
    const response = await fetch(url)
      .then((data) => data)
      .then((res) => res);

    return await response.blob();
  } catch (err) {
    // console.log(err);
    // FIXME: Add here error toast
  }
};
