import React, { Component } from 'react';
import Movie from '../movie';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withComicsService } from '../hoc';
import { fetchMovie } from '../../actions';
import { compose } from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';


class MovieContainer extends Component {

  componentDidMount() {
    this.props.fetchMovie();
  }

  render() {
    const { movie, loading, error } = this.props;

  
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <Movie movie={movie} />;
  }
}

const mapStateToProps = ({ movie: { movie, loading, error }}) => {
  return { movie, loading, error };
};

const mapDispatchToProps = (dispatch, { comicsService, itemId }) => {

  return bindActionCreators({
    fetchMovie: fetchMovie(comicsService, itemId)
  }, dispatch);
};

export default compose(
  withComicsService(),
  connect(mapStateToProps, mapDispatchToProps)
)(MovieContainer);
