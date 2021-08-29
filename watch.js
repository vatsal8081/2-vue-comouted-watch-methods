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
    // then use watch
    // Methods = if you want to listen to events or if you want to execute complex logic use methods 


    data() {
        return {
            counter: 0,
            test: {number: 0}
        };
    },

    watch: {

        // this will execute every time counter data property changes
        counter(newValue, oldValue) {
            console.log(`watch execute new value: ${newValue} and old value: ${oldValue}`);
            if (newValue > 50) {
                this.counter = 0
            }
        },

        // we can also do this if we want to watch nested property on objects
        'test.number': {
            // deep will use mostly in watchicg changis on hole objects or on any nested property in it
            deep : true,
            // handler in function which will get exicuted when change will happen
            handler(newVal, oldVal){
                console.log('yy', newVal, oldVal);
            }
        },

        // as you can see we define watch in object and there is also change happning on number property in test but still this watch will not exicute
        // because in objects if you want to watch on any property change you have to define deep: true vue desible it default for pufformance resions this 
        // watch will only execute when hole object will change 
        test(){
            console.log('change happen in any property of test');
        },

        
    }

})


app.mount("#app")