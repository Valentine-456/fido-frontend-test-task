import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todo: [
      {
        title: "Simple task 1",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis sit porro dolores ut dignissimos totam tempore. Eligendi reprehenderit totam dolorem reiciendis eveniet accusantium, adipisci aperiam officiis ex eum optio recusandae?",
        id: "1",
      },
      {
        title: "Simple task 2",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis sit porro dolores ut dignissimos totam tempore. Eligendi reprehenderit totam dolorem reiciendis eveniet accusantium, adipisci aperiam officiis ex eum optio recusandae?",
        id: "2",
      },
    ],
    inProgress: [
      {
        title: "Simple task",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis sit porro dolores ut dignissimos totam tempore. Eligendi reprehenderit totam dolorem reiciendis eveniet accusantium, adipisci aperiam officiis ex eum optio recusandae?",
        id: "3",
      },
    ],
    done: [
      {
        title: "Simple task",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis sit porro dolores ut dignissimos totam tempore. Eligendi reprehenderit totam dolorem reiciendis eveniet accusantium, adipisci aperiam officiis ex eum optio recusandae?",
        id: "4",
      },
    ],
  },
  mutations: {},
  actions: {
    moveTask({ state }, { taskId, currentStatus, newStatus }) {
      const taskList = state[currentStatus];
      const task = taskList.find((el) => el.id === taskId);
      if (!task) return;
      state[currentStatus] = taskList.filter((el) => el.id !== taskId);
      state[newStatus].push(task);
    },
    deleteTask({ state }, { taskId, status }) {
      const taskList = state[status];
      state[status] = taskList.filter((el) => el.id !== taskId);
    },
  },
  modules: {},
});
