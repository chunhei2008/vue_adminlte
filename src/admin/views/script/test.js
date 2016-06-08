import EchartPie from '../../components/EchartPie.vue'
import Simditor from '../../components/Simditor.vue'

export default {
    data() {
            return {
                option: {
                    title: {
                        text: 'ECharts 入门示例22222'
                    },
                    tooltip: {},
                    legend: {
                        data: ['销量']
                    },
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 20, 20]
                    }]
                },
                content:'this is content'
            }
        },
        components: {
            EchartPie,
            Simditor
        },
        methods:{
          change:function(){
            this.option.title.text = 'this is changed .';
          }
        },
        watch:{
          content:function(val,oldVal){
            console.log(val);
          }
        }
}
