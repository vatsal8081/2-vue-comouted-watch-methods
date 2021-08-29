const app = Vue.createApp({

    data() {
        return {
            count: 0
        }
    }, 

    computed:{
        getCounterLevel(){
            if (this.count === 37) {
                return this.count                
            }
            if(this.count < 37){
                return 'to Low.'
            }
            if (this.count > 37) {
                return 'to High.'
            }
        }
    },

    watch: {
        // we are listrning to computed property hear so unlike count which will execute on every change of count data property this watcher will only execute when getCounterLevel property will change and that will only chnage when count property will be chnage to to low or 37 or high   
        getCounterLevel(){
            console.log('in 2');

            setTimeout(() => this.count = 0 ,5000)
        }
    },

    methods: {
        incress(by){
            this.count +=  by
        }
    }

})

app.mount('#app')