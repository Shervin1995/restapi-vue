<template>
  <div id="app1" class="container">
    <div class="row">

      <Add @insert="adding" />

      <Search @thedata="statement" :ascdesc1="ascdesc" :sort1="sort" @asc="ascfn" @sorting="sorting" />
      
      <Apt :propX="searched" @delfunction="del_method1" @getFunc="edit_method2" />
      
    </div>
  </div>

</template>

<script>
import Apt from './components/apt';
import Add from './components/add';
import Search from './components/search';
import axios from 'axios'
import _ from 'lodash'

export default {

  name: 'app1',

  data: function(){

    return {
      appointments: [],
      term: '',
      ascdesc: 'asc',
      sort: 'petName'
    };

  }, 
  components: { 

    Apt, Add, Search

  },
  mounted(){

    axios.get('./data/appointments.json')
    .then(res => this.appointments = res.data)

  },
  computed:{

    searched: function(){

      let arr = _.sortBy(this.appointments, this.sort)

      if (this.ascdesc == 'desc') {
        arr.reverse()
      } 

      return arr.filter(item => {
        
        return (
          item.petName.toLowerCase().match(this.term.toLowerCase()) || 
          item.petOwner.toLowerCase().match(this.term.toLowerCase()) || 
          item.aptNotes.toLowerCase().match(this.term.toLowerCase())  
        )

      })

    }

  },
  methods: {

    del_method1: function(id1){
      let arr = this.appointments
      let index = arr.findIndex(({id})=> id == id1)
      this.appointments.splice(index,1)
    },

    edit_method2: function(id1, key, value){
      let arr = this.appointments
      let index = arr.findIndex( ({id}) => id == id1 )
      this.appointments[index][key] = value
    },

    adding: function(aptData){  

      let lastIndex = this.appointments.length
      aptData.id = Number(this.appointments[ Number(lastIndex) - 1 ]['id']) + 1
      this.appointments.push(aptData) 

    },

    statement: function(term1){
      this.term = term1 
    },

    ascfn: function(hh) {
      this.ascdesc = hh
    },

    sorting: function(jj) {
      this.sort = jj
    }

  }
}
</script>
