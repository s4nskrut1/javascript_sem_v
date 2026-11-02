$(document).ready(function () {

    let tasks = JSON.parse(
        localStorage.getItem("myTasks") || "[]"
    );

    // Save tasks in localStorage
    function saveTasks() {
        localStorage.setItem(
            "myTasks",
            JSON.stringify(tasks)
        );
    }

    // Display tasks on the webpage
    function displayTasks() {

        $("#taskList").empty();

        if (tasks.length === 0) {
            $("#taskList").append(
                $("<li>").text("No tasks available.")
            );
        }

        tasks.forEach(function (task) {

            let li = $("<li>");

            if (task.completed) {
                li.addClass("completed");
            }

            let checkbox = $("<input>", {
                type: "checkbox"
            }).prop("checked", task.completed);

            let text = $("<span>", {
                class: "task-text"
            }).text(task.title);

            let doneButton = $("<button>", {
                class: "done-btn",
                text: task.completed ? "Undo" : "Done"
            });

            let deleteButton = $("<button>", {
                class: "delete-btn",
                text: "Delete"
            });

            let buttonBox = $("<div>", {
                class: "task-buttons"
            });

            buttonBox.append(doneButton, deleteButton);

            li.append(checkbox, text, buttonBox);

            li.data("taskId", task.id);

            $("#taskList").append(li);

        });

        $("#taskCount").text(
            "Total Tasks: " + tasks.length +
            " | Completed: " +
            tasks.filter(function (task) {
                return task.completed;
            }).length
        );

    }

    // Add a new task
    function addTask(title) {

        title = title.trim();

        if (title === "") {
            $("#message").text("Please enter a task.");
            return;
        }

        tasks.push({
            id: Date.now() + Math.random(),
            title: title,
            completed: false
        });

        saveTasks();
        displayTasks();

        $("#message").text("Task added successfully!");
        $("#taskInput").val("");
    }

    $("#addBtn").on("click", function () {
        addTask($("#taskInput").val());
    });

    // Add task by pressing Enter
    $("#taskInput").on("keydown", function (event) {
        if (event.key === "Enter") {
            addTask($(this).val());
        }
    });

    // Mark a task as completed or undo completion
    $("#taskList").on("click", ".done-btn", function () {

        let id = $(this).closest("li").data("taskId");

        let task = tasks.find(function (item) {
            return item.id === id;
        });

        if (task) {
            task.completed = !task.completed;
            saveTasks();
            displayTasks();
        }

    });

    // Checkbox event
    $("#taskList").on("change", "input[type='checkbox']", function () {

        let id = $(this).closest("li").data("taskId");

        let task = tasks.find(function (item) {
            return item.id === id;
        });

        if (task) {
            task.completed = $(this).is(":checked");
            saveTasks();
            displayTasks();
        }

    });

    // Delete a task
    $("#taskList").on("click", ".delete-btn", function () {

        let id = $(this).closest("li").data("taskId");

        tasks = tasks.filter(function (task) {
            return task.id !== id;
        });

        saveTasks();
        displayTasks();

        $("#message").text("Task deleted.");
    });

    // Clear all tasks
    $("#clearBtn").on("click", function () {

        tasks = [];

        saveTasks();
        displayTasks();

        $("#message").text("All tasks cleared.");
    });

    // AJAX: Fetch sample tasks from an external API
    $("#loadBtn").on("click", function () {

        $("#message").text("Loading sample tasks...");

        $.ajax({
            url: "https://jsonplaceholder.typicode.com/todos?_limit=5",
            method: "GET",
            dataType: "json",

            success: function (data) {

                data.forEach(function (item) {

                    tasks.push({
                        id: Date.now() + Math.random(),
                        title: item.title,
                        completed: item.completed
                    });

                });

                saveTasks();
                displayTasks();

                $("#message").text(
                    "Sample tasks loaded successfully!"
                );

            },

            error: function () {

                $("#message").text(
                    "Unable to load tasks. Check your internet connection."
                );

            }
        });

    });

    // Display saved tasks when the page opens
    displayTasks();

});
