
(function($){
var defaultOptions={preloadImg:true};
var arcTransformImgPreloaded=false;
var arcTransformImgZindex=100;
var arcTransformPreloadHoverFocusImg=function(strImgUrl){
strImgUrl=strImgUrl.replace(/^url\((.*)\)/,'$1').replace(/^\"(.*)\"$/,'$1');
var imgHover=new Image();
imgHover.src=strImgUrl.replace(/\.([a-zA-Z]*)$/,'-hover.$1');
var imgFocus=new Image();
imgFocus.src=strImgUrl.replace(/\.([a-zA-Z]*)$/,'-focus.$1');};
var isSafari=function(){
return/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor);};
var isChrome=function(){
return/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor);};
var isIE=function(){
return/MSIE/.test(navigator.userAgent)||/Trident/.test(navigator.userAgent)||/Edge/.test(navigator.userAgent);};
var isFF=function(){
return/Mozilla/.test(navigator.userAgent)&&/Firefox/.test(navigator.userAgent);};
var arcTransformMakeTextNodeFloat=function(field){
var textnodes=field.parent().contents().filter(function(){return this.nodeType==3;});
for(var i=0;i<textnodes.length;i++)
{
var t=$.trim(textnodes[i].data);
if(t!=""){$(textnodes[i]).wrap("<div class='float_left_text'></div>");}}};
var isIEVer=function(){
uaMatch=function(ua){
ua=ua.toLowerCase();
var match=/(chrome)[ \/]([\w.]+)/.exec(ua)||
/(webkit)[ \/]([\w.]+)/.exec(ua)||
/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua)||
/(msie) ([\w.]+)/.exec(ua)||
ua.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)||
/(Edge)(?:.*?\/([\w.]+)|)/.exec(us)||
[];
return{
browser:match[1]||"",
version:match[2]||"0"};};
if(isIE()){
var a=uaMatch(navigator.userAgent);
return parseInt(a.version,10);}
return 0;};
$.fn.getElementAttr=function(){
var $input=$(this);
var org={'type':'','name':'','class':'','value':'','disabled':'','id':'','size':'','maxlength':'','onchange':'','onclick':'','onfocus':'','onblur':'','readonly':''};
for(var x in org){
if($input.attr(x)){
org[x]=$input.attr(x);}}
if(isIEVer()==7){
org['class']=$input[0].className;}
if($input.attr('disabled')=="disabled"){
org['disabled']='disabled';}
if(org['value']==""){
if($input[0].tagName=="BUTTON"){
org['value']=$input.html();}else{
org['value']=$input[0].value;}}
return org;};
$.fn.arcTransWidth=function(method){
if("undefined"==typeof(method))method='width';
var $target=this.eq(0);
var fix,restore;
var tmp=[];
var style='';
var $hidden;
fix=function(){
var style='position: absolute !important; top: -1000 !important; ';
$target=$target.
clone().
attr('style',style).
appendTo('body');};
restore=function(){
$target.remove();};
fix();
var actual=$target[method]();
restore();
return actual;};
var arcTransformGetLabel=function(objfield){
var selfForm=$(objfield.get(0).form);
var oLabel=objfield.next();
if(!oLabel.is('label')){
oLabel=objfield.prev();
if(oLabel.is('label')){
var inputname=objfield.attr('id');
if(inputname){
oLabel=selfForm.find('label[for="'+inputname+'"]');}}}
if(oLabel.is('label')){return oLabel.css('cursor','pointer');}
return false;};
var arcTransformHideSelect=function(oTarget){
$(".arcTransformSelectWrapper_focus").removeClass('arcTransformSelectWrapper_focus');
var ulVisible=$('.arcTransformSelectWrapper ul:visible');
ulVisible.each(function(){
var oSelect=$(this).parents(".arcTransformSelectWrapper:first").find("select").get(0);
if(!(oTarget&&oSelect.oLabel&&oSelect.oLabel.get(0)==oTarget.get(0))){
$(this).hide();}});};
var arcTransformCheckExternalClick=function(event){
if($(event.target).parents('.arcTransformSelectWrapper').length===0){arcTransformHideSelect($(event.target));}};
var init_arcTransformAddDocumentListener=1;
var arcTransformAddDocumentListener=function(){
if(init_arcTransformAddDocumentListener){
init_arcTransformAddDocumentListener=0;
$("body").mousedown(arcTransformCheckExternalClick);}};
var arcTransformReset=function(f){
var sel;
$('.arcTransformSelectWrapper select',f).each(function(){sel=(this.selectedIndex<0)?0:this.selectedIndex;$('ul',$(this).parent()).each(function(){$('a:eq('+sel+')',this).click();});});
$('a.arcTransformCheckbox, a.arcTransformRadio',f).removeClass('arcTransformChecked');
$('input:checkbox, input:radio',f).each(function(){if(this.checked){$('a',$(this).parent()).addClass('arcTransformChecked');}});};
$.fn.arcTransCreateInputButton=function(option){
var opt=$.extend({},defaultOptions,option);
var $input=$(this);
var inputSize=$input.arcTransWidth();
var midcss=wrapcss=wdcss=divcss="";
var org=$input.getElementAttr();
var btn_size="";
if(org["class"].indexOf("button_m")>=0){
btn_size="button_m";
midcss='style="height:32px;width:'+Math.ceil(inputSize*1.3)+'px;"';}
else if(org["class"].indexOf("button_s")>=0){
btn_size="button_s";
midcss='style="height:24px;width:'+Math.ceil(inputSize*1.1)+'px;"';}
else
midcss='style="height:40px;width:'+Math.ceil(inputSize*1.5)+'px;"';
var htm='';
var mouseevent=' onmousedown="$(this).arcTransButtonHover(0)" '+' onmouseup="$(this).arcTransButtonHover(1)" '+' onmouseover="$(this).arcTransButtonHover(2)" '+' onmouseout="$(this).arcTransButtonHover(3)" ';
wrapcss=org['class'];
if(org['disabled']){
wrapcss+=' ButtonDisable ';}
wdcss+=' id="'+org['name']+'" onClick="return $(this).arcTransInputButtonClick()" func="'+org['onclick']+'" '+
(org['disabled']?'disabled="disabled" ':' ');
htm+='<div id="btn_'+org['name']+'" class="arctransformdone arcTransformButton '+btn_size+'" style="min-width:'+Math.ceil(inputSize+15)+'px;">'+'<a '+wdcss+' href="javascript:void(0)" >'+'<span class="ButtonLeft '+wrapcss+'" '+mouseevent+'></span>'+'<span class="ButtonMiddle '+wrapcss+'" '+midcss+' '+mouseevent+'>'+org['value']+'</span>'+'<span class="ButtonRight '+wrapcss+'" '+mouseevent+'></span>'+'</a></div>';
return htm;};
$.fn.arcTransButtonHover=function(flag){
var $input=$(this).parent();
var isdisable=$input[0].getAttribute('disabled');
if(!isdisable){isdisable=$input.attr('disabled');}
if((isdisable=='disabled')||isdisable)return;
$('span',$input).each(function(idx){
if(flag==3)
$(this).removeClass('ButtonHover');
if(flag==2)
$(this).addClass('ButtonHover');});};
$.fn.arcTransInputButton=function(){
return this.each(function(){
if($(this).hasClass('arcTransformHidden')){return;}
var $input=$(this);
var newBtn=$input.arcTransCreateInputButton({txt:true});
$(this).replaceWith($(newBtn));});};
$.fn.arcTransInputButtonClick=function(){
var isdisable=$(this)[0].getAttribute('disabled');
if(!isdisable){isdisable=$(this).attr('disabled');}
if((isdisable=='disabled')||isdisable)return false;
var func=$(this).attr('func');
$.globalEval(func);
return false;};
$.fn.arcTransButton=function(){
return this.each(function(){
if($(this).hasClass('arcTransformHidden')){return;}
var $input=$(this);
var newBtn=$input.arcTransCreateInputButton({txt:true,type:'button'});
$(this).replaceWith($(newBtn));});};
$.fn.textNodes=function(){
var ret=[];
this.contents().each(function(){
var fn=arguments.callee;
if(this.nodeType==3)
ret.push(this);
else $(this).contents().each(fn);});
return $(ret);};
function getTextNodesIn(node,includeWhitespaceNodes){
var textNodes=[],whitespace=/^\s*$/;
function getTextNodes(node){
if(node.nodeType==3){
if(includeWhitespaceNodes||!whitespace.test(node.nodeValue)){
textNodes.push(node);}}else{
for(var i=0,len=node.childNodes.length;i<len;++i){
getTextNodes(node.childNodes[i]);}}}
getTextNodes(node);
return textNodes;}
$.fn.arcTransCreateInputText=function(option){
var opt=$.extend({},defaultOptions,option);
var $input=$(this);
var wrapSize=$input.arcTransWidth("outerWidth");
var inputSize=Math.ceil(wrapSize*1.1);
var att,txt;
var wrapcss=css=(isSafari())?' arcTransformSafari':'';
var inncss='arcTransformInputInner';
var org=$input.getElementAttr();
if(org["value"]){
org["value"]=$input.val();}
if(org['disabled']){
css+=' arcTransformDisabled ';
inncss='arcTransformInputInnerDisabled';
wrapcss+=' arcTransformInputWrapperDisabled';}
if(org["class"].indexOf("input_m")>=0){
inncss+=' input_m';
wrapcss+=' input_m';}
if((isIE()!=0)||(isFF()!=0)||isChrome()!=0){
wrapSize=inputSize+6+15;}
else if(isSafari()==true){
wrapSize=inputSize+8+15;}
var htm='<span class="arcTransformInputWrapper '+wrapcss+'" style="width:'+wrapSize+'px;">'+'<div class="arcTransformInputInner '+inncss+'">'+'<div style="width:'+inputSize+'px"><input ';
htm+='class="arctransformdone arcTransformInput '+css+'" '+'value="'+org['value']+'" '+'name="'+org['name']+'" '+'size="'+org['size']+'" '+'maxlength="'+org['maxlength']+'" '+
((org['id'])?'id="'+org['id']+'" ':"")+'style="width:'+inputSize+'px'+(isSafari()?';color:inherit"':'"')+'type="'+org['type']+'" '+
((org['readonly']!='')?'readonly':'')+
((org['disabled'])?"disabled ":" ");
htm+='onFocus="$(this).arcTransInputHover(0)" '+'onBlur="$(this).arcTransInputHover(1)" '+'onmouseover="$(this).arcTransInputHover(2)" '+'onmouseout="$(this).arcTransInputHover(3)" '+
((org['onchange'])?' onchange="'+org['onchange']+'" ':' ')+' func_blur="'+org['onblur']+'" '+' func_focus="'+org['onfocus']+'" ';
htm+='/>'+'</div>'+'</div>'+'</span>';
return htm;};
$.fn.arcTransInputHover=function(flag){
var func="";
var $input=$(this);
if($input.attr('disabled')){return}
switch(flag){
case 0:
func=$input.attr("func_focus");
$(this).parent().parent().parent().addClass('arcTransformInputWrapper_focus');
if(func){eval(func)}
break;
case 1:
func=$input.attr("func_blur");
$(this).parent().parent().parent().removeClass('arcTransformInputWrapper_focus');
if(func){eval(func)}
break;
case 2:
$(this).parent().parent().parent().addClass('arcTransformInputWrapper_hover');
break;
case 3:
$(this).parent().parent().parent().removeClass('arcTransformInputWrapper_hover');
break;}};
$.fn.arcTransInputText=function(option){
return this.each(function(){
var $input=$(this);
if($input.hasClass('arctransformdone')||!$input.is('input')){return;}
var newInput=$input.arcTransCreateInputText({txt:true});
$(this).replaceWith($(newInput));});};
$.fn.arcTransformCheckBoxLnkClick=function(){
var aLink=$(this);
var $input=aLink.parent().find('input');
if($input.attr('disabled')){return false;}
var ischecked=!aLink.hasClass('arcTransformChecked');
$($input)[0].click();
if(isIEVer()<=8){
$input.trigger('change');}
return false;};
$.fn.arcTransformCheckBoxChange=function(){
var aLink=$(this).parent().find('a');
var ischecked=$(this)[0].checked;
if(ischecked){
if($(this).attr('disabled'))
aLink.removeClass('arcTransformDisabled').addClass('arcTransformCheckedDisabled');
else
aLink.removeClass('arcTransformDisabled arcTransformCheckedDisabled').addClass('arcTransformChecked')}
else{
if($(this).attr('disabled'))
aLink.removeClass('arcTransformCheckedDisabled').addClass('arcTransformDisabled');
else
aLink.removeClass('arcTransformDisabled arcTransformCheckedDisabled arcTransformChecked');}
return false;};
$.fn.arcTransCreateCheckBox=function(option){
var opt=$.extend({},defaultOptions,option);
var $input=$(this);
var ischecked=$input[0].checked;
var css=$input.attr("class");
if(ischecked){
$input.attr("checked","checked");
css+=' arcTransformChecked';
if($input.attr('disabled')){css+=' arcTransformCheckedDisabled';}}else{
$input.removeAttr("checked");
if($input.attr('disabled')){css+=' arcTransformDisabled';}}
$input.addClass('arcTransformHidden');
$input.attr('onChange','return $(this).arcTransformCheckBoxChange();');
var htm='<span class="arcTransformCheckboxWrapper">'+'<a href="javascript:return void(0)" class="arcTransformCheckbox '+css+'" onClick="return $(this).arcTransformCheckBoxLnkClick()"></a>'+
$input[0].outerHTML+'</span>';
if($input.hasClass('arcTransformHidden')){
if(!opt.hasOwnProperty("force")||opt.force!=true){return htm;}
else{
$input.siblings('a').remove().closest('span').remove();
$input.replaceWith(htm);}}
return htm;};
$.fn.arcTransCheckBox=function(){
return this.each(function(){
if($(this).hasClass('arcTransformHidden')){return;}
var $box=$(this);
var newBox=$box.arcTransCreateCheckBox({txt:true});
$(this).replaceWith($(newBox));});};
$.fn.arcTransformRadioLnkClick=function(){
var aLink=$(this);
var $input=aLink.parent().find('input');
if($input.attr('disabled')){return false;}
$input.trigger('click').trigger('change');
$('input[name="'+$input.attr('name')+'"]',$input[0].form).not($input).each(function(){
$(this).attr('type')=='radio'&&$(this).trigger('change');});
return false;};
$.fn.arcTransformRadioChange=function(){
var aLink=$(this).parent().find('a');
var ischecked=$(this)[0].checked;
if(ischecked){
if($(this).attr('disabled'))
aLink.removeClass('arcTransformDisabled').addClass('arcTransformCheckedDisabled');
else
aLink.removeClass('arcTransformDisabled arcTransformCheckedDisabled').addClass('arcTransformChecked')}
else{
if($(this).attr('disabled'))
aLink.removeClass('arcTransformCheckedDisabled').addClass('arcTransformDisabled');
else
aLink.removeClass('arcTransformDisabled arcTransformCheckedDisabled arcTransformChecked');}
return false;};
$.fn.arcTransCreateRadio=function(option){
var opt=$.extend({},defaultOptions,option);
var $input=$(this);
var wrapcss=css=$input.attr("class");
if($input[0].checked){
css+=' arcTransformChecked';
if($input.attr('disabled'))
css+=" arcTransformCheckedDisabled";}else{
if($input.attr('disabled'))
css+=" arcTransformDisabled";}
$input.addClass('arcTransformHidden');
var doChange=$input.attr('onChange');
if(!doChange){doChange="";}else{doChange+=";";}
$input.attr('onChange',doChange+'return $(this).arcTransformRadioChange()');
var htm='<span class="arcTransformRadioWrapper">'+'<a href="javascript:return void(0)" class="arcTransformRadio '+css+'" rel="t_type1" onClick="return $(this).arcTransformRadioLnkClick()"></a>'+
$input[0].outerHTML+'</span>';
return htm;};
$.fn.arcTransRadio=function(){
return this.each(function(){
if($(this).hasClass('arcTransformHidden')){return;}
var $box=$(this);
var newBox=$box.arcTransCreateRadio({txt:true});
$(this).replaceWith($(newBox));});};
$.fn.arcTransTextarea=function(){
return this.each(function(){
var textarea=$(this);
var textareaW=textarea.width();
var textareaH=textarea.arcTransWidth('height');
if(textarea.hasClass('arctransformdone')){return;}
textarea.addClass('arctransformdone');
oLabel=arcTransformGetLabel(textarea);
oLabel&&oLabel.click(function(){textarea.focus();});
var strTable='<table cellspacing="0" cellpadding="0" border="0" class="arcTransformTextarea">';
strTable+='<tr><td id="arcTransformTextarea-tl"></td><td id="arcTransformTextarea-tm"></td><td id="arcTransformTextarea-tr"></td></tr>';
strTable+='<tr><td id="arcTransformTextarea-ml">&nbsp;</td><td id="arcTransformTextarea-mm"><div></div></td><td id="arcTransformTextarea-mr">&nbsp;</td></tr>';
strTable+='<tr><td id="arcTransformTextarea-bl"></td><td id="arcTransformTextarea-bm"></td><td id="arcTransformTextarea-br"></td></tr>';
strTable+='</table>';
var oTable=$(strTable).insertAfter(textarea).hover(function(){!oTable.hasClass('arcTransformTextarea-focus')&&oTable.addClass('arcTransformTextarea-hover');},function(){
oTable.removeClass('arcTransformTextarea-hover');});
textarea.focus(function(){oTable.removeClass('arcTransformTextarea-hover').addClass('arcTransformTextarea-focus');}).blur(function(){oTable.removeClass('arcTransformTextarea-focus');}).appendTo($('#arcTransformTextarea-mm div',oTable));
textarea.width(textareaW-15);
if(textarea.attr('disabled'))
{
textarea.addClass("disabled");}
this.oTable=oTable;
if(isSafari()){
$('#arcTransformTextarea-mm',oTable).addClass('arcTransformSafariTextarea').find('div').css('height',textareaH).css('width',textareaW-15);}});};
$.fn.arcTransformSelectWrapperClick=function(flag){
this.each(function(index){
var $ul=$('ul',$(this));
if($ul.css('display')=='none'){
arcTransformHideSelect();}
$ul.toggle();
return false;});
return false;};
$.fn.arcTransformSelectLnkClick=function(){
this.each(function(index){
var $wrapper=$(this).parent().parent().parent();
$('a.selected',$wrapper).removeClass('selected');
$(this).addClass('selected');
$select=$wrapper.find('select');
if($select[0].selectedIndex!=$(this).attr('index')&&
$select[0].onchange){
$select[0].selectedIndex=$(this).attr('index');
$select[0].onchange();}
$select[0].selectedIndex=$(this).attr('index');
$('span:eq(0)',$wrapper).html($(this).html());
return false;});
return false;};
$.fn.arcTransCreateSelect=function(option){
var opt=$.extend({},defaultOptions,option);
var $select=$(this);
var oIndex="";
if(opt.zidx){
oIndex="z-index:"+(arcTransformImgZindex--)+";";}
var iSelectWidth=$select.arcTransWidth();
var newWidth=iSelectWidth+32;
var htm;
var lst='';
var obj=$select[0];
var txt,def_v=null;
if(isSafari()==true){
iSelectWidth+=6;}
for(x=0;x<obj.options.length;x++){
txt=obj.options[x].text;
lst+='<li><a href="#" index='+x+' onClick="return $(this).arcTransformSelectLnkClick()">'+txt+'</a></li>';
if(def_v==null){
def_v=txt;}}
htm='<div class="arcTransformSelectWrapper" style="'+oIndex+'width:'+newWidth+'px" onclick="return $(this).arcTransformSelectWrapperClick()">'+'<div>'+'<span onclick="return $(this).parent().parent().arcTransformSelectWrapperClick()">'+def_v+'</span>'+'<a href="#" class="arcTransformSelectOpen" style="" ></a>'+'</div>'+'<ul style="width:'+newWidth+'px;display:none;visibility:visible;">'+
lst+'</ul>';
$select.attr('class','');
$select.attr('style','');
$select.addClass('arcTransformHidden');
htm+=$select[0].outerHTML;
htm+='</div>';
arcTransformAddDocumentListener();
return htm;};
$.fn.arcTransSelect=function(option){
var opt=$.extend({},defaultOptions,option);
return this.each(function(index){
var $select=$(this);
var selfForm=$(this)[0].form;
var oIndex=index;
var do_refresh=0;
var selectWidth=$select.arcTransWidth();
var select_size="";
if($select.attr("class"))
select_size=(($select.attr("class").indexOf("select_s")>=0)?"select_s":"");
if($select.hasClass('arcTransformHidden')){do_refresh=1;}
if($select.attr('multiple')){arcTransSelectMulti(this);return;}
if(do_refresh){
if(opt.force!=true){return;}
$wrapper=$(this).parent();
$wrapper.find('ul').remove();
$wrapper.find('select').before('<ul></ul>');}
else{
if($(selfForm).length&&!$(selfForm).hasClass('arctransformdone')){return false;}
oIndex=arcTransformImgZindex--;
arcTransformMakeTextNodeFloat($select);
var oLabel=arcTransformGetLabel($select);
var $wrapper=$select.addClass('arcTransformHidden').wrap('<div class="arcTransformSelectWrapper '+select_size+'"></div>').parent().css({zIndex:oIndex});
$wrapper.prepend('<div><span></span><a href="#" class="arcTransformSelectOpen"></a></div><ul></ul>');}
var $ul=$('ul',$wrapper).css('width',selectWidth).hide();
var opt_cnt=0,ul_h=0;
$('option',this).each(function(i){
if($(this).attr('title')){
$ul.append($('<li><a href="#" index="'+i+'" title="'+$(this).attr('title')+'">'+$(this).html()+'</a></li>'));}
else{
$ul.append($('<li><a href="#" index="'+i+'">'+$(this).html()+'</a></li>'));}
if(ul_h==0){ul_h=$wrapper.arcTransWidth('height');}
opt_cnt++;});
if(opt_cnt>10){opt_cnt=10}
$ul.css('height',(ul_h*opt_cnt));
if($select.attr('disabled')){
$wrapper.addClass('arcTransformSelectWrapperDisabled');
$wrapper.find(".arcTransformSelectOpen").addClass("disabled");}
$('span:first',$wrapper).html('');
$ul.find('a').click(function(){
$('a.selected',$wrapper).removeClass('selected');
$(this).addClass('selected');
if($select[0].selectedIndex!=$(this).attr('index')&&$select[0].onchange){
$select[0].selectedIndex=$(this).attr('index');
$select[0].onchange();}
$select[0].selectedIndex=$(this).attr('index');
$('span:first',$wrapper).html($(this).html());
if($(this).attr('title')){
$('span:first',$wrapper).attr('title',$(this).attr('title'));}
else{
$('span:first',$wrapper).removeAttr('title');}
$ul.hide();
return false;});
$('a:eq('+this.selectedIndex+')',$ul).click();
if(!do_refresh){
$('span:first',$wrapper).click(function(){$("a.arcTransformSelectOpen",$wrapper).trigger('click');});
oLabel&&oLabel.click(function(){$("a.arcTransformSelectOpen",$wrapper).trigger('click');});}
this.oLabel=oLabel;
var oLinkOpen=$('a.arcTransformSelectOpen',$wrapper);
if(!do_refresh){
oLinkOpen.click(function(){
$ul=$(this).parent().parent().find('ul');
if($ul.css('display')=='none'){arcTransformHideSelect();}
if($select.attr('disabled')){return false;}
$ul.toggle();
if($('a.selected',$ul).length!=0)
{
var offSet=($('a.selected',$ul).offset().top-$ul.offset().top);
if(offSet<0||offSet>$ul.height())
$ul.animate({scrollTop:offSet+$ul.scrollTop()});}
$(".arcTransformSelectWrapper_focus").removeClass('arcTransformSelectWrapper_focus');
$(this).closest('.arcTransformSelectWrapper').addClass('arcTransformSelectWrapper_focus');
return false;}).blur(function(event){
$(this).closest('.arcTransformSelectWrapper').removeClass('arcTransformSelectWrapper_focus');});}
var iSelectWidth=$select.arcTransWidth();
var oSpan=$('span:first',$wrapper);
var oSelectWidth=oSpan.arcTransWidth('innerWidth');
var oLinkOpenWidth=oLinkOpen.outerWidth();
var oWrapperWidth=$wrapper.arcTransWidth();
var oSpanWidth=oSpan.arcTransWidth();
var newWidth=iSelectWidth+oLinkOpenWidth;
if(isSafari()){
newWidth+=(oWrapperWidth+25);}
if(newWidth<iSelectWidth){newWidth=iSelectWidth+oLinkOpenWidth;}
$wrapper.css('width',newWidth);
$ul.css('width',newWidth+2);
oSpan.css({width:newWidth-((select_size=="select_s")?32:35)});
$ul.css({display:'block',visibility:'hidden'});
var iSelectHeight=($('li',$ul).length)*(($('li:first',$ul).height()!=0)?$('li:first',$ul).height():(isFF()?27:25));
(iSelectHeight<$ul.height())&&$ul.css({height:iSelectHeight,'overflow':'hidden'});
$ul.css({display:'none',visibility:'visible'});});};
var arcTransSelectMulti=function(selectField){
var select=$(selectField);
var selectW=select.height();
if(select.hasClass('arctransformdone')){return;}
select.addClass('arctransformdone');
oLabel=arcTransformGetLabel(select);
oLabel&&oLabel.click(function(){select.focus();});
var strTable='<table cellspacing="0" cellpadding="0" border="0" class="arcTransformTextarea">';
strTable+='<tr><td id="arcTransformTextarea-tl"></td><td id="arcTransformTextarea-tm"></td><td id="arcTransformTextarea-tr"></td></tr>';
strTable+='<tr><td id="arcTransformTextarea-ml">&nbsp;</td><td id="arcTransformTextarea-mm"><div></div></td><td id="arcTransformTextarea-mr">&nbsp;</td></tr>';
strTable+='<tr><td id="arcTransformTextarea-bl"></td><td id="arcTransformTextarea-bm"></td><td id="arcTransformTextarea-br"></td></tr>';
strTable+='</table>';
var oTable=$(strTable).insertAfter(select).hover(function(){!oTable.hasClass('arcTransformTextarea-focus')&&oTable.addClass('arcTransformTextarea-hover');},function(){
oTable.removeClass('arcTransformTextarea-hover');});
select.focus(function(){oTable.removeClass('arcTransformTextarea-hover').addClass('arcTransformTextarea-focus');}).blur(function(){oTable.removeClass('arcTransformTextarea-focus');}).appendTo($('#arcTransformTextarea-mm div',oTable));
this.oTable=oTable;
if(isSafari()){
$('#arcTransformTextarea-mm',oTable).addClass('arcTransformSafariTextarea').find('div').css('height',select.height()).css('width',select.width());}};
$.fn.jqDisabledInput=function(disabled){
return this.each(function(){
if(disabled)
{
$(this).addClass("arcTransformDisabled");
$(this).parent().parent().addClass("arcTransformInputInnerDisabled");
$(this).parent().parent().parent().addClass("arcTransformInputWrapperDisabled");}
else
{
$(this).removeClass("arcTransformDisabled");
$(this).parent().parent().removeClass("arcTransformInputInnerDisabled");
$(this).parent().parent().parent().removeClass("arcTransformInputWrapperDisabled");}});};
$.fn.jqDisabledCheckBox=function(disabled){
return this.each(function(){
var aLink=$(this).prev();
aLink.removeClass("arcTransformChecked");
aLink.removeClass("arcTransformDisabled");
aLink.removeClass("arcTransformCheckedDisabled");
if(disabled)
this.checked&&aLink.addClass('arcTransformCheckedDisabled')||aLink.addClass('arcTransformDisabled');
else
this.checked&&aLink.addClass('arcTransformChecked');});};
$.fn.jqDisabledRadio=function(disabled){
return this.each(function(){
var aLink=$(this).prev();
aLink.removeClass("arcTransformChecked");
aLink.removeClass("arcTransformDisabled");
aLink.removeClass("arcTransformCheckedDisabled");
if(disabled)
this.checked&&aLink.addClass('arcTransformCheckedDisabled')||aLink.addClass('arcTransformDisabled');
else
this.checked&&aLink.addClass('arcTransformChecked');});};
$.fn.jqDisabledSelect=function(disabled){
return this.each(function(){
$wrapper=$(this).parent();
if($wrapper&&!$wrapper.hasClass("arcTransformSelectWrapper"))return;
if(disabled)
{
$wrapper&&$wrapper.addClass('arcTransformSelectWrapperDisabled');
$wrapper&&$wrapper.find(".arcTransformSelectOpen").addClass("disabled");}
else
{
$wrapper&&$wrapper.removeClass('arcTransformSelectWrapperDisabled');
$wrapper&&$wrapper.find(".arcTransformSelectOpen").removeClass("disabled");}});};
$.fn.jqDisabledButton=function(disabled){
return this.each(function(){
if(disabled)
{
$(this).addClass("disabled").attr("disabled","disabled");
$("#btn_"+this.id+".arcTransformButton").addClass("arcTransformButtonDisabled").find(".ButtonLeft, .ButtonMiddle, .ButtonRight").addClass('ButtonDisable');
$("#btn_"+this.id+".arcTransformButton").find(".ButtonLeft, .ButtonMiddle, .ButtonRight").removeClass('ButtonHover');}
else
{
$(this).removeClass("disabled").removeAttr("disabled");
$("#btn_"+this.id+".arcTransformButton").removeClass("arcTransformButtonDisabled").find(".ButtonLeft, .ButtonMiddle, .ButtonRight").removeClass('ButtonDisable');
$("#btn_"+this.id+".arcTransformButton").find(".ButtonLeft, .ButtonMiddle, .ButtonRight").addClass('ButtonHover').arcTransButtonHover(3);}});};
$.fn.jqDisabled=function(disabled){
var obj_type=$(this)[0].type;
if(obj_type==""){
obj_type=$(this)[0].tagName;}
switch(obj_type){
case"radio":
$(this).jqDisabledRadio(disabled);
break;
case"checkbox":
$(this).jqDisabledCheckBox(disabled);
break;
case"select-one":
case"select-multiple":
$(this).jqDisabledSelect(disabled);
break;
case"password":
case"textarea":
case"text":
$(this).jqDisabledInput(disabled);
break;
case"button":
case"A":
$(this).jqDisabledButton(disabled);
break;
case"file":
case"hidden":
default:
break;}};
$.fn.jqSetValue=function(value){
var obj_type=$(this)[0].type;
switch(obj_type){
case"radio":
$(this).each(function(){
$(this).arcTransformRadioChange();});
break;
case"checkbox":
var aLink=$(this).parent().find('a');
var isCheck=($(this).val()==value);
if(isCheck)
aLink.addClass('arcTransformChecked')
else
aLink.removeClass('arcTransformChecked');
break;
case"select-one":
case"select-multiple":
$aWrap=$(this).parent();
$(this).find('option').each(function(){
if($(this).val()==value){
var selindex=$(this).index();
var aLink=$aWrap.find('a[index='+selindex+']');
if(aLink.length!=0){
aLink.trigger('click');}
$('ul',$aWrap).hide();}});
break;
default:
break;}};
$.fn.arcTransform=function(options){
var opt=$.extend({},defaultOptions,options);
return this.each(function(){
var selfForm=$(this);
if(opt.force!=true)
if(selfForm.hasClass('arctransformdone')){return;}
selfForm.addClass('arctransformdone');
selfForm.hide();
$('input:submit, input:reset, input[type="button"]',this).arcTransInputButton();
$('input:text, input:password',this).arcTransInputText();
$('input:checkbox',this).arcTransCheckBox();
$('input:radio',this).arcTransRadio();
selfForm.show();
$('textarea',this).arcTransTextarea();
$('button',this).arcTransButton();
if($('select',this).arcTransSelect().length>0){arcTransformAddDocumentListener();}
if(this.tagName=="FORM"){
selfForm.bind('reset',function(){var action=function(){arcTransformReset(this);};window.setTimeout(action,10);});}
selfForm.show();});};
var modalQueued=false;
$.fn.reveal=function(options){
var defaults={
animation:'fadeAndPop',
Speed:300,
closeOnBackgroundClick:false,
closeOnESC:false,
dismissModalClass:'close-reveal-modal',
open:$.noop,
opened:$.noop,
close:$.noop,
closed:$.noop};
options=$.extend({},defaults,options);
return this.each(function(){
var modal=$(this),
topMeasure=Math.ceil(($(window).height()-modal.height())/3),
topOffset=modal.height()+topMeasure,
leftOffset=Math.ceil(($(window).width()-modal.width())/2),
locked=false,
modalBg=$('.reveal-modal-bg'),
closeButton;
if(modalBg.length===0){
modalBg=$('<div class="reveal-modal-bg" />').insertAfter(modal);
modalBg.fadeTo('fast',0.8);}
function Modal_unlock(){
locked=false;}
function Modal_lock(){
locked=true;}
function closeOpenModals(modal){
var openModals=$(".reveal-modal.open");
if(openModals.length===1){
modalQueued=true;
$(".reveal-modal.open").trigger("reveal:close");}}
function doc_top(){
return(!$.support.leadingWhitespace)?$('html,body').scrollTop():$(document).scrollTop();}
function Animation_open(){
if(!locked){
Modal_lock();
closeOpenModals(modal);
modal.addClass("open");
if(options.animation==="fadeAndPop"){
modal.css({'top':(doc_top()-topOffset),'left':'50%','opacity':0,'visibility':'visible'});
modalBg.fadeIn(options.Speed/2);
modal.delay(options.Speed/2).animate({"top":(doc_top()+topMeasure)+'px',"opacity":1},options.Speed,function(){
modal.trigger('reveal:opened');});}
if(options.animation==="fade"){
modal.css({'opacity':0,'visibility':'visible','top':doc_top()+topMeasure});
modalBg.fadeIn(options.Speed/2);
modal.delay(options.Speed/2).animate({"opacity":1},options.Speed,function(){
modal.trigger('reveal:opened');});}
if(options.animation==="none"){
modal.css({'visibility':'visible','top':doc_top()+topMeasure});
modalBg.css({"display":"block"});
modal.trigger('reveal:opened');}}}
modal.bind('reveal:open.reveal',Animation_open);
function Animation_close(){
if(!locked){
Modal_lock();
modal.removeClass("open");
if(options.animation==="fadeAndPop"){
modal.animate({"top":doc_top()-topOffset+'px',"opacity":0},options.Speed/2,function(){
modal.css({'top':topMeasure,'opacity':1,'visibility':'hidden'});});
if(!modalQueued){
modalBg.delay(options.Speed).fadeOut(options.Speed,function(){
modal.trigger('reveal:closed');});}else{
modal.trigger('reveal:closed');}
modalQueued=false;}
if(options.animation==="fade"){
modal.animate({"opacity":0},options.Speed,function(){
modal.css({'opacity':1,'visibility':'hidden','top':topMeasure});});
if(!modalQueued){
modalBg.delay(options.Speed).fadeOut(options.Speed,function(){
modal.trigger('reveal:closed');});}else{
modal.trigger('reveal:closed');}}
if(options.animation==="none"){
modal.css({'visibility':'hidden','top':topMeasure});
if(!modalQueued){
modalBg.css({'display':'none'});}
modal.trigger('reveal:closed');}}}
function destroy(){
modal.unbind('.reveal');
modalBg.unbind('.reveal');
$('.'+options.dismissModalClass).unbind('.reveal');
$('body').unbind('.reveal');}
modal.bind('reveal:close.reveal',Animation_close);
modal.bind('reveal:opened.reveal reveal:closed.reveal',Modal_unlock);
modal.bind('reveal:closed.reveal',destroy);
modal.bind('reveal:open.reveal',options.open);
modal.bind('reveal:opened.reveal',options.opened);
modal.bind('reveal:close.reveal',options.close);
modal.bind('reveal:closed.reveal',options.closed);
modal.trigger('reveal:open');
closeButton=$('.'+options.dismissModalClass).bind('click.reveal',function(){
modal.trigger('reveal:close');});
if(options.closeOnBackgroundClick){
modalBg.css({"cursor":"pointer"});
modalBg.bind('click.reveal',function(){
modal.trigger('reveal:close');});}
if(options.closeOnESC){
$('body').bind('keyup.reveal',function(event){
if(event.which===27){
modal.trigger('reveal:close');}});}});};
var msie=/[MSIE][Trident]/.test(navigator.userAgent);
var style=document.createElement('div').style,
moz=style['MozBorderRadius']!==undefined,
webkit=style['WebkitBorderRadius']!==undefined,
radius=style['borderRadius']!==undefined||style['BorderRadius']!==undefined,
mode=document.documentMode||0,
noBottomFold=msie&&(!mode||mode<8),
expr=msie&&(function(){
var div=document.createElement('div');
try{div.style.setExpression('width','0+0');div.style.removeExpression('width');}
catch(e){return false;}
return true;})();
$.support=$.support||{};
$.support.borderRadius=moz||webkit||radius;
function sz(el,p){
return parseInt($.css(el,p),10)||0;}
function hex2(s){
s=parseInt(s,10).toString(16);
return(s.length<2)?'0'+s:s;}
function gpc(node){
while(node){
var v=$.css(node,'backgroundColor'),rgb;
if(v&&v!='transparent'&&v!='rgba(0, 0, 0, 0)'){
if(v.indexOf('rgb')>=0){
rgb=v.match(/\d+/g);
return'#'+hex2(rgb[0])+hex2(rgb[1])+hex2(rgb[2]);}
return v;}
if(node.nodeName.toLowerCase()=='html')
break;
node=node.parentNode;}
return'#ffffff';}
function getWidth(fx,i,width){
switch(fx){
case'round':return Math.round(width*(1-Math.cos(Math.asin(i/width))));
case'cool':return Math.round(width*(1+Math.cos(Math.asin(i/width))));
case'sharp':return width-i;
case'bite':return Math.round(width*(Math.cos(Math.asin((width-i-1)/width))));
case'slide':return Math.round(width*(Math.atan2(i,width/i)));
case'jut':return Math.round(width*(Math.atan2(width,(width-i-1))));
case'curl':return Math.round(width*(Math.atan(i)));
case'tear':return Math.round(width*(Math.cos(i)));
case'wicked':return Math.round(width*(Math.tan(i)));
case'long':return Math.round(width*(Math.sqrt(i)));
case'sculpt':return Math.round(width*(Math.log((width-i-1),width)));
case'dogfold':
case'dog':return(i&1)?(i+1):width;
case'dog2':return(i&2)?(i+1):width;
case'dog3':return(i&3)?(i+1):width;
case'fray':return(i%2)*width;
case'notch':return width;
case'bevelfold':
case'bevel':return i+1;
case'steep':return i/2+1;
case'invsteep':return(width-i)/2+1;}}
$.fn.corner=function(options){
if(this.length===0){
if(!$.isReady&&this.selector){
var s=this.selector,c=this.context;
$(function(){
$(s,c).corner(options);});}
return this;}
return this.each(function(index){
var $this=$(this),
o=[$this.attr($.fn.corner.defaults.metaAttr)||'',options||''].join(' ').toLowerCase(),
keep=/keep/.test(o),
cc=((o.match(/cc:(#[0-9a-f]+)/)||[])[1]),
sc=((o.match(/sc:(#[0-9a-f]+)/)||[])[1]),
width=parseInt((o.match(/(\d+)px/)||[])[1],10)||10,
re=/round|bevelfold|bevel|notch|bite|cool|sharp|slide|jut|curl|tear|fray|wicked|sculpt|long|dog3|dog2|dogfold|dog|invsteep|steep/,
fx=((o.match(re)||['round'])[0]),
fold=/dogfold|bevelfold/.test(o),
edges={T:0,B:1},
opts={
TL:/top|tl|left/.test(o),TR:/top|tr|right/.test(o),
BL:/bottom|bl|left/.test(o),BR:/bottom|br|right/.test(o)},
strip,pad,cssHeight,j,bot,d,ds,bw,i,w,e,c,common,$horz;
if(!opts.TL&&!opts.TR&&!opts.BL&&!opts.BR)
opts={TL:1,TR:1,BL:1,BR:1};
if($.fn.corner.defaults.useNative&&fx=='round'&&(radius||moz||webkit)&&!cc&&!sc){
if(opts.TL)
$this.css(radius?'border-top-left-radius':moz?'-moz-border-radius-topleft':'-webkit-border-top-left-radius',width+'px');
if(opts.TR)
$this.css(radius?'border-top-right-radius':moz?'-moz-border-radius-topright':'-webkit-border-top-right-radius',width+'px');
if(opts.BL)
$this.css(radius?'border-bottom-left-radius':moz?'-moz-border-radius-bottomleft':'-webkit-border-bottom-left-radius',width+'px');
if(opts.BR)
$this.css(radius?'border-bottom-right-radius':moz?'-moz-border-radius-bottomright':'-webkit-border-bottom-right-radius',width+'px');
return;}
strip=document.createElement('div');
$(strip).css({
overflow:'hidden',
height:'1px',
minHeight:'1px',
fontSize:'1px',
backgroundColor:sc||'transparent',
borderStyle:'solid'});
pad={
T:parseInt($.css(this,'paddingTop'),10)||0,R:parseInt($.css(this,'paddingRight'),10)||0,
B:parseInt($.css(this,'paddingBottom'),10)||0,L:parseInt($.css(this,'paddingLeft'),10)||0};
if(typeof this.style.zoom!==undefined)this.style.zoom=1;
if(!keep)this.style.border='none';
strip.style.borderColor=cc||gpc(this.parentNode);
cssHeight=$(this).outerHeight();
for(j in edges){
bot=edges[j];
if((bot&&(opts.BL||opts.BR))||(!bot&&(opts.TL||opts.TR))){
strip.style.borderStyle='none '+(opts[j+'R']?'solid':'none')+' none '+(opts[j+'L']?'solid':'none');
d=document.createElement('div');
$(d).addClass('jquery-corner');
ds=d.style;
bot?this.appendChild(d):this.insertBefore(d,this.firstChild);
if(bot&&cssHeight!='auto'){
if($.css(this,'position')=='static')
this.style.position='relative';
ds.position='absolute';
ds.bottom=ds.left=ds.padding=ds.margin='0';
if(expr)
ds.setExpression('width','this.parentNode.offsetWidth');
else
ds.width='100%';}
else if(!bot&&msie){
if($.css(this,'position')=='static')
this.style.position='relative';
ds.position='absolute';
ds.top=ds.left=ds.right=ds.padding=ds.margin='0';
if(expr){
bw=sz(this,'borderLeftWidth')+sz(this,'borderRightWidth');
ds.setExpression('width','this.parentNode.offsetWidth - '+bw+'+ "px"');}
else
ds.width='100%';}
else{
ds.position='relative';
ds.margin=!bot?'-'+pad.T+'px -'+pad.R+'px '+(pad.T-width)+'px -'+pad.L+'px':
(pad.B-width)+'px -'+pad.R+'px -'+pad.B+'px -'+pad.L+'px';}
for(i=0;i<width;i++){
w=Math.max(0,getWidth(fx,i,width));
e=strip.cloneNode(false);
e.style.borderWidth='0 '+(opts[j+'R']?w:0)+'px 0 '+(opts[j+'L']?w:0)+'px';
bot?d.appendChild(e):d.insertBefore(e,d.firstChild);}
if(fold&&$.support.boxModel){
if(bot&&noBottomFold)continue;
for(c in opts){
if(!opts[c])continue;
if(bot&&(c=='TL'||c=='TR'))continue;
if(!bot&&(c=='BL'||c=='BR'))continue;
common={position:'absolute',border:'none',margin:0,padding:0,overflow:'hidden',backgroundColor:strip.style.borderColor};
$horz=$('<div/>').css(common).css({width:width+'px',height:'1px'});
switch(c){
case'TL':$horz.css({bottom:0,left:0});break;
case'TR':$horz.css({bottom:0,right:0});break;
case'BL':$horz.css({top:0,left:0});break;
case'BR':$horz.css({top:0,right:0});break;}
d.appendChild($horz[0]);
var $vert=$('<div/>').css(common).css({top:0,bottom:0,width:'1px',height:width+'px'});
switch(c){
case'TL':$vert.css({left:width});break;
case'TR':$vert.css({right:width});break;
case'BL':$vert.css({left:width});break;
case'BR':$vert.css({right:width});break;}
d.appendChild($vert[0]);}}}}});};
$.fn.uncorner=function(){
if(radius||moz||webkit)
this.css(radius?'border-radius':moz?'-moz-border-radius':'-webkit-border-radius',0);
$('div.jquery-corner',this).remove();
return this;};
$.fn.corner.defaults={
useNative:true,
metaAttr:'data-corner'};})(jQuery);