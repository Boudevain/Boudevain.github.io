function translate(lng, tagAttr){
    var translate = new Translate();
    translate.init(tagAttr, lng);
    translate.process();
    if(lng == 'en'){
      $("#enTranslator").css('color', '#387c0a');
      $("#nlTranslator").css('color', '#fff');
    } 
    if(lng == 'nl'){
      $("#nlTranslator").css('color', '#387c0a');
      $("#enTranslator").css('color', '#fff');
    }
}
$(document).ready(function(){
  //This is id of HTML element (English) with attribute lng-tag
  $("#enTranslator").click(function(){
    translate('en', 'lng-tag');
  });
  //This is id of HTML element (Khmer) with attribute lng-tag
  $("#nlTranslator").click(function(){
    translate('nl', 'lng-tag');
  });
});