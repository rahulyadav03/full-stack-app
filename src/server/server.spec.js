import { addNewTask, updateTask } from './server'

(async function myFunc() {
    await addNewTask({
        name: "My First Task Rahul Yadav",
        id: "123456"
    });

    await updateTask({
        name: "My Last Task Ritu Yadav Updated!!!",
        id: "123456"
    });
})();
