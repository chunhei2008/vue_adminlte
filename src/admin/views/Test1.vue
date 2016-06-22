<template>
{{counter}}
</template>
<script>
import { getCount } from '../vuex/getters'

export default {
    vuex:{
    getters:{
       counter : getCount
    }
    }
};
</script>
