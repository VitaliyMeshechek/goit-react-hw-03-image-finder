import {toast} from 'react-hot-toast';
import React, { Component } from 'react';
import { Header, Form, Button, Input } from './Searchbar.styled';


export class Searchbar extends Component {
  state = {
    searchName: '',
  }

  handleChange = event => {
    // const { name, value } = event.target.search;
    // this.setState({
    //   [name]: value,
    // });
    this.setState({ searchName: event.target.value })
  };


  handleSubmit = event => {
      event.preventDefault();
      const { value } = event.target.search;
      const {searchName} = this.state;
      this.setState({
      searchName: value});


    if(!value.trim()) {
      toast.error('The field should not be empty, please enter a name');
      return;
    }
    this.props.onSubmit(searchName)
    this.reset();
  }

    reset = () => {
    this.setState({ searchName: ''})
  }

  render() {
    const {searchName} = this.state;

    return (
      <Header class="searchbar">
    <Form onSubmit={this.handleSubmit} class="form">
      <Button type="submit" class="button">
        <span class="button-label">Search</span>
      </Button>

      <Input
        class="input"
        type="text"
        name="search"
        value={searchName}
        onChange={this.handleChange}
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
    </Form>
    </Header>
     )
  }
  }




// export const Searchbar = ({onSubmit}) => {
//     return (
//       <Header class="searchbar">
//     <Form onSubmit={onSubmit} class="form">
//       <Button type="submit" class="button">
//         <span class="button-label">Search</span>
//       </Button>

//       <Input
//           name="search"
//           type="text"
//           autocomplete="off"
//           placeholder="Search images and photos"
//       />
//     </Form>
//     </Header>
//      )
// }



