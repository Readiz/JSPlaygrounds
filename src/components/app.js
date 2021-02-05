import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import Editor from './editor';
import Viewer from './viewer';

export default class App extends Component {
  render() {
    return (
      <SplitPane split="vertical" defaultSize="50%">
        <Editor />
        <Viewer />
      </SplitPane>
    );
  }
}
