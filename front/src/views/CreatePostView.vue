<template>
  <div class="createPost">
    <form
      class="post forms p-5 m-5"
      @submit.prevent="checkForm"
      action="/post"
      method="post"
    >
      <h2>New Post</h2>
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          aria-describedby="titleHelp"
          v-model="title"
          required
        />
      </div>

      <div class="mb-3">
        <label for="body" class="form-label">Body</label>
        <textarea
          type="text"
          class="form-control"
          id="body"
          aria-describedby="bodyHelp"
          v-model="body"
          rows="3"
          required
        >
Body</textarea
        >
      </div>

      <div class="mb-3">
        <label for="body" class="form-label">Multimedia</label>
        <input
          type="file"
          class="form-control"
          id="file"
          aria-describedby="fileHelp"
          ref="file"
          v-on:change="onChangeFileUpload()"
        />
      </div>
      <button
        type="submit"
        value="Submit"
        class="btn buttons align-self-center"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "CreatePostView",
  setup() {
    let id = ref(1);
    let title = ref("My journey with Vue");
    let body = ref("Body of the book");
    let user = ref("Michael");

    return { id, title, body, user };
  },
  methods: {
    addTopic(e) {
      if (e.key === "," && this.tempTopic) {
        if (!this.topics.includes(this.tempTopic)) {
          this.topics.push(this.tempTopic);
        }
        this.tempTopic = "";
      }
    },
    deleteTopic(topic) {
      this.topics = this.topics.filter((item) => {
        return topic !== item;
      });
    },
  },
};
</script>
<style lang="scss">
@use "../scss/mixins.scss";
.forms {
  @include mixins.forms;
  .buttons {
    @include mixins.buttons;
    margin: 10px auto;
  }
}
</style>
