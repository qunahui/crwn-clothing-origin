import React from 'react';
import { Link, scroller } from 'react-scroll';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { addItem } from '../../redux/cart/cart.actions.js';
import CollectionPreview from '../collection-preview/collection-preview';
import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  ItemOverviewContainer,
  MainImageContainer,
  ImagePreviewContainer,
  SideBarContainer,
  ItemDescriptionContainer,
  PreHeaderContainer,
  Heading,
  PriceContainer,
  BuySectionContainer,
  SizeSelectorContainer,
  ButtonSizeContainer,
  AddCartContainer,
  AddCartButton,
  CheckOutButton,
  ShoppingIconContainer,
  AdditionTextContainer,
  ImageViewContainer,
  LeftArrowContainer,
  RightArrowContainer,
  LeftArrowIconContainer,
  RightArrowIconContainer,
  ItemNavContainer,
  ItemContentContainer,
  LabelContainer,
  ContentSectionContainer,
} from './item-details.styles';

class ItemDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      sizeButtons: [
        { name: 'S', value: '1' },
        { name: 'M', value: '2' },
        { name: 'L', value: '3' },
        { name: 'XL', value: '4' },
        { name: 'XXL', value: '5' },
      ],
      previewButtons: [
        { name: 'preview_1', value: '1' },
        { name: 'preview_2', value: '2' },
        { name: 'preview_3', value: '3' },
      ],
      navTabs: [
        { name: 'COLLECTION', value: '1', scrollTarget: 'collection' },
        { name: 'OVERVIEW', value: '2', scrollTarget: 'overview' },
        { name: 'DETAILS', value: '3', scrollTarget: 'details' },
        {
          name: 'FINISH YOUR COLLECTION',
          value: '4',
          scrollTarget: 'finish-your-collection',
        },
      ],
      activeSizeValue: '1',
      activePreviewValue: '1',
      activeNavValue: '1',
    };

    this.scrollRef = React.createRef();
  }

  addCart = (e) => {
    e.preventDefault();
    const { addItem, item } = this.props;
    addItem(item);
  };

  switchPreviewRight = (e) => {
    e.preventDefault();
    const { activePreviewValue } = this.state;
    if (parseInt(activePreviewValue) <= 2) {
      this.setState({
        activePreviewValue: (parseInt(activePreviewValue) + 1).toString(),
      });
    }
    if (parseInt(activePreviewValue) === 3) {
      this.setState({
        activePreviewValue: '1',
      });
    }
  };

  switchPreviewLeft = (e) => {
    e.preventDefault();
    const { activePreviewValue } = this.state;
    if (parseInt(activePreviewValue) >= 1) {
      this.setState({
        activePreviewValue: (parseInt(activePreviewValue) - 1).toString(),
      });
    }
    if (parseInt(activePreviewValue) === 1) {
      this.setState({
        activePreviewValue: '3',
      });
    }
  };

  handleNavChange = (e) => {
    const target = e.target.getAttribute('scrolltarget');
    scroller.scrollTo(target, {
      duration: 500,
      smooth: true,
    });
    this.setState({ activeNavValue: e.target.value });
  };

  render() {
    const title = this.props.title;
    const { id, imageUrl, name, price } = this.props.item;
    return (
      <ItemOverviewContainer>
        <ItemContentContainer>
          <ImageViewContainer id="collection">
            <MainImageContainer>
              <LeftArrowContainer onClick={this.switchPreviewLeft}>
                <LeftArrowIconContainer />
              </LeftArrowContainer>
              <img src={imageUrl} alt={title + '_' + id} />
              <RightArrowContainer onClick={this.switchPreviewRight}>
                <RightArrowIconContainer />
              </RightArrowContainer>
            </MainImageContainer>
            <ImagePreviewContainer>
              {this.state.previewButtons.map((button, idx) => (
                <span key={idx}>
                  <input
                    id={`previewButton_${idx}`}
                    type="radio"
                    name={button.name}
                    value={button.value}
                    checked={this.state.activePreviewValue === button.value}
                    onChange={(e) => {
                      this.setState({ activePreviewValue: e.target.value });
                    }}
                  />
                  <LabelContainer
                    htmlFor={`previewButton_${idx}`}
                    value={button.value}
                    imageUrl={imageUrl}
                    labelStyle="preview"
                  />
                </span>
              ))}
            </ImagePreviewContainer>
          </ImageViewContainer>
          <ItemNavContainer>
            {this.state.navTabs.map((button, idx) => (
              <Link
                activeClass="active"
                to={button.scrollTarget}
                duration={500}
                spy={true}
                smooth={true}
                key={idx}
                offset={-200}
              >
                {button.name}
              </Link>
            ))}
          </ItemNavContainer>
          <ItemDescriptionContainer>
            <ContentSectionContainer id="overview" contentStyle="overview">
              <div>
                <h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit !
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Et tortor at risus viverra. Varius morbi enim nunc faucibus a
                  pellentesque sit amet. Nec ultrices dui sapien eget mi proin
                  sed libero enim. Viverra ipsum nunc aliquet bibendum enim
                  facilisis gravida neque. Urna condimentum mattis pellentesque
                  id nibh tortor. Suspendisse potenti nullam ac tortor vitae.
                  Lorem dolor sed viverra ipsum nunc aliquet bibendum enim
                  facilisis. Quam vulputate dignissim suspendisse in est ante in
                  nibh mauris. Feugiat pretium nibh ipsum consequat nisl vel
                  pretium lectus. Nullam vehicula ipsum a arcu. In nisl nisi
                  scelerisque eu ultrices vitae auctor. Egestas integer eget
                  aliquet nibh praesent tristique. Curabitur gravida arcu ac
                  tortor dignissim. Sit amet mattis vulputate enim nulla aliquet
                  porttitor lacus luctus. Pharetra pharetra massa massa
                  ultricies. Tellus pellentesque eu tincidunt tortor aliquam
                  nulla facilisi cras fermentum. Venenatis lectus magna
                  fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
              <div>
                <img src={imageUrl} alt={`overview content, ${title}`} />
              </div>
            </ContentSectionContainer>
            <ContentSectionContainer id="details" contentStyle="details">
              <h1>DETAILS </h1>
              <ul>
                <li>spec 1: this is details about 1</li>
                <li>spec 2: this is details about 2</li>
                <li>spec 3: this is details about 3</li>
                <li>spec 4: this is details about 4</li>
                <li>spec 5: this is details about 5</li>
                <li>spec 6: this is details about 6</li>
                <li>spec 7: this is details about 7</li>
              </ul>
            </ContentSectionContainer>
            <ContentSectionContainer
              id="finish-your-collection"
              contentStyle="finish-collection"
            >
              <h1>FINISH YOUR COLLECTION</h1>
              <div ref={this.scrollRef}>
                <CollectionPreview {...this.props.collection} limit={7} />
                <LeftArrowContainer
                  onClick={() => {
                    console.log(this.scrollRef);
                    this.scrollRef.current.scrollLeft -= 200;
                  }}
                >
                  <LeftArrowIconContainer />
                </LeftArrowContainer>
                <RightArrowContainer
                  onClick={() => {
                    console.log(this.scrollRef);
                    this.scrollRef.current.scrollLeft += 200;
                  }}
                >
                  <RightArrowIconContainer />
                </RightArrowContainer>
              </div>
            </ContentSectionContainer>
          </ItemDescriptionContainer>
        </ItemContentContainer>
        <SideBarContainer>
          <div>
            <PreHeaderContainer>ORIGINALS</PreHeaderContainer>
            <Heading>{name.toUpperCase()}</Heading>
            <LabelContainer labelStyle="size">
              CORE BLACK / NIGHT METALLIC / CLOUD WHITE
            </LabelContainer>
            <PriceContainer>${price}</PriceContainer>
          </div>
          <BuySectionContainer>
            <SizeSelectorContainer>
              <h2>Pick a size</h2>
              <ButtonSizeContainer>
                {this.state.sizeButtons.map((button, idx) => (
                  <span key={idx}>
                    <input
                      id={`sizeButton_${idx}`}
                      type="radio"
                      name={button.name}
                      value={button.value}
                      checked={this.state.activeSizeValue === button.value}
                      onChange={(e) => {
                        this.setState({ activeSizeValue: e.target.value });
                      }}
                    />
                    <label htmlFor={`sizeButton_${idx}`} value={button.value}>
                      {button.name}
                    </label>
                  </span>
                ))}
              </ButtonSizeContainer>
            </SizeSelectorContainer>
            <AddCartContainer>
              <AddCartButton onClick={this.addCart}>
                <ShoppingIconContainer />
              </AddCartButton>
              <CheckOutButton
                onClick={() => this.props.history.push('/checkout')}
              >
                Check out now
              </CheckOutButton>
            </AddCartContainer>
            <AdditionTextContainer>
              LEARN MORE:
              <br /> <br />
              - OUR'S SNEAKER FEST IS NOW ON! <br />- NOT THE RIGHT SIZE OR
              COLOUR? VISIT OUR RETURNS PAGE FOR DETAILS.
            </AdditionTextContainer>
          </BuySectionContainer>
        </SideBarContainer>
      </ItemOverviewContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.title)(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ItemDetails);
