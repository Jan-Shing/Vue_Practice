const Counter = {
    data() {
        return {
            counter: 0
        }
    },
    mounted() {
        setInterval(() => {
          this.counter++
        }, 1000)
    }
}

const app = Vue.createApp(Counter).mount('#counter')
app.config.devtools = true