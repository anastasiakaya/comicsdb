import React, { Fragment, Component } from 'react';
import CharactersList from '../characters-list';
import { withRouter } from 'react-router-dom';
import SearchPanel from '../search-panel';

class CharactersPage extends Component {

  state = {
    row: 6,
    limit: 48,
    offset: 0,
    page: 0,
    search: '',
    pagination: true
  }

  onClickNext = () => {
    this.setState(state => {
      return {
        ...state,
        offset: state.offset + state.limit
      }
    });
  }


  onChangePage = (obj) => {
    this.setState(state => {
      return {
        ...state,
        page: obj.page,
        offset: (obj.page - 1) * state.limit
      }
    });
  }

  onSearchChange = (text) => {
    this.setState(state => {
      return {
        ...state,
        search: text
      }
    });
  }

  render() {

    const { history, location } = this.props;
    const { limit, row, offset, search, pagination, page } = this.state;

    //console.log(location);

    return (
      <Fragment>

        <SearchPanel onSearchChange={this.onSearchChange} />


        <CharactersList limit={limit} 
                        row={row} 
                        offset={offset} 
                        search={search} 
                        pagination={pagination}
                        page={page}
                        onChangePage={this.onChangePage} 
                        onItemSelected={(itemId) => history.push(`${itemId}`)} /> 
                        

      </Fragment>


      
    )
  };
};

export default withRouter(CharactersPage);
