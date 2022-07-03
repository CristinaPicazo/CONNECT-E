<template>
    <div class="post">
        <router-link :to="{ name: 'PostDetails', params: {id: post.id}}">
        <h3>{{ post.title }}</h3>
        </router-link>
        <p>{{ snippet }}</p>
        <p>{{ post.user }}</p>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props: ['post'],
    setup(props){
        const snippet = computed(() => {
            if(props.post.body.length > 100){
            return props.post.body.substring(0, 100) + '...'
            }
            return props.post.body
        })
        return { snippet }
    }
}
</script>

<style lang="scss">

</style>