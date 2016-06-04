<template>
  <textarea id="simditor-component-editor" autofocus></textarea>
</template>
<script>
require('../../node_modules/simditor/styles/simditor.css');
var Simditor = require('Simditor');
export default {
  props:['content'],
  ready:function(){
    var self = this;
    var editor = new Simditor({
        textarea: $('#simditor-component-editor')
      });
      editor.setValue(self.content);
      editor.on("valuechanged", function(){
          self.content = editor.getValue();
      });
  }
}
</script>
