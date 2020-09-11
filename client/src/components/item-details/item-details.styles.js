import styled, { css } from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';
import { ReactComponent as ShoppingIcon } from '../../assets/add-cart-icon.svg';
import { ReactComponent as LeftArrowIcon } from '../../assets/left-arrow.svg';
import { ReactComponent as RightArrowIcon } from '../../assets/right-arrow.svg';

export const ArrowContainerStyles = css`
  position: absolute;
  top: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid black;
  cursor: pointer;
  &:active {
    background: #eee;
  }
`;

export const ArrowIconStyles = css`
  width: 30px;
  height: 30px;
`;

export const ItemOverviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  border: 1px solid #eee;
  border-right: none;
`;

export const ItemContentContainer = styled.div`
  width: 70%;
  border: 1px solid #eee;
`;

export const ImageViewContainer = styled.div`
  border: 1px solid #eee;
  border-bottom: none;
  width: 100%;
  gap: 30px;
`;

export const LeftArrowIconContainer = styled(LeftArrowIcon)`
  ${ArrowIconStyles}
`;

export const RightArrowIconContainer = styled(RightArrowIcon)`
  ${ArrowIconStyles}
`;

export const LeftArrowContainer = styled.div`
  ${ArrowContainerStyles}
  left: 20px;
`;

export const RightArrowContainer = styled.div`
  ${ArrowContainerStyles}
  right: 20px;
`;

export const MainImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 670px;
  background-color: #edeff0;
  width: 100%;
  padding: 40px;
  position: relative;

  & > img {
    width: 423px;
    height: 580px;
  }
`;

export const ImagePreviewContainer = styled.div`
  height: 80px;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  & > span > input[type='radio'] {
    display: none;
    z-index: 100;
    opacity: 0.01;
    &:checked + label {
      border: 1px solid black;
    }
  }
`;

export const getLabelStyles = (props) => {
  switch (props.labelStyle) {
    case 'preview':
      return previewLabel;
    case 'size':
      return sizeLabel;
    case 'nav':
      return navLabel;
    default:
      return;
  }
};

const previewLabel = css`
  display: inline-block;
  width: 40px;
  height: 60px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: 100% 100%;
  cursor: pointer;
  border: 1px solid white;
`;

const sizeLabel = css`
  line-height: 15px;
  font-size: 14px;
  margin: 0 auto 20px auto;
`;

const navLabel = css``;

export const LabelContainer = styled.label`
  ${getLabelStyles}
`;

export const ItemNavContainer = styled.div`
  height: 60px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  background: white;
  z-index: 9999;

  & > a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: fit-content;
    padding: 0 20px;
    cursor: pointer;
    &.active {
      border-bottom: 2px solid black;
    }
  }
`;

export const CommonContentStyles = css`
  width: 70%;
  margin-top: 150px;
  display: flex;
  min-height: 350px;
`;

export const OverviewStyles = css`
  justify-content: center;
  align-self: center;
  flex-direction: row;
  gap: 50px;
`;
export const DetailsStyles = css`
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: column;
`;
export const FinishCollectionStyles = css`
  width: 100%;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: column;
  position: relative;
  padding: 20px;
  & > div {
    width: 100%;
    overflow-x: overlay;
    scroll-behavior: smooth;
    & > div:first-child {
      width: 200%;
    }
    & > div:nth-child(2),
    div:nth-child(3) {
      width: 40px;
      height: 40px;
      background: white;
      opacity: 0.5;
    }
    & > div:nth-child(2) {
      left: 10px;
      transform: translateY(30px);
    }
    & > div:nth-child(3) {
      right: 10px;
      transform: translateY(30px);
    }
  }
`;

export const getContentStyles = (props) => {
  switch (props.contentStyle) {
    case 'overview':
      return OverviewStyles;
    case 'details':
      return DetailsStyles;
    case 'finish-collection':
      return FinishCollectionStyles;
    default:
      return;
  }
};

export const ContentSectionContainer = styled.div`
  ${CommonContentStyles}
  ${getContentStyles}
`;

export const SideBarContainer = styled.div`
  width: 30%;
  padding: 30px 0 30px 50px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  height: 100vh;
`;

export const PreHeaderContainer = styled.div`
  margin-bottom: 30px;
`;

export const ItemDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-size: 50px;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const PriceContainer = styled.div`
  margin: 0 auto 20px auto;
  font-weight: bold;
  font-size: 18px;
`;

export const BuySectionContainer = styled.div`
  margin-top: 0;
`;

export const SizeSelectorContainer = styled.div`
  margin-bottom: 50px;
`;

export const ButtonSizeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  border-left: 1px solid #ebedee;
  & > span > input[type='radio'] {
    display: none;
    z-index: 100;
    opacity: 0.01;

    &:checked + label {
      background: black;
      color: white;
    }
  }

  & > span > label {
    border: 1px solid #ebedee;
    border-left: none;
    height: 40px;
    width: 76px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    line-height: 1em;
    cursor: pointer;
    letter-spacing: -0.2px;
    background: white;
  }
`;

export const AddCartContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const AddCartButton = styled(CustomButton)`
  min-width: 0px;
  width: 60px;
  padding: 0;
  background: white;
  color: black;
  border: 1px solid black;
`;

export const ShoppingIconContainer = styled(ShoppingIcon)`
  height: 30px;
  width: 30px;
  padding: 0;
  margin: 0;
  transform: translateY(8px) translateX(-2px);
`;

export const CheckOutButton = styled(CustomButton)`
  width: 300px;
  color: white;
`;

export const AdditionTextContainer = styled.div`
  margin-top: 30px;
  width: 60%;
`;
