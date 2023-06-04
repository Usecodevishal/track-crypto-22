export const addCheck = (id) => {
    const watchlist = localStorage.getItem("wishCoinsList");
    if (watchlist) {
      let arr = JSON.parse(watchlist);
      if (arr.includes(id)) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };