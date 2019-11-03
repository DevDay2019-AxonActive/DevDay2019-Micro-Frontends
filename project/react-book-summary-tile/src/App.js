import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import fontawesome from 'font-awesome/css/font-awesome.css';
import React, { useContext } from 'react';
import Style from 'style-it';

import styles from './App.css';

import { ReactWebComponent, EventContext } from 'create-react-web-component';

import PropTypes from 'prop-types';

const App = props => {
  const dispatch = useContext(EventContext);

  /*
   * This is a workaround to import external css files as @import does not work properly
   */
  const cssStyles = styles
    .toString()
    .concat(fontawesome.toString())
    .concat(bootstrap.toString());

  const renderFullRatingStars = [...Array(Math.floor(props.rating)).keys()].map(
    key => <i key={key} className='fa fa-star' />
  );

  const renderHalfRatingStar =
    props.rating % 1 > 0 ? <i className='fa fa-star-half-o' /> : '';

  const renderEmptyRatingStar = [
    ...Array(Math.floor(5 - props.rating)).keys()
  ].map(key => <i key={key} className='fa fa-star-o' />);

  const handleClick = () => {
    const event = new CustomEvent('clicked', {
      detail: {
        bookId: props.id
      }
    });
    dispatch(event);
  };

  return (
    <Style>
      {cssStyles.toString()}
      <div className='app' onClick={handleClick}>
        <div className='container'>
          <div className='row'>
            <div className='col col-sm-2 thumbnail'>
              <img
                src={props.thumbnailUrl}
                className='img-fluid'
                alt='Book Thumbnail'
              />
            </div>
            <div className='col summary d-flex flex-column'>
              <h1>
                <strong>{props.title}</strong>
              </h1>
              <blockquote className='blockquote'>
                <p className='mb-0 text-muted'>{props.summary}</p>
                <footer className='blockquote-footer'>
                  <strong>{props.author}</strong>
                </footer>
              </blockquote>
              <div className='footer mt-auto'>
                <span className='rating text-warning'>
                  {renderFullRatingStars}
                  {renderHalfRatingStar}
                  {renderEmptyRatingStar}
                </span>
                <strong>
                  Bình luận (<i className='text-muted'>{props.commentNumber}</i>
                  )
                </strong>
                <strong>Nguồn: {props.sourceName}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
};

App.propTypes = {
  id: PropTypes.number,
  summary: PropTypes.string,
  title: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  author: PropTypes.string,
  commentNumber: PropTypes.number,
  rating: PropTypes.number,
  sourceName: PropTypes.string
};

// Do not set to the component attributes as Angular app interacts with the component via properties only.
ReactWebComponent.setAttributes({});

ReactWebComponent.setProperties({
  id: null,
  summary: '',
  title: '',
  thumbnailUrl: '',
  author: '',
  commentNumber: null,
  rating: null,
  sourceName: ''
});
ReactWebComponent.render(App, 'react-book-summary-tile');

export default App;
