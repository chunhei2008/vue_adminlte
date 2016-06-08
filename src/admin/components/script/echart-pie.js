var echarts = require('echarts');

export default {
    props:['option'],
    ready: function(){
       this.chart = echarts.init(document.getElementById('echart-pie-component'));
       this.chart.setOption(this.option)
    },
    watch:{
      option:{
        deep:true,
        handler:function(val,oldVal){
          this.chart.setOption(val);
        }
      }
    }
}
