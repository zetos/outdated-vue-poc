<template>
  <div class="hello">
      <div class="holder">

        <form @submit.prevent="addDemon">
        <input type="text" autocomplete="off" placeholder="Enter a demons you have.." v-model="demon" v-validate="'min:4'" name="demon" />

        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <p class="alert" v-if="errors.has('demon')">{{errors.first('demon')}}</p>
        </transition>
        </form>

        <ul>
          <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
            <li v-for="(data, index) in demons" :key='index'>
              {{data.demon}}
              <i class="fa fa-minus-circle" v-on:click="remove(index)" ></i>
            </li>
          </transition-group>
        </ul>

        <p>These are the demons that you possess.</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Demons',
  data () {
    return {
        demon: '',
        demons: [
          {"demon": 'Astaroth'},
          {"demon": 'Asmodeus'},
          {"demon": 'Baal'},
          {"demon": 'Beelzebub'},
          {"demon": 'Malphas'},
        ],

      }
    },
  methods: {
    addDemon(){
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.demons.push({demon: this.demon});
          this.demon = '';
        } else {
          console.error('Not valid');
        }
      })
    },
    remove(id){
      this.demons.splice(id,1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
  @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 
    .holder {
      background: #fff;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    
    ul li {
      padding: 20px;
      font-size: 1.3em;
      background-color: rgba(255, 0, 0, 0.733);
      border-left: 5px solid rgb(255, 0, 0);
      margin-bottom: 2px;
      color: rgb(247, 247, 247);
    }
    p {
      text-align:center;
      padding: 30px 0;
      color: gray;
    }
    .container {
      box-shadow: 0px 0px 40px lightgray;
    }
    input {
      width: calc(100% - 40px);
      border: 0;
      padding: 20px;
      font-size: 1.3em;
      background-color: #323333;
      color: #687F7F;
    }
    .alert {
      background: #fdf2ce;
      font-weight: bold;
      display: inline-block;
      padding: 5px;
      margin-top: -20px;
    }
    .alert-in-enter-active {
      animation: bounce-in .5s;
    }
    .alert-in-leave-active {
      animation: bounce-in .5s reverse;
    }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  i {
    float:right;
    cursor:pointer;
  }
</style>
