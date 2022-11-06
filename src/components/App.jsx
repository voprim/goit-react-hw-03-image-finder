import React, { Component } from "react";
import css from "./App.module.css";

import {fetchImagesApi} from "../services/images-api";

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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImagesApi();
    }
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  onChangeQuery = (query) => {
    this.setState({ searchQuery: query, currentPage: 1, images: [] });
  };

  fetchImagesApi = () => {
    const { currentPage, searchQuery } = this.state;

    this.setState({ isLoading: true });

    const options = {
      searchQuery,
      currentPage,
    };
    fetchImagesApi
      .fetchImagesApi(options)
      .then((data) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...data],
          currentPage: prevState.currentPage + 1,
          error: "",
        }));
      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.querySelector("#imagesList").scrollHeight,
          behavior: "smooth",
        });
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
