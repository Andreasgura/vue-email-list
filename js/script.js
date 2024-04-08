const { createApp } = Vue;
createApp({
  data() {
    return {
      emaiAddress: null,
      emailList: [],
      listLength: 10
    }
  },
  methods: {
    getRndEmail() {
      for (let index = 0; index < this.listLength; index++) {
         axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
          console.log(response.data);

          const email = response.data.response
          this.emailList.push(email)
          console.log(this.emailList);
        }

        )
      }


    }

  },
  computed: {

  },
  mounted() {
    this.getRndEmail()
  }
}).mount('#app');