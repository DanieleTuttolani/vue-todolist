console.log("vue ok ", Vue);

const tasks = [
    {
        name: 'giocare a pallone',
        done : false,
    },
    {
        name: 'mangiare',
        done : false,
    },
    {
        name: 'dormire',
        done : true,
    },
    {
        name: 'fare la spesa',
        done : false,
    },
    {
        name: 'suonare il clarinetto',
        done : false,
    },
]
const app = Vue.createApp ({
    data(){
        return{
            tasks
        }
    }
})

app.mount('#root');