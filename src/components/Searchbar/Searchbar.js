import PropTypes from 'prop-types';

import { Header, Form, Button, Input, SearchIcon } from './Searchbar.styled';
// import {toast} from 'react-hot-toast';
// import React, { Component } from 'react';

// Перший спосіб
// export class Searchbar extends Component {
//   state = {
//     searchName: '',
//   }

//   handleChange = event => {
//     this.setState({ searchName: event.target.value })
//   };

//   handleSubmit = event => {
//       event.preventDefault();
//       const { value } = event.target.search;
//       const {searchName} = this.state;
//       this.setState({
//       searchName: value});
//       this.setState({ searchName: ''})

//     if(!value.trim()) {
//       toast.error('The field should not be empty, please enter a name');
//       return;
//     }
//     this.setState(prevState => ({
//       searchName: prevState.searchName
//     }));
//     this.props.onSubmit(searchName)
//   }

//   render() {
//     const {searchName} = this.state;

//     return (
//       <Header class="searchbar">
//     <Form onSubmit={this.handleSubmit}>
//       <Button type="submit">
//         <span class="button-label">Search</span>
//       </Button>

//       <Input
//         class="input"
//         type="text"
//         name="search"
//         value={searchName}
//         onChange={this.handleChange}
//         autocomplete="off"
//         autofocus
//         placeholder="Search images and photos"
//       />
//     </Form>
//     </Header>
//      )
//   }
//   }

// Другий спосіб
export const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <Form onSubmit={onSubmit}>
        <Button type="submit">
          <span class="button-label">
            <SearchIcon />
          </span>
        </Button>

        <Input
          name="search"
          type="text"
          autocomplete="off"
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};

Searchbar.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};
