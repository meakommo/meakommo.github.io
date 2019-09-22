
addCfg("uiLanguage", "327680000000", "en");
var rt_wan="";
var g_ethWan=0;
var menu_mode=0;
var bIsMobileBrowser=false;
function doLogout()
{
var f=document.tF_Logout;
if(top.G_prog!=0){return false;}
return subForm({
frm:f,
genfrm:0,
wait:2,
noprogress:1});}
function iframe_reload(location_str){
var url=location_str.substring(location_str.lastIndexOf('/')+1,location_str.lastIndexOf('?'))
var menuObj=search_menuList_byUrl(url);
if(menuObj){
var check_main=function(sel_id){
if(!$("#"+sel_id).hasClass('menu_selected')){
$("#"+sel_id).siblings(".menu_selected").removeClass('menu_selected').addClass('menu');
$("#"+sel_id).removeClass('menu').addClass('menu_selected');
var group=sel_id.substr("group_".length);
var menu=search_menuList_byId(1,group);
drawMenu(menu,"tabMenu_ul");
check_tabMenu_overflow(search_menuList_byId(1,group),menu);
draw_dropdown_menu(menu);
if(menu.length<=0){
DeleteCookie("sel_tabmenu");}
SetCookie("sel_menu",sel_id);
set_top_navStr();}},check_sub=function(sel_id){
if(!$("#"+sel_id).hasClass('menu_selected')&&sel_id.indexOf("dropdown_")<0){
var idx=parseInt(sel_id.substr("idx_".length),10);
var $parent=$("#"+sel_id).parents("li[id^=dropdown_]");
if($parent.length==1){
$parent.siblings(".menu_selected").removeClass('menu_selected').addClass('menu');
$parent.removeClass('menu hover').addClass('menu_selected');
if(!$parent.is(":visible")){
setTimeout(function(){$("#tabMenu .menu_right").click();},700);}}
$("#"+sel_id).siblings(".menu_selected").removeClass('menu_selected').addClass('menu');
$("#"+sel_id).removeClass('menu hover').addClass('menu_selected');
SetCookie("sel_tabmenu",sel_id);
set_top_navStr(MenuList[idx][MENU_TITL]);}};
if(parseInt(menuObj[MENU_LVL],10)==0)
check_main("group_"+menuObj[MENU_GRP]);
else{
check_main("group_"+menuObj[MENU_GRP]);
if(menuObj[MENU_ELM].firstChild)
check_sub("dropdown_"+menuObj[MENU_ELM].idx);
check_sub("idx_"+menuObj[MENU_ELM].idx);}}}
function goto_page(url){
var menuObj=search_menuList_byUrl(url);
if(menuObj){
if(menuObj[MENU_ON]>menu_mode){
SetCookie("goto",url);
$("input[name=mode][value=7]").arcTransformRadioLnkClick();
$("div.access_mode [name=mode][value=7]").trigger('click');
return;}
if(parseInt(menuObj[MENU_LVL],10)==0)
select_menu("group_"+menuObj[MENU_GRP]);
else{
select_menu("group_"+menuObj[MENU_GRP]);
select_menu("idx_"+menuObj[MENU_ELM].idx);}}}
function count_tabMenu_maxli(){
var max_width=$("div.bottom_right").width();
var arrow_wd=$("div.menu_right").outerWidth();
var count_w=0,li_num=0;
$("#tabMenu_ul>ul>li").each(function(i,elm){
var $ulDropDown=$(elm).children("ul.drop_down");
if($ulDropDown){
var outerWidth=$ulDropDown.outerWidth()+$(elm).position().left;
if(max_width<outerWidth){
outerWidth=$(elm).outerWidth()-$ulDropDown.outerWidth();
$ulDropDown.css({"margin-left":outerWidth});}}
count_w+=$(elm).width();
if((count_w+arrow_wd)>max_width)
return false;
li_num++;});
return li_num;}
function set_top_navStr(submenu_str){
var main=$("#main_menu").find("li.menu_selected a");
var sub="";
if(typeof submenu_str=='undefined'){
if($("#tabMenu_ul").find("li.menu_selected a").length>0)
sub=$("#tabMenu_ul").find("li.menu_selected a").html();}
else{
$("#tabMenu_ul").find("li.menu_selected").each(function(i){
var _text=$(this).find("a:first").text();
if(_text==submenu_str)
return false;
sub=_text+"&nbsp;&gt;&nbsp;";});
sub+=submenu_str;}
top.G_menu_nav=((main.length>0)?main.html():"")+((sub.length>0)?("&nbsp;&gt;&nbsp;"+sub):"");
top.G_menu_title=sub;}
function select_menu(sel_id,e){
if(top.G_prog!=0||$("#"+sel_id).hasClass('running_slide'))
return;
var eth=$("#frm_main2")[0].contentWindow.rt_wan;
if((typeof eth!='undefined'&&eth=="GBE")||rt_wan=="GBE")
g_ethWan=1;
else
g_ethWan=0;
var e=e||window.event;
if(e){
if(e.stopPropagation)
e.stopPropagation();
else
e.cancelBubble=true;}
var url="",target="";
if(sel_id.indexOf("group")>=0){
$("#"+sel_id).siblings(".menu_selected").removeClass('menu_selected').addClass('menu');
$("#"+sel_id).removeClass('menu').addClass('menu_selected');
var group=sel_id.substr("group_".length);
var menu=search_menuList_byId(1,group);
drawMenu(menu,"tabMenu_ul");
draw_dropdown_menu(menu);
if(menu.length>0){
if(menu[0][MENU_ELM].firstChild)
$("#dropdown_"+menu[0][MENU_ELM].idx).removeClass('menu').addClass('menu_selected');
else
$("#idx_"+menu[0][MENU_ELM].idx).removeClass('menu').addClass('menu_selected');
url=menu[0][MENU_ELM].data.link;
target=menu[0][MENU_ELM].data.target;
SetCookie("sel_tabmenu","idx_"+menu[0][MENU_ELM].idx);}
else{
menu=search_menuList_byId("0");
for(var i=0;i<menu.length;i++){
if(menu[i][MENU_GRP]==parseInt(group,10)){
url=menu[i][MENU_URL];
target="main2";
break;}}
DeleteCookie("sel_tabmenu");}
SetCookie("sel_menu",sel_id);
set_top_navStr();
check_tabMenu_overflow(search_menuList_byId(1,group),menu);}
else{
if($("#"+sel_id).find("ul.drop_down").length)
return;
var idx=parseInt(sel_id.substr("idx_".length),10);
$("#tabMenu_ul>ul li.menu_selected").removeClass('menu_selected').addClass('menu');
var $parent=$("#"+sel_id).parents("li[id^=dropdown_]");
if($parent.length==1){
$parent.removeClass('menu hover').addClass('menu_selected');
if(!$parent.is(":visible")){
setTimeout(function(){$("#tabMenu .menu_right").click();},700);}}
else{
if(!$("#"+sel_id).is(":visible")){
setTimeout(function(){$("#tabMenu .menu_right").click();},500);}}
$("#"+sel_id).removeClass('menu hover').addClass('menu_selected');
url=MenuList[idx][MENU_URL];
target=MenuList[idx][MENU_ELM].data.target;
SetCookie("sel_tabmenu",sel_id);
set_top_navStr(MenuList[idx][MENU_TITL]);}
window_location_replace(target,url);}
function check_tabMenu_overflow(org_menu,show_menu){
var max_li=count_tabMenu_maxli();
if(org_menu.length>max_li){
if(show_menu.length>=max_li){
$("#tabMenu .menu_right").show();
$("#tabMenu .menu_left").hide();
$("#tabMenu_ul>ul>li:eq("+(max_li-1)+")").nextAll().hide();
$("#tabMenu_ul>ul>li:eq("+(max_li)+")").prevAll().show();}
else{
$("#tabMenu_ul").css("left","36px");
$("#tabMenu .menu_right").hide();
$("#tabMenu .menu_left").show();
$("#tabMenu_ul>ul>li:eq("+(max_li)+")").prevAll().hide();
$("#tabMenu_ul>ul>li:eq("+(max_li-1)+")").nextAll().show();}}}
function prepare_dropdown_menulist(arr_menu){
var i=0,len=arr_menu.length;
var html_code="<ul class='drop_down'>";
for(i=0;i<len;i++){
id="idx_"+arr_menu[i].idx;
if(i>0)
html_code+="<li class='divider'></li>";
html_code+="<li id='"+id+"' class='menu' onclick='select_menu(\""+id+"\", event);'><a href='#'>"+arr_menu[i].caption+"</a></li>";}
html_code+="</ul>";
return html_code;}
function draw_dropdown_menu(tab_menu){
var i=0,len=tab_menu.length;
var drop_down=[],tab_elmObj,obj;
for(i=0;i<len;i++){
tab_elmObj=tab_menu[i][MENU_ELM];
if(tab_elmObj.firstChild){
obj=tab_elmObj.firstChild;
if(obj.enable()>0)
drop_down.push(tab_elmObj.firstChild);
while(obj.next){
if(obj.next.enable()>0)
drop_down.push(obj.next);
obj=obj.next;}
$("#dropdown_"+tab_elmObj.idx).find("a").append("<span class='caret'></span>");
var oMenuItem=$("#dropdown_"+tab_elmObj.idx).append(prepare_dropdown_menulist(drop_down));
if(bIsMobileBrowser){
oMenuItem.on("mouseenter touchstart",function(event){
var $this=$(this);
$this.addClass("hover");});}
else{
oMenuItem.mouseenter(function(event){
var $this=$(this);
$this.addClass("hover");});}
oMenuItem.mouseleave(function(event){
var $this=$(this);
if($this.hasClass("hover"))
$this.removeClass("hover");
$("#"+GetCookie("sel_tabmenu")).addClass("menu_selected");}).find("li").mouseenter(function(event){
var $this=$(this);
$this.siblings('.menu_selected').removeClass('menu_selected');});}
drop_down=[];}}
function drawMenu(menu,div_id){
$("#"+div_id).attr("style","").html("");
$("#tabMenu .menu_right, #tabMenu .menu_left").hide();
var id,i,html_code="",len=menu.length;
if(len>0){
html_code="<ul>";
for(i=0;i<len;i++){
id=(div_id=="main_menu")?("group_"+menu[i][MENU_GRP]):("idx_"+menu[i][MENU_ELM].idx);
if(div_id=="tabMenu_ul"&&menu[i][MENU_ELM].firstChild)
id="dropdown_"+menu[i][MENU_ELM].idx;
html_code+="<li id='"+id+"' class='menu' onclick='select_menu(\""+id+"\");'><a href='#'>"+menu[i][MENU_TITL]+"</a></li>";}
html_code+="</ul>";}
$("#"+div_id).html(html_code);
if(div_id=="tabMenu_ul"){
$("#tabMenu_ul>ul>li").mouseover(function(){
$(this).siblings(".hover").removeClass('hover');
$(this).siblings().find("ul.hover").removeClass("hover");});}}
var menu_root={};
var search_menuList_byId;
var search_menuList_byUrl=function(url){
var obj=menu_root.firstChild;
var findGroup=[];
do{
if(obj.data.link==url&&obj.firstChild==null)
return MenuList[obj.idx];
findGroup.push(obj.group);
if(obj.firstChild)
obj=obj.firstChild;
else if(obj.next)
obj=obj.next;
else
obj=obj.parent.next;}while(obj);
var i=0,len=MenuList.length-1;
for(i=0;i<len;i++){
if(MenuList[i][MENU_URL]==url&&parseInt(MenuList[i][MENU_LVL],10)==0)
return MenuList[i];}
return null;};
function isMobileBrowser()
{
if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)){
return true;}
if(navigator.userAgent.match(/Android/i)){
if(navigator.userAgent.match(/Mobile/i)||navigator.userAgent.match(/Tablet/i)){
return true;}}
if(navigator.userAgent.match(/Opera/i)){
if(navigator.userAgent.match(/Mobi/i)||navigator.userAgent.match(/Mini/i)){
return true;}}
if(navigator.userAgent.match(/IEMobile/i)){
return true;}
if(navigator.userAgent.match(/BlackBerry/i)){
return true;}
return false;}
function init(){
bIsMobileBrowser=isMobileBrowser();
if(bIsMobileBrowser){
$("div.bottom_right div").css({"overflow":"auto","-webkit-overflow-scrolling":"touch"});}
menu_mode=realm;
var build_menu=function(){
(function(){
var MenuItem=function(name,link,target){
this.name=name;
this.link=link;
this.target=target;};
var TreeItem_class=function(){
this.group=0;
this.parent=null;
this.level=0;
this.caption='';
this.selected=false;
this.expanded=false;
this.firstChild=null;
this.lastChild=null;
this.next=null;
this.data=null;
this.idx=0;
this.enable=function(){
var idx=this.idx;
var Menu_On=1;
if(typeof(MenuList[idx][MENU_ON])!="undefined"){
if(typeof(MenuList[idx][MENU_ON])=="function"){
Menu_On=MenuList[idx][MENU_ON]();}
else{
Menu_On=MenuList[idx][MENU_ON];}}
return Menu_On;}};
var Tree_AddItem=function(parent,caption,data,group,idx){
if(parent==null&&!show_alert){
show_alert=true;
alert(str_empty_item);
return null;}
var item=new TreeItem_class();
item.group=group;
item.parent=parent;
item.caption=caption;
item.data=data;
if(item.parent!=null){
item.level=item.parent.level+1;
if(item.parent.firstChild==null)
item.parent.firstChild=item;
if(item.parent.lastChild!=null)
item.parent.lastChild.next=item;
item.parent.lastChild=item;}
item.idx=idx;
return item;};
menu_root=new TreeItem_class();
menu_root.caption='ROOT';
var item1=null,
item2=null;
var Menu_group=-1;
var Menu_lvl=1;
var Menu_On=1;
var Menu_expend=1;
var Menu_title,Menu_target="";
for(var x=0;x<MenuList.length;x++){
if(!MenuList[x])continue;
if(!MenuList[x][MENU_ON])continue;
Menu_lvl=parseInt(MenuList[x][MENU_LVL],10);
if(Menu_lvl==0){
Menu_group++;
MenuList[x][MENU_GRP]=Menu_group;}
Menu_expend=false;
Menu_target="main2";
if("undefined"!=typeof(MenuList[x][MENU_TARGET])){
Menu_target=MenuList[x][MENU_TARGET];}
Menu_title=MenuList[x][MENU_TITL];
if(getLangM(Menu_title))Menu_title=getLangM(Menu_title);
MenuList[x][MENU_TITL]=Menu_title;
switch(Menu_lvl){
default:
case 0:
MenuList[x][MENU_GRP]=Menu_group;
break;
case 1:
item1=Tree_AddItem(menu_root,Menu_title,new MenuItem(MenuList[x][MENU_NAME],MenuList[x][MENU_URL],Menu_target),Menu_group,x);
MenuList[x][MENU_ELM]=item1;
MenuList[x][MENU_GRP]=Menu_group;
break;
case 2:
item2=Tree_AddItem(item1,Menu_title,new MenuItem(MenuList[x][MENU_NAME],MenuList[x][MENU_URL],Menu_target),Menu_group,x);
MenuList[x][MENU_ELM]=item2;
MenuList[x][MENU_GRP]=Menu_group;
break;}}})();
function search_MenuList(level,group){
var i=0,len=MenuList.length-1;
var ret=[],en=0;
level=level.toString();
for(i=0;i<len;i++){
en=0;
if(MenuList[i][MENU_LVL]==level){
if(typeof(MenuList[i][MENU_ELM])=='object')
en=MenuList[i][MENU_ELM].enable();
else
en=MenuList[i][MENU_ON];
if(g_ethWan==1&&MenuList[i][MENU_NAME]=="fiber")
en=0;
if(en>0){
if(typeof group!='undefined'){
if(MenuList[i][MENU_GRP]==parseInt(group,10))
ret.push(MenuList[i]);}
else
ret.push(MenuList[i]);}}}
return ret;}
return{
getMenu:search_MenuList};}();
search_menuList_byId=build_menu.getMenu;
$("input[name=mode][value="+menu_mode+"]").prop("checked",true).attr("checked","checked");
$("select[name=sel_lang]").val(getCfg("uiLanguage"));
var header_ht=$("div.header").outerHeight();
var bot_ht=$(window).height()-header_ht;
bot_ht=((bot_ht<header_ht)?header_ht:bot_ht);
$(".bottom_right").height(bot_ht);
$(window).resize(function(){
var header_ht=$("div.header").outerHeight();
var bot_ht=$(window).height()-header_ht;
bot_ht=((bot_ht<header_ht)?header_ht:bot_ht);
$(".bottom_right").height(bot_ht);});
var menu=build_menu.getMenu("0");
var findIn_mainMenu=function(menu,elmId){
var i=0,len=menu.length;
for(i=0;i<len;i++){
if(("group_"+menu[i][MENU_GRP])==elmId)
return true;}
return false;};
drawMenu(menu,"main_menu");
if(GetCookie("sel_menu")&&findIn_mainMenu(menu,GetCookie("sel_menu"))){
var main=GetCookie("sel_menu"),tab=GetCookie("sel_tabmenu");
if(main)
select_menu(main);
var li_id=[];
$("#tabMenu_ul>ul>li").each(function(){li_id.push(this.id)});
if(tab){
if($.inArray(tab,li_id)>=0)
select_menu(tab);
else{
$.each(li_id,function(key,val){
if(val.indexOf("dropdown_")>=0&&$("#"+val+">ul>li").filter("[id="+tab+"]").length>0){
select_menu(val);
select_menu(tab);}});}}}
else
select_menu("group_"+menu[0][MENU_GRP]);
if($("#main_menu").height()>($(window).height()-$(".header").height()))
$("#main_menu ul").width("250px");
$("select[name=sel_lang]").val(getCfg("uiLanguage"));
$("[name=logout]").val(getLangM("200040"));
$("div.header").arcTransform();
$("div.access_mode [name=mode]").click(function(){
if(menu_mode!=this.value){
if(this.value>realm){
popup_login();
return;}
menu_mode=this.value;
var menu=build_menu.getMenu("0");
drawMenu(menu,"main_menu");
if(GetCookie("goto")){
goto_page(GetCookie("goto"));
DeleteCookie("goto");}
else
select_menu("group_0");}});
$("#tabMenu .menu_left, #tabMenu .menu_right").click(function(event){
if($(this).hasClass("running_slide"))
return;
var group=$("#main_menu li.menu_selected").attr("id").substr("group_".length);
var menu=search_menuList_byId(1,group);
var $this=$(this),
enable_click_handler=function(en){
if(en){
$this.removeClass("running_slide");
$("[id^=group_]").removeClass("running_slide");}
else{
$this.addClass("running_slide");
$("[id^=group_]").addClass("running_slide");}};
if(this.className=="menu_right"){
enable_click_handler(0);
$("#tabMenu").css("overflow","hidden");
$("#tabMenu_ul").animate({"left":"-700px"},"slow",function(){
menu.splice(0,count_tabMenu_maxli());
check_tabMenu_overflow(search_menuList_byId(1,group),menu);
$("#tabMenu").css("overflow","");
enable_click_handler(1);});}
else{
enable_click_handler(0);
$("#tabMenu_ul").animate({"left":"944px"},"slow",function(){
$(this).css('left','0');
menu.splice(count_tabMenu_maxli());
check_tabMenu_overflow(search_menuList_byId(1,group),menu);
enable_click_handler(1);});}});
$("body").click(function(){
var $parent=$("#tabMenu_ul");
$parent.find("ul.drop_down").removeClass("hover");
$parent.find("li.hover").removeClass('hover');});
if(GetCookie("goto")){
goto_page(GetCookie("goto"));
DeleteCookie("goto");}}
function change_language(val){
SetLang(val.toUpperCase());
setCfg("uiLanguage",val);
subForm({
done:function(){top.location.href="index.htm";},
wait:2});}
function popup_login(){
$(".overlay_all").show();
$("#popup_login").fadeIn("slow").find("table [id]").each(function(){
if(this.id!="err_msg")
doTrans(this,getLangM(this.id));});
$("#err_msg").hide();
$("[name=login]").val(getLangM("960004"));
$("[name=close]").val(getLangM("100002"));
doTrans($("#exp_login")[0],getLangM("exp_login"));
$("#popup_login").arcTransform();
$("#popup_login table input").val("");
$("#popup_login [name=usr_name]").focus();
$("#popup_login").keypress(function(e){
if(e.keyCode==13){
e.preventDefault();
e.stopImmediatePropagation();
return do_login();}});}
function do_login(){
var enter_exp=function(){
DeleteCookie("sel_tabmenu");
DeleteCookie("sel_menu");
top.location.href="index.htm";};
var login_fail=function(err){
if(err==1){
$("#err_msg").show().find("td").html("<b>"+getLangM("960203")+"</b>");}
else if(err==2){
top.location.href="login.htm?err=2";}
else if(err==3){
$("#err_msg").show().find("td").html("<b>"+getLangM("960208")+"</b>");}
else
$("#err_msg").hide();};
var login_ok=function(){
enter_exp();};
var en_loading=function(en){
if(en){
$("[name=loading]").show();
$("#popup_login .arctransformdone").jqDisabled(1);
$("#popup_login input").prop("disabled",true);
$("#login, #close").css("pointer-events","none");}
else{
$("[name=loading]").hide();
$("#popup_login .arctransformdone").jqDisabled(0);
$("#popup_login input").prop("disabled",false);
$("#login, #close").css("pointer-events","");}};
var data={"ajax":1};
var pwd=do_encode($("[name=usr_pwd]").val(),true);
data["pws"]=pwd;
var user=do_encode($("[name=usr_name]").val(),true);
data["usr"]=user;
data["httoken"]=ArcBase._t();
en_loading(1);
$.ajax({
method:"POST",
url:"relogin.cgi",
data:data,
dataType:"text",
success:function(res,status,xhr){
var err=Number(res.substr(4,1));
if(err>0){
refreshToken(res);
login_fail(err);}else{
login_ok();}
en_loading(0);},
error:function(xhr,textStatus){
if(typeof xhr.responseText!='undefined'){
var err=Number(xhr.responseText.substr(4))||0;
if(err>0)
login_fail(err);
else
login_ok();
en_loading(0);}},
timeout:5000});
return false;}
function close_login(cancel){
$("#popup_login").fadeOut("slow",function(){
$(".overlay_all").hide();
if(cancel){
$("[name=mode][value=5]").prop("checked",true).jqSetValue();
$("[name=mode][value=7]").prop("checked",false).jqSetValue();}});}