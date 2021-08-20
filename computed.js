const app = Vue.createApp({

    data() {
        return {
            counter: 0,
            firstName: '',
        };
    },

    // 1
    // as we discuss in previous repo that when we use methods in template for data bindings  
    // because vue don't know there dependance it will re render then every time something changes
    // so to avoid that we can use computed properties. 
    // computed properties are same as methods only difference is when we use computed
    // properties for data bindings vue will know all dependance used in computed methods
    // so vue will only re execute the computed method when any of dependance of that method changes
    // and you can't use same name as data and computed property

    computed: {

        // 2
        // as you can see we can define computed properties just like methods
        // and if we want to call it in template we just use name of property 
        // without () because we just point to property and vue will execute it 
        // you can see in computed.htm page
        // when any dependency changes of that computed property
        // so we should name computed property just like a data property name not like
        // functions. 
        guess() {
            console.log('guess called..');
            return Math.random() > 0.5 ? 'grater' : 'small';
        },

        // 4
        // as you can in fullName computed property our dependency is firstName data property
        // so when the firstName will change in data then and only then fullName will execute
        fullName() {
            console.log('fullName called..');
            if (!this.firstName) {
                return '';
            }
            return `${this.firstName} patel`
        }
    },

    methods: {
        resetFirstName() {
            this.firstName = ''
        }
    }

})


app.mount("#app")