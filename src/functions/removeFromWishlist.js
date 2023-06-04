import { toast } from "react-toastify";

export const removeFromWishlist = (id) => {
  if (window.confirm("Are you sure you want to remove this coin")) {
    let items = localStorage.getItem("wishCoinsList");
    let arr = JSON.parse(items);
    localStorage.setItem(
      "wishCoinsList",
      JSON.stringify(arr.filter((item) => item !== id))
    );
    toast.success(
      `${
        id.slice(0, 1).toUpperCase() + id.slice(1)
      } removed from the wishCoinsList!`
    );
  } else {
    toast.error("Couldnt remove the coin from the wishlist!");
  }
};