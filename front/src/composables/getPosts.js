// import ref from 'vue'

const getPosts = () => {
    const posts = []
    const error = null

    const load = async () => {
        try {
            let data = await fetch('http://localhost:3002/posts')
            if (!data.ok) {
                throw Error('no data available')
            }
            posts.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }
    return { posts, error, load }
}

export default getPosts