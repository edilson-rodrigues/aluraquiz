import React from 'react';
import Widget from '../Widget';

const Winner = () => (
  <Widget>
    <Widget.Header>
      Game Over
    </Widget.Header>
    <Widget.Content>
      <Widget.Topic>
        Você acertou X questões!
      </Widget.Topic>
    </Widget.Content>
  </Widget>
);

export default Winner;
