import { toast } from "react-toastify";

export const addToWishlist = (id) => {
  let items = localStorage.getItem("wishCoinsList");
  if (items) {
    let arr = JSON.parse(items);
    if (!arr.includes(id)) {
      arr.push(id);
      localStorage.setItem("wishCoinsList", JSON.stringify(arr));
    }
  } else {
    var arr = JSON.stringify([id]);
    localStorage.setItem("wishCoinsList", arr);
  }
  toast.success(
    `${id.slice(0, 1).toUpperCase() + id.slice(1)} - Added To The Watchlist!`
  );
};