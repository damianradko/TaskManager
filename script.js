function addElement(){
    const tasks = document.getElementById("tasks");

    const task = document.createElement("div");
    task.classList.add("task");

    const head = document.createElement("div");
    head.classList.add("head");

    const main = document.createElement("div");
    main.classList.add("main");

    task.appendChild(head);
    task.appendChild(main);

    tasks.appendChild(task);

}
