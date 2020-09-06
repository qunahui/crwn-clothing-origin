import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { ShopPageContainer } from './shop.styles.js';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import Spinner from '../../components/spinner/spinner.component';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);
const CollectionPage = lazy(() => import('../collection/collection.component'));

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;
    return (
      <ShopPageContainer>
        <Suspense fallback={<Spinner />}>
          <Route
            component={CollectionsOverviewContainer}
            exact
            path={`${match.path}`}
          />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPage}
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
