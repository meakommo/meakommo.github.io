var url_address=document.URL;
function ShowLangMenu(lang_idx)
{
if(top.G_prog!=0){return false;}
if(lang_idx==-1){
lang_idx=GetLang(0);}
if(typeof top.ShowMultiLangPanel=='function'){
top.ShowMultiLangPanel(lang_idx,0);}
else{
parent.ShowMultiLangPanel(lang_idx,1);}
return false;}
function LangHover(obj,flag)
{
var cls=(obj.className+" lang_hover").split(" ");
obj.className=cls[0];
if(flag){
obj.className+=" "+cls[1];}}
function ShowMultiLangPanel(lang_idx,islogin)
{
if($("#multilang_menu",top.document).length==0){
var str_div="";
for(var i in Lang_List){
var idx=findLangIdx(Lang_List[i]);
var LANG=GetLangbyIdx(idx);
var cls='';
if(lang_idx==idx){
cls='class="menu_select"';}
cls+=' onmouseover="LangHover(this,1)" onmouseout="LangHover(this,0)"';
str_div+='<a href="javascript:Select_LANG('+idx+','+islogin+');" ><div '+cls+'>'+LANG[1]+'</div></a>';}
if(str_div){
str_div='<div id="multilang_menu">'+str_div+'</div>';
var oDiv=$(str_div).hide().appendTo($("body",top.document)).hover(function(){;},function(){oDiv.hide();});}}
$("#multilang_menu",top.document).css("left",$("div.align_right",top.document).position().left+4).css("top",$("div.align_right",top.document).position().top+42).toggle();}
function Select_LANG(_idx,_login)
{
if(typeof top.change_language=='function'){
top.change_language(Lang[_idx][0].toLowerCase());
return;}
SetLang(_idx);
var f=(_login==1)?document.tFF:top.topFrame.document.tFF;
var next_url=(_login)?"login.htm":"index.htm";
var szCMD=(typeof(subFormAmLang)=="string")?subFormAmLang:"";
setCfg("uiLanguage",Lang[_idx][0].toLowerCase());
setCfg("amLanguage",Lang[_idx][0].toLowerCase());
subForm({
frm:f,
cmd:szCMD,
done:function(){top.location.href=next_url;},
wait:2});}
function getElementsByFieldName(target_form,field)
{
var i,form,value;
if(target_form==null||field==null){
return-1;}
for(i=0;i<target_form.length;i++){
if(target_form.elements[i].name==field){
return i;}}
return-1;}