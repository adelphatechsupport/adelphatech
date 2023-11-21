const React = require('react');

exports.onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
      <script
        key="warmly-script"
        id="warmly-script-loader"
        src="https://opps-widget.getwarmly.com/warmly.js?clientId=c6c4286c8cf6600ae379618f6d194333"
        defer
      />,
    ]);
  };