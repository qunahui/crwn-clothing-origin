import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import withSpinner from '../with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: !((state) => selectIsCollectionLoaded(state)),
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

export default CollectionsOverviewContainer;
