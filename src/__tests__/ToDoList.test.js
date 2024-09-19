// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react-native';
// import ToDoList from '../Screens/ToDoList';
// import { getSpecificTask } from '../RealmSchema/Database';
// import { useFocusEffect } from '@react-navigation/native';

// // Mock navigation and Database methods
// const mockNavigate = jest.fn();
// const mockGetSpecificTask = jest.fn();

// jest.mock('@react-navigation/native', () => ({
//   useFocusEffect: jest.fn().mockImplementation((cb) => cb()),
// }));

// jest.mock('../RealmSchema/Database', () => ({
//   getSpecificTask: jest.fn(),
// }));

// describe('ToDoList Component', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it('renders the ToDoList component correctly', async () => {
//     const tasks = [{ uniqueId: '1', title: 'Test Task', dueDate: new Date() }];
//     getSpecificTask.mockReturnValue(tasks);

//     const { getByTestId, getByText } = render(<ToDoList navigation={{ navigate: mockNavigate }} />);

//     expect(getByTestId('todo-app-header')).toBeTruthy();
//     expect(getByText('TODO APP')).toBeTruthy();

//     // Verify task item is rendered
//     await waitFor(() => {
//       expect(getByText('Test Task')).toBeTruthy();
//     });
//   });

//   it('navigates to AddNewTask screen when add button is pressed', async () => {
//     const { getByTestId } = render(<ToDoList navigation={{ navigate: mockNavigate }} />);
    
//     const addButton = getByTestId('add-new-task-button');
//     fireEvent.press(addButton);
    
//     expect(mockNavigate).toHaveBeenCalledWith('AddNewTask');
//   });

//   it('fetches data on screen focus', async () => {
//     const tasks = [{ uniqueId: '1', title: 'Task on focus', dueDate: new Date() }];
//     getSpecificTask.mockReturnValue(tasks);

//     const { getByText } = render(<ToDoList navigation={{ navigate: mockNavigate }} />);
    
//     // Assert the task is fetched and displayed when the screen is focused
//     await waitFor(() => {
//       expect(getByText('Task on focus')).toBeTruthy();
//     });
//   });

//   it('calls handleToDoList and updates when a task is completed', async () => {
//     const tasks = [{ uniqueId: '2', title: 'Another Task', dueDate: new Date() }];
//     getSpecificTask.mockReturnValue(tasks);

//     const { getByText } = render(<ToDoList navigation={{ navigate: mockNavigate }} />);

//     // Verify task is fetched
//     await waitFor(() => {
//       expect(getByText('Another Task')).toBeTruthy();
//     });
//   });

//   it('navigates to CompletedTask screen when the footer button is pressed', () => {
//     const { getByText } = render(<ToDoList navigation={{ navigate: mockNavigate }} />);
    
//     fireEvent.press(getByText('COMPLETED'));
//     expect(mockNavigate).toHaveBeenCalledWith('CompletedTask');
//   });
// });
