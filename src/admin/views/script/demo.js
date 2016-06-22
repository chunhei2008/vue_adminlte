import EchartPie from '../../components/EchartPie.vue'
import {getCount} from '../../vuex/getters'
import {incrementCounter} from '../../vuex/actions'

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
            }
        }
    },
    components: {
        EchartPie
    },
    methods: {
        signin: function () {

        }
    },
    vuex: {
        getters: {
            counterValue: getCount
        },
        actions: {
            increment: incrementCounter
        }
    }
};
