import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Line,
    data: () => ({
        results:[],
        chartdata: {
          //labels:['2020-3-05',4,5,6],
          labels:[],
          datasets: [
            {
              label: 'MRT',
               data:[],
              borderWidth:0.5,
              borderColor:"red",
              backgroundColor:"red",
              fill:false
            },
            {
              label: 'LRT',
               data:[],
              borderWidth:0.5,
              borderColor:"orange",
              backgroundColor:"orange",
              fill:false
            },
            {
              label: 'BUS',
               data:[],
              borderWidth:0.5,
              borderColor:"magenta",
              backgroundColor:"magenta",
              fill:false
            },
            {
              label: 'TAXI',
               data:[],
              borderWidth:0.5,
              borderColor:"pink",
              backgroundColor:"pink",
              fill:false
            }
          ]
          
        },
        options: {
           
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            }
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=552b8662-3cbc-48c0-9fbb-abdc07fb377a').then(response=>{
        this.results=response.data.result.records
        console.log(response.data.result.records)
  
     
        for(var i = 0; i<this.results.length; i = i+4){
            //alert(this.results[i].average_ridership)
            if((this.results[i].average_ridership!="0") & (this.results[i+1].average_ridership!="0") & (this.results[i+2].average_ridership!="0") & (this.results[i+3].average_ridership!="0")){
            this.chartdata.datasets[0].data.push(this.results[i].average_ridership)
            this.chartdata.datasets[1].data.push(this.results[i+1].average_ridership)
            this.chartdata.datasets[2].data.push(this.results[i+2].average_ridership)
            this.chartdata.datasets[3].data.push(this.results[i+3].average_ridership)
            this.chartdata.labels.push(this.results[i].year+'')
            } 
        }
        this.renderChart(this.chartdata,this.options)
            
    })
    
    }
    
    },
     mounted(){
        //console.log('Do I come here')
        this.fetchData()
        
     }

    
    
    
}