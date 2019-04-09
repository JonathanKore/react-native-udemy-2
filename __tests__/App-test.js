/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import App from '../src/App';

it('renders correctly', () => {
  renderer.create(<App />);
});
