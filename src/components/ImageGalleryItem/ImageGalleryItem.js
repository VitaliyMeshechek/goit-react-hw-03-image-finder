import { Item, Img } from "./ImageGalleryItem.styled";
import React, { Component } from 'react';
import { Modal } from "components/Modal/Modal";


export class ImageGalleryItem extends Component {
  state = {
    largeImageURL: '',
    showModal: '',
  };

    onToggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };


  onOpenModal = (event) => {
    const largeImageURL = event.target.dataset.source;
    if (largeImageURL) {
      this.setState({ largeImageURL: largeImageURL});
      this.onToggleModal();
    }
  };


  render() {
    const {showModal} = this.state;
    const {src, alt, largeImageURL} = this.props;
    return (
      <>
      <Item onClick={this.onOpenModal}>
        <Img src={largeImageURL} alt={alt} data-source={largeImageURL} />
        </Item>

      {showModal && (<Modal onToggleModal={this.onToggleModal} >
        <Img src={src} alt={alt} data-source={largeImageURL} onClick={this.onOpenModal}/>
        </Modal>)}

        </>
    )
  }
}
