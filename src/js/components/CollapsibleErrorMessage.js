
import Icon from './Icon';

import React from 'react';
import classNames from 'classnames';

/**
 * Methods to bind in 'this' context
 */
const METHODS_TO_BIND = [
  'getDetailLink',
  'getDetailMessages',
  'getFixedPart',
  'getToggledPart',
  'toggleExpanded'
];

/**
 * An error bar component commonly used in the ServiceForm and the JobsForm
 * that contains collapsible error messages.
 *
 * @example <caption>How to use the CollapsibleErrorMessage</caption>
 *   <CollapsibleErrorMessage
 *
 *        className="error-for-modal"
 *
 *        details={[ 'an', 'array', 'of', 'detailed errors' ]}
 *        message="The message to display"
 *
 *        onToggle={function(isToggled) {
 *          // Do something
 *        }}
 *
 *      />
 */
class CollapsibleErrorMessage extends React.Component {

  /**
   * Initialize superclass
   */
  constructor() {
    super(...arguments);

    // Initial state
    this.state = {
      expanded: false
    };

    // Bind methods in context
    METHODS_TO_BIND.forEach((method) => {
      this[method] = this[method].bind(this);
    });

  }

  /**
   * Set the default expandedg from the properties
   */
  componentWillMount() {
    this.setState({
      expanded: this.props.expanded
    });
  }

  /**
   * Toggle the expanded state of the collapsible error bar
   */
  toggleExpanded() {
    this.setState({
      expanded: !this.state.expanded
    });

    // Call onToggle callback
    this.props.onToggle(this.state.expanded);
  }

  /**
   * [Custom component] The (show more/less) link
   *
   * @returns {React.Component} - The rendered content
   */
  getDetailLink() {
    let {message, details} = this.props;
    let isDetailed = message && details && details.length;

    // Check if we must not show the detail link at all
    if (!isDetailed) {
      return null;
    }

    // Get text
    let moreLess = 'more';
    if (this.state.expanded) {
      moreLess = 'less';
    }

    // Render
    return (
        <span
          className="collapsible-toggle-label  clickable"
          onClick={this.toggleExpanded} >
          (Show {moreLess})
        </span>
      );

  }

  /**
   * [Custom component] The list of errors in the details
   *
   * @returns {React.Component} - The rendered content
   */
  getDetailMessages() {
    let {details} = this.props;
    return details.map(function (message) {
      let msg = message.toString();
      return (
          <li key={msg}>{msg}</li>
        );
    });
  }

  /**
   * [Custom component] The fixed message part
   *
   * @returns {React.Component} - The rendered content
   */
  getFixedPart() {
    let {message} = this.props;
    let isVisible = !!message;

    // If not visible, just exit
    if (!isVisible) {
      return null;
    }

    // Render the fixed part of the message
    return (
        <div className="collapsible-fixed">
          <Icon
            family="mini"
            id="yield"
            size="mini"
            className="icon-alert icon-margin-right"
            color="red" />
          {message}
          {this.getDetailLink()}
        </div>
      );
  }

  /**
   * [Custom component] The toggled message part
   *
   * @returns {React.Component} - The rendered content
   */
  getToggledPart() {
    let {message, details} = this.props;
    let isDetailed = !!message && details && details.length;

    // If not expanded or detailed, just exit
    if (!isDetailed || !this.state.expanded) {
      return null;
    }

    // Render the toggled part of the message
    // (Note: The nested div is used to float the contents when needed)
    return (
        <div className="collapsible-toggled">
          <div>
            <ul>
            {this.getDetailMessages()}
            </ul>
          </div>
        </div>
      );

  }

  /**
   * React.js Render Function
   *
   * @returns {React.Component} - The rendered content
   */
  render() {
    let {message} = this.props;
    let isVisible = !!message;

    // If not visible, just exit
    if (!isVisible) {
      return null;
    }

    // Compile classes
    let className = classNames(
      this.props.className,
      'collapsible-error-message',
      {
        'expanded': this.state.expanded
      }
    );

    // Render message component
    return (
        <div className={className}>
          {this.getFixedPart()}
          {this.getToggledPart()}
        </div>
      );

  };

};

CollapsibleErrorMessage.defaultProps = {
  className: '',
  details: null,
  expanded: false,
  message: '',
  onToggle: function () { }
};

CollapsibleErrorMessage.propTypes = {
  className: React.PropTypes.string,
  details: React.PropTypes.array,
  expanded: React.PropTypes.bool,
  message: React.PropTypes.string,
  onToggle: React.PropTypes.func
};

module.exports = CollapsibleErrorMessage;
