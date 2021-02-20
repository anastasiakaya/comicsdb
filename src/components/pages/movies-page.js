import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';
import MoviesList from '../movies-list';
import SearchPanel from '../search-panel';

class MoviesPage extends Component {

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
  
      const { history } = this.props;
      const { limit, row, offset, search, pagination, page } = this.state;
  
      return (
        <Fragment>
  
          <SearchPanel onSearchChange={this.onSearchChange} />

          <MoviesList limit={limit} 
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

export default withRouter(MoviesPage);
