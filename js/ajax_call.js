const ajaxCall = (query, entity, updateState) => {
	$.ajax({
    url: `https://itunes.apple.com/search?term=${query}&entity=${entity}`,
    success: res => {
      updateState(JSON.parse(res).results, `${entity}s`);
    }
  });
};

export default ajaxCall;
