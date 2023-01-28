import { Item, Img } from "./ImageGalleryItem.styled";
import React, { Component } from 'react';
import { Modal } from "components/Modal/Modal";


export class ImageGalleryItem extends Component {
  state = {
    largeImageURL: '',
    showModal: '',
  };

  onToggleModal = (Image) => {
    this.setState(prevState => ({
    showModal: !prevState.showModal,
    largeImageURL: '',
  }));
  if (Image) {
    this.setState({ largeImageURL: Image, showModal: true });
  }
  };


  render() {
    const {showModal} = this.state;
    const {src, alt, largeImageURL} = this.props;
    return (
      <>
      <Item>
        <Img src={src} alt={alt} data-source={largeImageURL} />
        </Item>

      {showModal && (<Modal onToggleModal={this.onToggleModal}>
        <Img src={src} alt={alt} data-source={largeImageURL} />
        </Modal>)}
        </>
    )
  }
}
