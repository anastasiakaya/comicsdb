import React, { Component, Fragment } from 'react';
import GalleryList from '../gallery-list';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { withComicsService } from '../hoc';
import { fetchMovies, searchMovies } from '../../actions';
import { compose } from '../../utils';

import Pagination from '../pagination';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';


class GalleryListContainer extends Component {

  componentDidMount() {
    this.props.fetchMovies();
  }

  componentDidUpdate(prevProps) {
    if (this.props.offset !== prevProps.offset) {
      this.props.fetchMovies();
    }
    if (this.props.search !== prevProps.search) {
      if (this.props.search !== '') {
        this.props.searchMovies(this.props.search);
      } else {
        this.props.fetchMovies();
      }
    }
  }

 

  render() {
    const { movies, loading, error, total, row, pagination, page, onItemSelected, onChangePage } = this.props;

  

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <Fragment>
        <GalleryList itemsList={movies} row={row} onItemSelected={(id) => onItemSelected(id)}  />
        
      { pagination && this.props.search === '' ? <Pagination 
                                  totalRecords={total}
                                  pageLimit={5}
                                  initialPage={page || 1}
                                  pagesToShow={5}
                                  onChangePage={onChangePage}/> : ''}

      </Fragment>
    );
  }
}

GalleryListContainer.propTypes = {
  row: propTypes.number.isRequired,
  limit: propTypes.number.isRequired,
  offset: propTypes.number,
  search: propTypes.string,
  pagination: propTypes.bool.isRequired,
  onClickNext: propTypes.func,
  onClickPrev: propTypes.func,
  onItemSelected: propTypes.func
};

const mapStateToProps = ({ moviesList: { movies, loading, error, total }}) => {
  return { movies, loading, error, total };
};

const mapDispatchToProps = (dispatch, { comicsService, limit, offset, search }) => {

  return bindActionCreators({
    fetchMovies: fetchMovies(comicsService, limit, offset),
    searchMovies: searchMovies(comicsService, search)
  }, dispatch);
};

export default compose(
  withComicsService(),
  connect(mapStateToProps, mapDispatchToProps)
)(GalleryListContainer);
