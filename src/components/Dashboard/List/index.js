import React, { useState } from "react";
import "./styles.css";
import { motion } from "framer-motion";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { IconButton, Tooltip } from "@mui/material";
import { convertNumber } from "../../../functions/ConvertNumbers";
import { Link } from "react-router-dom";
import { addCheck } from "../../../functions/addCheck";
import { removeFromWishlist } from "../../../functions/removeFromWishlist";
import { addToWishlist } from "../../../functions/addToWishlist";
function List({ coin, delay, isWishlistPage }) {
  const [added, setAdded] = useState(addCheck(coin.id))
  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.tr 
      className="list-info"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: delay }}

      style={{display : isWishlistPage && !added && "none"}}
      >

        <Tooltip title="coin logo" placement="bottom-start">
          <td>
            <img src={coin.image} className="coin-logo" alt="" />
          </td>
        </Tooltip>
        <Tooltip title="coin symbol and name" placement="bottom-start">
          <td>
            <div className="name-col">
              <p className="coin-symbol">{coin.symbol}</p>
              <p className="coin-name">{coin.name}</p>
            </div>
          </td>
        </Tooltip>
        {coin.price_change_percentage_24h > 0 ? (
          <Tooltip title="price update in 1Hrs" placement="bottom-start">
            <td className="flex-chip ">
              <div className="price-chip left-align-td">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="trending-icon">
                <TrendingUpRoundedIcon />
              </div>
            </td>
          </Tooltip>
        ) : (
          <Tooltip title="price update in 1Hrs" placement="bottom-start">
            <td className="flex-chip">
              <div className="price-chip chip-red left-align-td">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="trending-icon icon-red">
                <TrendingDownRoundedIcon />
              </div>
            </td>
          </Tooltip>
        )}
        <Tooltip title="Current Price" placement="bottom">
          <td>
            <h3
              className="coin-current-price center-align-td"
              style={{
                color:
                  coin.price_change_percentage_24h < 0
                    ? "var(--red)"
                    : "var(--green)",
              }}
            >
              ${coin.current_price.toLocaleString()}
            </h3>
          </td>
        </Tooltip>
        <Tooltip title="coin volume" placement="bottom">
          <td>
            <p className="coin-volume right-align-td">
              {coin.total_volume.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom">
          <td className="desktop-td-mkt">
            <p className="market-cap right-align-td">
              {coin.market_cap.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom">
          <td className="mobile-td-mkt">
            <p className="market-cap right-align-td">
              {convertNumber(coin.market_cap)}
            </p>
            </td>
            </Tooltip>
            <Tooltip title="check added symbol" placement="bottom">
            <td style={{ width: "fit-content" }}>
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
          </td>
        </Tooltip>
      </motion.tr>
    </Link>
  );
}

export default List;
