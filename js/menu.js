
var operation_func=8;
var vlan_func_enable=0;
var custom_page_flag=2;
var my_usb=1;
var MENU_LVL=0;
var MENU_TITL=1;
var MENU_NAME=2;
var MENU_URL=3;
var MENU_ON=4;
var MENU_TARGET=5;
var MENU_GRP=6;
var MENU_ELM=7;
var MENU_USER=5;
var MENU_SUPER=7;
var realm=MENU_SUPER;
var tmpRealm=parseInt("",10);
switch(tmpRealm){
case MENU_USER:
case MENU_SUPER:
realm=tmpRealm;}
var MenuList=[
['0','m_OVERVIEW','overview','status.htm',MENU_USER],
['1','state','overview','home_map.htm',MENU_USER],
['1','conn_dev','connected_dev','clients.htm',MENU_USER],
['1','220001','network_status','status.htm',MENU_USER],
['1','221001','modem','router_status.htm',MENU_USER],
['1','222002','dsl_inf','dsl_status.htm',MENU_SUPER],
['1','223000','systemlog','security_log.htm',MENU_SUPER],
['2','223001','systemlog','security_log.htm',MENU_SUPER],
['2','223002','dhcplog','dhcp_status.htm',MENU_SUPER],
['2','223003','wifilog','wifi_log.htm',MENU_SUPER],
['0','m_INTERNET','internet','lan.htm',MENU_SUPER],
['1','130000','lan','lan.htm',MENU_SUPER],
['2','130000','lan','lan.htm',MENU_SUPER],
['2','130100','lan_dhcp_static','lan_dhcp_static.htm',MENU_SUPER],
['1','120000','wan_detect','wan_detect.htm',MENU_SUPER],
['1','132000','wan_lte_set','lte_config.htm',MENU_SUPER],
['1','133000','wan_lte_state','lte_status.htm',MENU_SUPER],
['1','170000','firewall','firewall_main.htm',MENU_SUPER],
['2','170000','firewall','firewall_main.htm',MENU_SUPER],
['2','170100','firewall_ac','firewall_ac.htm',MENU_SUPER],
['2','170200','firewall_mac','parentalControl.htm',MENU_SUPER],
['2','170300','firewall_u','firewall_url.htm',MENU_SUPER],
['2','170400','firewall_rul','firewall_schedule.htm',MENU_SUPER],
['2','170500','firewall_spi_h','firewall_spi_h.htm',MENU_SUPER],
['2','170600','firewall_d','firewall_dmz.htm',MENU_SUPER],
['1','180000','dynamic_dns','dynamic_dns.htm',MENU_SUPER],
['1','150000','nat','nat.htm',MENU_SUPER],
['2','150000','nat','nat.htm',MENU_SUPER],
['2','150200','nat_port_map','nat_port_map.htm',MENU_SUPER],
['2','150300','nat_sp','nat_sp.htm',MENU_SUPER],
['2','150400','nat_tbl','nat_show.htm',MENU_SUPER],
['1','200000','qos_main','qos_main.htm',MENU_SUPER],
['2','200000','qos_main','qos_main.htm',MENU_SUPER],
['2','200100','qos_traffic_map','qos_traffic_map.htm',MENU_SUPER],
['1','160000','routing','routing_table.htm',MENU_SUPER],
['2','160000','routing','routing_table.htm',MENU_SUPER],
['2','161000','routing_static','routing_static.htm',MENU_SUPER],
['2','162000','routing_rip','routing_rip.htm',MENU_SUPER],
['1','290000','ipv6','ipv6.htm',MENU_SUPER],
['1','190000','upnp','upnp.htm',MENU_SUPER],
['1','290000','ipv6','ipv6.htm',MENU_SUPER],
['0','m_WLAN','WLAN','wlan_combine.htm',MENU_USER],
['1','m_WLAN','wireless','wlan_combine.htm',MENU_USER],
['1','356001','2.4G','wlan_24g.htm',MENU_USER],
['1','357001','5G','wlan_5g.htm',MENU_USER],
['1','352001','Wireless MAC Filter','wlan_mac_filter.htm',MENU_SUPER],
['1','354001','Guest Map','wlan_guest.htm',MENU_SUPER],
['1','355001','WLAN Scheduler','wlan_sch.htm',MENU_SUPER],
['1','350001','WiFi-fon','wlan_fon.htm',MENU_SUPER],
['0','260000','usb_main','usb_device.htm',MENU_SUPER],
['1','261000','usb_device','usb_device.htm',MENU_SUPER],
['1','263000','usb_media','usb_media.htm',MENU_SUPER],
['1','262000','usb_user','usb_user.htm',MENU_SUPER],
['1','264000','usb_service','usb_service.htm',MENU_SUPER],
['0','m_ADMINISTRATION','administration','system_p.htm',MENU_SUPER],
['1','112000','system_p','system_p.htm',MENU_SUPER],
['1','111000','system_t','system_t.htm',MENU_SUPER],
['1','113000','system_remote_mgmt','system_remote_mgmt.htm',MENU_SUPER],
['1','230200','system_f','system_f.htm',MENU_SUPER],
['1','230300','settingBackup','system_backup.htm',MENU_SUPER],
['1','230400','system_r','system_r.htm',MENU_SUPER],
null];