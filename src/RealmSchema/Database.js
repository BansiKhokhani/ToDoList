import Realm from "realm";

export const TodoListSchema = {
    name: 'ToDoList',
    properties: {
        uniqueId: 'string',
        title: 'string',
        detail: 'string',
        dueDate: 'date',
        completedStatus: 'bool'
    },

};

// Create realm
let realm = new Realm({ schema: [TodoListSchema], schemaVersion: 1 });

//........Add new task
let AddNewToDoListTask = (uniqueId, title, detail, dueDate, completedStatus) => {
    realm.write(() => {
        const task = realm.create('ToDoList', {
            uniqueId: uniqueId,
            title: title,
            detail: detail,
            dueDate: dueDate,
            completedStatus: completedStatus
        });
    });
}

//.......Get All Task
let getAllTask = () => {
    return realm.objects('ToDoList');
}

//....Delete All Task
let deleteAllTask = () => {
    realm.write(() => {
        realm.delete(getAllTask());
    })
}

// Update specific Task
let updateSpecificTask = (uniqueId, title, detail, dueDate, completedStatus) => {
    realm.write(() => {
        let task = getAllTask()
        task.map((item, index) => {
            if (item.uniqueId === uniqueId) {
                    item.title = title,
                    item.detail = detail,
                    item.dueDate = dueDate,
                    item.completedStatus = completedStatus
            }
        })
    });
};

// get specific task
let getSpecificTask = (value) => {
    return realm.objects('ToDoList').filtered(`completedStatus==${value}`); // if the value== true then retuen all true completed status record
}

//....Delete Specific Task
let deleteSpecificTask = (uniqueId) => {
    realm.write(() => {
         // Use a placeholder and pass the uniqueId as an argument to avoid issues
         let taskToDelete = realm.objects('ToDoList').filtered('uniqueId == $0', uniqueId);
        
         if (taskToDelete.length > 0) {
             realm.delete(taskToDelete);
         } else {
             console.log("Task not found.");
         }
    })
}


export {
    getAllTask,
    AddNewToDoListTask,
    deleteAllTask,
    updateSpecificTask,
    getSpecificTask,
    deleteSpecificTask
}
// Export the realm
//export default realm;