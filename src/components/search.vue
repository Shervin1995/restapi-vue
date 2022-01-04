<template>
    <div class="col-12 col-md-10 col-lg-7">
    <div class="input-group my-3">
      <input
        id="SearchApts"
        placeholder="Search"
        type="text"
        class="form-control"
        aria-label="Search Appointments" 
        v-model="searchTerm" 
      >

      <div class="input-group-append">
        <button
          type="button"
          class="btn btn-primary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false" 
        >
          Sort by
          <span class="caret"></span>
        </button>

        <div class="dropdown-menu dropdown-menu-right" >
          <a 
          href="#" 
          class="dropdown-item d-flex justify-content-between" 
          id="petName"
          @click="sorting"
          >
            Pet Name
            <font-awesome-icon icon="check" v-if="sort1==='petName'" />
          </a>

          <a 
          class="dropdown-item d-flex justify-content-between" 
          href="#" 
          id="aptDate"
          @click="sorting"
          >
            Date
            <font-awesome-icon icon="check" v-if="sort1 ==='aptDate'" />
          </a>

          <a 
            href="#" 
            class="dropdown-item d-flex justify-content-between" 
            id="ownerName" 
            @click="sorting"
          >
            Owner
            <font-awesome-icon icon="check" v-if="sort1==='ownerName'" />
          </a>

          <div class="dropdown-divider" role="separator"></div>

          <a
            class="dropdown-item d-flex justify-content-between"
            href="#"
            id="asc"
            @click="ascdescfn"
          >
            Asc
            <font-awesome-icon icon="check" v-if="ascdesc1==='asc'" />
          </a>

          <a
            class="dropdown-item d-flex justify-content-between"
            href="#"
            id="desc"
            @click="ascdescfn"
          >
            Desc
            <font-awesome-icon icon="check" v-if="ascdesc1==='desc'" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

export default {

    name: 'Search',

    data(){
        return {
            searchTerm: ''
        }
    },

    props:['sort1', 'ascdesc1'],

    watch:{ 

      searchTerm: function(){
        this.$emit('thedata', this.searchTerm)
      } 
      
    },
    components: {
      FontAwesomeIcon
    },
    methods:{

      ascdescfn: function($event) {
        this.$emit('asc', $event.target.id)  
      },

      sorting: function($event) {
        this.$emit('sorting', $event.target.id)  
      }
      
    }
    

}
</script>