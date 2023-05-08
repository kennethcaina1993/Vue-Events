const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            lastname:'',
        }
    },
    watch: {
        counter(value) {
            if (value > 50){
                setTimeout(function() {
                    this.counter = 0;
                }, 2000);
            }
        }
    },
    computed: {
        fullname() {
            if (this.lastname === '' && this.name === '') {
                return ' ';
            }else{
                return this.name + ' ' + this.lastname;
            }
        }
    },
    methods: {
        outputFullname(){
            if (this.name === '') {
                return '';
            }
                return this.name + ' ' + 'caina';

        },
        resetInput(){
            this.name = ''
        },
        confirmInput(){
            this.confirmedName = this.name;
        },
        add(num){
          this.counter = this.counter + num;
        },
        reduce(num){
          this.counter = this.counter - num;
        },
        setName(event,lastname){
            this.name = event.target.value
        },
        submitForm(event){
            alert('Submitted !')
        }
  },
})

app.mount('#events');