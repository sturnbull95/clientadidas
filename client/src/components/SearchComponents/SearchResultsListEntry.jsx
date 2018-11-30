import React from 'react';
import Pluralize from 'Pluralize';
import RatingStar from './StarRating';
import EmptyStarRating from './EmptyStarRating';
import styles from '../../css/Search.css';

const SearchResultsListEntry = (props) => (
  <li>
    <div className={styles.productInformation}>
      <span className={styles.productSubtitle}>
        {props.searchResult.gender + "'s " + Pluralize(props.searchResult.category)}
      </span>
      <span className={styles.productName}> {props.searchResult.name} </span>
      {props.searchResult.saleprice !== null &&
        <div className={styles.priceContainer}>
          <span className={styles.saleprice}>${props.searchResult.price + " "}</span>
          <span className={styles.glPriceCrossed}>${props.searchResult.saleprice}</span>
        </div>
      }
      {props.searchResult.saleprice === null &&
        <div className={styles.priceContainer}>
          <span className={styles.glPrice}>${props.searchResult.price}</span>
        </div>
      }
      <div className={styles.ratingsSummary}>
        <span className={styles.starRating}>
          {
            [...Array(5)].map((e, i) => {
              if (i <= props.searchResult.rating) {
                return <RatingStar key={i} />
              } else {
                return <EmptyStarRating key={i} />
              }
            })
          }
        </span>
        <span className={styles.numReviews}>{" " + props.searchResult.num_ratings}</span>
      </div>
    </div>
    <img src={props.searchResult.imageurl}></img>
  </li>
)

module.exports = SearchResultsListEntry;
