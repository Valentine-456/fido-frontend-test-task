import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todo: [
      //task object sample
      //
      // {
      //   title: "Simple task",
      //   description:
      //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis sit porro dolores ut dignissimos totam tempore. Eligendi reprehenderit totam dolorem reiciendis eveniet accusantium, adipisci aperiam officiis ex eum optio recusandae?",
      //   id: "4",
      // },
    ],
    inProgress: [],
    done: [],
  },
  mutations: {},
  actions: {
    //store and localstorage methods
    initializeStore({ state }) {
      const categories = ["todo", "inProgress", "done"];
      categories.forEach((cat) => {
        let jsonData = localStorage.getItem(cat);
        let data = jsonData ? JSON.parse(jsonData) : [];
        state[cat] = data;
      });
    },
    saveStore({ state }) {
      const categories = ["todo", "inProgress", "done"];
      categories.forEach((cat) => {
        let json = JSON.stringify(state[cat]);
        localStorage.setItem(cat, json);
      });
    },

    //taskCard methods
    createTask({ state, dispatch }, { title, description }) {
      if (!title || title.length > 50) return;
      if (description.length > 500) return;
      const id = title.trim().replace(/ /g, "_") + Date.now();

      const newTask = { title, description, id };
      state.todo.push(newTask);
      dispatch("saveStore");
      return newTask;
    },
    moveTask({ state, dispatch }, { taskId, currentStatus, newStatus }) {
      const taskList = state[currentStatus];
      const task = taskList.find((el) => el.id === taskId);
      if (!task) return;
      state[currentStatus] = taskList.filter((el) => el.id !== taskId);
      state[newStatus].push(task);
      dispatch("saveStore");
    },
    deleteTask({ state, dispatch }, { taskId, status }) {
      const taskList = state[status];
      state[status] = taskList.filter((el) => el.id !== taskId);
      dispatch("saveStore");
    },
  },
  modules: {},
});
