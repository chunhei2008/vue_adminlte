<template>
<div class="wrapper">
<admin-header></admin-header>
<admin-aside></admin-aside>
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <router-view></router-view>
</div>
<admin-footer></admin-footer>
</template>
<script>
require('../libs/adminlte2/plugins/fastclick/fastclick.js')
require('../libs/adminlte2/dist/js/app.min.js')
require('../libs/adminlte2/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js')
require('../libs/adminlte2/plugins/jvectormap/jquery-jvectormap-world-mill-en.js')
require('../libs/adminlte2/plugins/slimScroll/jquery.slimscroll.min.js')

import AdminHeader from '../components/AdminHeader.vue'
import AdminAside from '../components/AdminAside.vue'
import AdminFooter from '../components/AdminFooter.vue'
import store from '../vuex/store'

export default{
  components:{
    AdminHeader,
    AdminAside,
    AdminFooter
  },
  ready:function(){
    $('body').removeClass().addClass('hold-transition skin-blue sidebar-mini fixed');
  },
  store
};
</script>
