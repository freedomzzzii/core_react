const QueryString = (location, query) => {
  const params = new URLSearchParams(location.search);

  return decodeURI(params.get(query));
};

export default QueryString;
