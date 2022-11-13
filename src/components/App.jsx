import React, { Component } from "react";
import css from "./App.module.css";

import { fetchImagesApi } from "../services/images-api";

import {Container} from "./Container/Container";
import {Searchbar} from "./Searchbar/Searchbar";
import {ImageGallery} from "./ImageGallery/ImageGallery";
import {Button} from "./Button/Button";
import {Modal} from "./Modal/Modal";
import {Loader} from "./Loader/Loader";

export class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    largeImageURL: "",
    filter: "",
    isLoading: false,
    error: null,
    showModal: false,
    currentPage: 1,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  onChangeQuery = (query) => {
    this.setState({ searchQuery: query, currentPage: 1, images: [] });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    this.setState({ isLoading: true });

    fetchImagesApi(currentPage, searchQuery)
      .then((data) => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data],
          currentPage: prevState.currentPage + 1,
          error: "",
        }))
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  toggleModal = () =>
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));

  handleLargeURLImage = (data) => {
    this.setState({ largeImageURL: data });
    this.setState({ showModal: true });
  };

  render() {
    const { images, showModal, largeImageURL, isLoading } = this.state;
    return (
      <div className={css.App}>
        <Container>
          {showModal && (
            <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} />
          )}
          <Searchbar
            onSubmit={this.onChangeQuery}
            searchQuery={this.searchQuery}
          />
          {images.length > 0 && (
            <ImageGallery
              images={images}
              handleLargeURLImage={this.handleLargeURLImage}
            />
          )}
          {isLoading ? (
            <Loader />
          ) : (
            images.length > 0 && <Button onClick={this.fetchImages} />
          )}
        </Container>
      </div>
    );
  }
}
