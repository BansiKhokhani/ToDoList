// import React from 'react';
// import { render, fireEvent } from '@testing-library/react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import ToDoList from '../Screens/ToDoList'; // Adjust the import path as necessary
// import { getSpecificTask } from '../RealmSchema/Database';

// // Mock the getSpecificTask function
// jest.mock('../RealmSchema/Database', () => ({
//   getSpecificTask: jest.fn(),
// }));

// describe('ToDoList Component', () => {
//   const mockNavigation = { navigate: jest.fn() };

//   beforeEach(() => {
//     // Clear any previous mock calls
//     jest.clearAllMocks();
//   });

//   it('renders correctly with initial data', () => {
//     // Mock the return value of getSpecificTask
//     getSpecificTask.mockReturnValue([{ uniqueId: '1', title: 'Test Task' }]);

//     const { getByText } = render(<ToDoList navigation={mockNavigation} />);

//     expect(getByText('TODO APP')).toBeTruthy(); // Check header text
//     expect(getByText('Test Task')).toBeTruthy(); // Check if the task is rendered
//   });

//   it('navigates to CompletedTask screen on button press', () => {
//     getSpecificTask.mockReturnValue([]); // Mock empty task list

//     const { getByText } = render(<ToDoList navigation={mockNavigation} />);
//     fireEvent.press(getByText('COMPLETED'));

//     expect(mockNavigation.navigate).toHaveBeenCalledWith('CompletedTask'); // Check navigation
//   });

//   it('fetches tasks when the component is focused', () => {
//     getSpecificTask.mockReturnValue([{ uniqueId: '1', title: 'Test Task' }]);

//     const { getByText } = render(<ToDoList navigation={mockNavigation} />);

//     // Mock focus effect
//     expect(getSpecificTask).toHaveBeenCalledTimes(1); // Check if fetching function is called
//     expect(getByText('Test Task')).toBeTruthy(); // Check if the task is rendered
//   });
// });
