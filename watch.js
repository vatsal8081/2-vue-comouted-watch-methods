const app = Vue.createApp({


    // we can use watch as object and the watch is as name sagest watch the property we 
    // provide and unlike computed we can use same name in watch as we define in data and
    // computed property and we can also watch for computed property
    // computed property will execute atheist one time when page lodes and watch only runs
    // when data changes not on page load
    // we don't return anything from watch because we will not and can't use watcher 
    // properties in our template
    // a watcher function every time gets 2 params 1 is new value and 2 is old value so we can use them 

    // you should only use watchers when you want to watch some property changes 
    // and want to execute some simple and not complex code 
    // and you also should use watches to minimum in your code
    // and also try to not change other properties in different watch for ex
    // when you are watching changes in name property on name change watcher you 
    // should try avoid to change counter of other data that not related to that watch
    // because this type of things make your code more magical and you can accidentally
    // change some data which can leads to bugs

    // NOTE : 
    // Computed =  if you just want to calculate the property dynamically and want to show in 
    // template then use computed property
    // Watch = if you want to listen to changes on any property and want to execute simple code
    // then use methods
    // Methods = if you want to listen to events or if you want to execute complex logic use methods 


    data() {
        return {
            counter: 0,
        };
    },

    watch: {

        // this will execute every time counter data property changes
        counter(newValue, oldValue) {
            console.log(`watch execute new value: ${newValue} and old value: ${oldValue}`);
            if (newValue > 50) {
                this.counter = 0
            }
        }
    }

})


app.mount("#app")