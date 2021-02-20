import React from 'react';
import { ComicsServiceConsumer } from '../comics-service-context';

const withComicsService = () => (Wrapped) => {

  return (props) => {
    return (
      <ComicsServiceConsumer>
        {
          (comicsService) => {
            return (<Wrapped {...props}
                     comicsService={comicsService}/>);
          }
        }
      </ComicsServiceConsumer>
    );
  }
};

export default withComicsService;
