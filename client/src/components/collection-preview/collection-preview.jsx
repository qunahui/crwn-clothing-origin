import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './collection-preview.styles';

const CollectionPreview = ({
  title,
  items,
  history,
  match,
  routeName,
  limit,
}) => {
  console.log(match + title);
  return (
    <CollectionPreviewContainer>
      <TitleContainer
        onClick={() => history.push(`${match.path}/${routeName.toLowerCase()}`)}
      >
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < limit)
          .map((item) => (
            <Link key={item.id} to={`/shop/${title}/${item.slug}`}>
              <CollectionItem item={item} />
            </Link>
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};
export default withRouter(CollectionPreview);
