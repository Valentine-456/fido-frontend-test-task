<template>
  <b-modal id="newTask" title="New Item" hide-footer>
    <b-form @submit.prevent="save">
      <b-form-input
        id="input-1"
        v-model="newItem.title"
        type="text"
        placeholder="Title"
        class="my-3"
        :state="isTitleInvalid"
      ></b-form-input>
      <b-form-textarea
        id="textarea"
        v-model="newItem.description"
        placeholder="Description"
        rows="3"
        max-rows="6"
        class="my-4"
        :state="isDescriptionInvalid"
      ></b-form-textarea>
      <div class="d-flex justify-content-end">
        <b-button @click="cancel" class="mx-3">Cancel</b-button>
        <b-button @click="save" class="ml-3" variant="success">Save</b-button>
      </div>
    </b-form>
  </b-modal>
</template>
<script>
import {mapActions} from "vuex";

export default {
    name: "ModalNewCard",
    data: () => ({
      newItem: {
        title: "",
        description: ""
      }
    }),
    computed:{
      isTitleInvalid() {
        if(this.newItem.title.length == 0) return null;
        if( this.newItem.title.length < 50) return true;
        return false;
      },
      isDescriptionInvalid() {
        if(this.newItem.description.length == 0) return null;
        if( this.newItem.description.length < 500) return true;
        return false;
      }
    },
    methods: {
      ...mapActions(["createTask"]),
      cancel() {
        this.newItem.title = "";
        this.newItem.description = "";
        this.$bvModal.hide('newTask');
      },
      save() {
        const {title, description} = this.newItem;
        if (!title || title.length > 50) return;
        if (description.length > 500) return;

        this.createTask({
          title: this.newItem.title,
           description: this.newItem.description,
        });
        this.cancel();
      }
    }
}
</script>