import { Item, Img } from "./ImageGalleryItem.styled";
import React, { Component } from 'react';
import { Modal } from "components/Modal/Modal";


// { src, largeImageURL, alt, onClick }
export class ImageGalleryItem extends Component {
  state = {
    largeImageURL: '',
    showModal: '',
  };

  onOpenModal = event => {
    const largeImageURL = event.target.dataset.source;
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImageURL: '',
    }));
    if (largeImageURL) {
      this.setState({ largeImageURL: largeImageURL, showModal: true });
      console.log(largeImageURL);
    }
  };

  //   handleGalleryItem = fullImageUrl => {
  //   this.setState({
  //     largeImageURL: fullImageUrl,
  //     showModal: true,
  //   });
  //   this.props.onClick(this.state.largeImageURL);
  // };

  // onToggleModal = () => {
  //   this.setState(prevState => ({
  //   showModal: !prevState.showModal,
  //   largeImageURL: '',
  // }));
  // // this.setState({ showModal: !this.state.showModal });
  // };

  // onOpenModal = evt => {
  //   const largeImageURL = evt.target.dataset.source;
  //   if (largeImageURL) {
  //     this.setState({ largeImageURL: largeImageURL, showModal: true });
  //     this.onToggleModal();
  //   }
  // };

  render() {
    const {showModal} = this.state;
    const {src, alt, largeImageURL} = this.props;
    return (
      <>
      <Item>
        <Img src={src} alt={alt} data-source={largeImageURL} />
      </Item>
      {showModal && (<Modal onToggleModal={this.onOpenModal}>
        <img src={this.state.largeImageURL} alt="" />
        </Modal>)}
        </>
    )
  }
}
