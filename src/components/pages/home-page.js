import React, { Fragment } from 'react';
import Title from '../title';
import CharactersList from '../characters-list';
import { withRouter } from 'react-router-dom';

const HomePage = ({ history }) => {
  return (
    <Fragment>

      <Title 
          hNumber = '5'
          text = 'Recent Work ' 
          smallText = 'That we are most proud of'
          isBig = {true}
          />

       <CharactersList limit={12} row={4} offset={318} pagination={false}
                       onItemSelected={(itemId) => history.push(`/characters/${itemId}`)} /> 
    </Fragment>
  );
};

export default withRouter(HomePage);
