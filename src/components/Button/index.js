/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './styles.css';

function Button(props) {
  let classNames = [ "button" ]

  if (props.outlined) classNames.push("button_outlined");
  else classNames.push("button_default");
  if (props.collapsable) classNames.push("button_collapsable");
  if (props.className) classNames.push(props.className);

  let icon = props.icon ? <FontAwesome name={props.icon}/> : null

  return props.handleRoute ?
    // If the Button has a handleRoute prop, we want to render a button
    <button className={classNames.join(' ')} onClick={ props.handleRoute }>{icon}<span className="text">{props.children}</span></button> :
    // Render an anchor tag
    <a className={classNames.join(' ')} href={props.href} onClick={props.onClick}>{icon}<span className="text">{props.children}</span></a>
}

Button.propTypes = {
  className: React.PropTypes.string,
  outline: React.PropTypes.bool,
  collapsible: React.PropTypes.bool,
  handleRoute: React.PropTypes.func,
  href: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

export default Button;
