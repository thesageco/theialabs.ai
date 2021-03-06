import * as React from 'react';
import './index.scss';

export default class Circle extends React.Component {
  render() {
    return (
      <div className={`circle ${this.props.className?this.props.className:''}`}>
        <figure className='item'>
          <img src={this.props.img} alt='placeholder' />
          <figcaption className="caption">
            <p className='caption-heading'>{this.props.heading}</p>
            <p className='caption-text'>{this.props.text}</p>
          </figcaption>
        </figure>
      </div>
    );
  }
}
