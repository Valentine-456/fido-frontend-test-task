<template>
  <div class="column mx-auto">
    <h3>{{heading}}</h3>
    <div class="d-flex flex-column align-items-center px-1 w-100">
      <TaskCard
        v-for="(task, i) in tasks"
        :key="i"
        :title="task.title"
        :description="task.description"
        :id="task.id"
        :status="status"
      ></TaskCard>
    </div>
  </div>
</template>
<script>
import TaskCard from "@/components/TaskCard";

export default {
    name: "TasksColumn",
    components:{
        TaskCard
    },
    props: {
        heading: {
            type: String,
            required: true,
        },
        tasks: {
            type: Array,
        }, 
        status: {
            type: String,
            required: true
        }
    }
}
</script>
<style scoped>
.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 33%;
  max-width: 450px;
  min-width: 300px;
}

.column h3 {
  max-height: 30px;
  margin-bottom: 30px;
}
</style>