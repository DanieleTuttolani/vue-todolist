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
            tasks,
            newTask: ''
        }
    },
    computed : {
       createNewObj(){
        let newObj = {
            name : this.newTask ,
            done : false
        }
        return newObj;
       } 
    },
    methods:{
        remove(index){
            this.tasks.splice(index, 1);
        },
        add(){
            
            this.tasks.push(this.createNewObj);
        }
    }
})

app.mount('#root');