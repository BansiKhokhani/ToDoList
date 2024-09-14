import React from 'react';
import renderer from 'react-test-renderer';
import ToDoList from '../src/Screens/ToDoList';

test('renders correctly', () => {
  const tree = renderer.create(<ToDoList />).toJSON();
  expect(tree).toMatchSnapshot();
});