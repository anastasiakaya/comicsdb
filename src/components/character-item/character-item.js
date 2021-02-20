import React, { Component } from 'react';
import Character from '../character';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withComicsService } from '../hoc';
import { fetchCharacter } from '../../actions';
import { compose } from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';


class CharacterContainer extends Component {

  componentDidMount() {
    this.props.fetchCharacter();
  }

  render() {
    const { character, loading, error } = this.props;

  
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <Character character={character} />;
  }
}

const mapStateToProps = ({ character: { character, loading, error }}) => {
  return { character, loading, error };
};

const mapDispatchToProps = (dispatch, { comicsService, itemId }) => {

  return bindActionCreators({
    fetchCharacter: fetchCharacter(comicsService, itemId)
  }, dispatch);
};

export default compose(
  withComicsService(),
  connect(mapStateToProps, mapDispatchToProps)
)(CharacterContainer);
