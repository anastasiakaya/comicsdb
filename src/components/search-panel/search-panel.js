import React, { Component } from 'react';
import PropTypes from "prop-types";
import './search-panel.css';

class SearchPanel extends Component {

  state = {
    term: ''
  };

  onTermChange = (e) => {
    this.setState({
      term: e.target.value
    });
  };

  onSearchBtnClick = () => {
    const {onSearchChange = () => {}} = this.props;
    onSearchChange(this.state.term);
  };
  
  onTermKeyup = (e) => {
    if (e.keyCode === 13) {
      this.onSearchBtnClick();
    }
  }

  render() {
    return (
        <section>
            <div className="input-append">
                <input size="16" type="text" placeholder="Search" value={this.state.term} onChange={this.onTermChange} onKeyUp={this.onTermKeyup} />
                <button className="btn" type="button" onClick={ this.onSearchBtnClick}><i className="icon-search"></i></button>
            </div>
        </section>
    );
  };
}


SearchPanel.propTypes = {
  onSearchChange: PropTypes.func.isRequired
};

export default SearchPanel;