<template>
  <textarea id="simditor-component-editor" autofocus></textarea>
</template>
<script>
require('../../../node_modules/simditor/styles/simditor.css');
require('../../../dist/simditor-markdown/styles/simditor-markdown.css');
var Simditor = require('simditor');
require('to-markdown');
require('marked');
require('../../../dist/simditor-markdown/lib/simditor-markdown.js');
var editor;
export default {
  props:['content'],
  ready:function(){
    var self = this;
    editor = new Simditor({
        textarea: $('#simditor-component-editor'),
        markdown: true,
        toolbar: ['title', 'bold', 'italic', 'underline', 'strikethrough', 'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent', 'alignment', '|', 'markdown']
      });
      editor.setValue(self.content);
      editor.on("valuechanged", function(){
          self.content = editor.getValue();
      });
  },
  watch:{
    content:function(val,oldVal){
      editor.setValue(val);
    }
  }
}
</script>
