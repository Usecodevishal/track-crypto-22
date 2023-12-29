import React, { useState } from "react";
import "./grid.css";
import { IconButton } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { addCheck } from "../../../../functions/addCheck";
import { removeFromWishlist } from "../../../../functions/removeFromWishlist";
import { addToWishlist } from "../../../../functions/addToWishlist";

function Grid({ coin, delay, isWishlistPage }) {
  const [added, setAdded] = useState(addCheck(coin.id));
  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
        className={`grid-container ${
          coin.price_change_percentage_24h < 0 && "grid-container-red"
        }`}
        style={{ display: isWishlistPage && !added && "none" }}
      >
        <div className="grid-info">
<<<<<<< HEAD
          <div className="grid-info-flex">
=======
         <div className="grid-info-flex">
>>>>>>> 4a29ccce899697a6570d9c7baa9e4dc9dd770611
          <img src={coin.image} className="coin-logo" alt="" />
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
<<<<<<< HEAD
         </div>
=======
        </div>
>>>>>>> 4a29ccce899697a6570d9c7baa9e4dc9dd770611
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              if (added) {
                removeFromWishlist(coin.id);
                setAdded(false);
              } else {
                addToWishlist(coin.id);
                setAdded(true);
              }
            }}
          >
            {added ? (
              <StarRoundedIcon
                className={`wishlist-icon ${
                  coin.price_change_percentage_24h < 0 && "wishlist-icon-red"
                }`}
              />
            ) : (
              <StarBorderRoundedIcon
                className={`wishlist-icon ${
                  coin.price_change_percentage_24h < 0 && "wishlist-icon-red"
                }`}
              />
            )}
          </IconButton>
        </div>
        {coin.price_change_percentage_24h > 0 ? (
          <div className="flex-chip">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="trending-icon">
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className="flex-chip">
            <div className="price-chip chip-red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="trending-icon icon-red">
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}
        
          <p
            className="coin-current-price"
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </p>
          <p className="coin-volume">
            Total-Volume :{coin.total_volume.toLocaleString()}
          </p>
          <p className="market-cap">
            Market-Cap :{coin.market_cap.toLocaleString()}
          </p>
        
      </motion.div>
    </Link>
  );
}

export default Grid;
