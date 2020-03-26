<template>
    <div id="main">

         <div id="chart">
            <PSIIndex></PSIIndex>
        
        </div>
        
    </div>
</template>

<script>
import PSIIndex from '../PSIIndex.js'

export default {
    components:{
        PSIIndex
    }
    
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:240px;
  width:300px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding-bottom: 60px;
  float:left;
}
</style>
