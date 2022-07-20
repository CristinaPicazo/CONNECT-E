<template>
    <div class="posts">
        <h1>Hi</h1>
        <router-link :to="{ name: 'PostDetails', params: {id: post.id}}">
        <h3>{{ post.title }}</h3>
        </router-link>
        <p>{{ snippet }}</p>
        <p>{{ post.user }}</p>


        <!-- <ul>
        <li v-for="(posts, x) in posts" :key="x">
            <h3>{{ posts.title }}</h3>
            <p>{{ posts.snippet }}</p>
            <p>{{ posts.user }}</p>)"
        </li>
        </ul> -->
    </div>
</template>

<script>
import {computed} from 'vue'
export default {
    // data(){
    //     return{
    //         posts: [
    //             {id: 'id', user: 'usuario', title: 'titulo', body: 'snippet', multimedia: 'multimedia'}
    //         ]
    //     }
    // },
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