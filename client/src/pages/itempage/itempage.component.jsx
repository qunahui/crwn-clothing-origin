import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ItemDetails from '../../components/item-details/item-details.component';

import { selectItem } from '../../redux/shop/shop.selectors';

import { ItemContainer } from './itempage.styles';

const ItemPage = ({ match, item }) => {
  console.log('Item loading....');
  return (
    <ItemContainer>
      <ItemDetails item={item} title={match.params.collectionId} />
    </ItemContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { collectionId, itemSlug } = ownProps.match.params;
  return {
    item: selectItem(collectionId, itemSlug)(state),
  };
};

export default compose(connect(mapStateToProps), withRouter)(ItemPage);
