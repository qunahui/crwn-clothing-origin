import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { ShopPageContainer } from './shop.styles.js';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component.jsx';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);
const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);
const ItemPageContainer = lazy(() => import('../itempage/itempage.container'));

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    return (
      <ShopPageContainer>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/shop" component={CollectionsOverviewContainer} />
          <Route
            exact
            path="/shop/:collectionId"
            component={CollectionPageContainer}
          />
          <Route
            exact
            path="/shop/:collectionId/:itemSlug"
            component={ItemPageContainer}
          />
        </Suspense>
      </ShopPageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
