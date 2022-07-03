import { ref } from 'vue'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            console.log('id:', id)
            let data = await fetch('http://localhost:3000/posts/' + id)
            console.log('data:', data)
            if (!data.ok) {
                throw Error('no post available')
            }
            post.value = await data.json()
            console.log('post.value:', post.value)
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }
    return { post, error, load }
}

export default getPost