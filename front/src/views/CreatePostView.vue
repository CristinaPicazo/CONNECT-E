<template>
  <div class="createPost">
      <h2>New Post</h2>
      <label for="title">Title</label>
      <input type="text" v-model="title" placeholder="Title">
      <label for="body">Body</label>
      <input type="text" v-model="body" placeholder="Body"> 
 
        <label>Topics (use commas to separate topics)</label>
        <input type="text" v-model="tempTopic" @keyup="addTopic">
        <div v-for="topic in topics" :key="topic">
            <span @click="deleteTopic(topic)">{{ topic }}</span>
        </div>  
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'CreatePost',
  setup(){
    let id = ref(1)
    let title = ref('My journey with Vue')
    let body = ref('Body of the book')
    let user = ref('Michael')    
    

    return {id, title, body, user}
  },
    methods: {
        addTopic(e) {
            if(e.key === ',' && this.tempTopic){
                if(!this.topics.includes(this.tempTopic)){
                    this.topics.push(this.tempTopic)
                }
                this.tempTopic = ''
            }
        },
        deleteTopic(topic) {
            this.topics = this.topics.filter((item) => {
                return topic !== item
            })
        }
    }
  
}
</script>
<style lang="scss">
</style>
