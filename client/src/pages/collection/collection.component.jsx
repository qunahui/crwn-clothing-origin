import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './collection.styles';
import { Link } from 'react-router-dom';

export const CollectionPage = ({ collection, match }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <Link to={`${match.url}/${item.slug}`} key={item.id}>
            <CollectionItem item={item} />
          </Link>
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  match: ownProps.match,
});

export default connect(mapStateToProps)(CollectionPage);
