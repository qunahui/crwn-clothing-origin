import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
);

export const selectItem = (collectionId, itemSlugToFind) =>
  createSelector([selectCollection(collectionId)], (collection) =>
    collection.items.find((item) => item.slug === itemSlugToFind)
  );

export const selectIsCollectionsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
