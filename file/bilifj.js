/ *
bilibili粉丝剧开放1080P +
来自https://github.com/Sunert/Scripts/blob/master/Script/Bilibili/BiliHD.js
QX：
https：\ / \ / ap（p | i）\。bilibili \ .com \ /（（（pgc \ / player \ / api \ / playurl）|（x \ / v2 \ / account \ / myinfo \？）|（ x \ / v2 \ / account / mine \？））网址脚本响应正文BiliHD.js
QX MITM = api.bilibili.com
* /

var  body  =  $ response 。身体;
var  url  =  $ request 。网址;

const  path1  =  '/ pgc / player / api / playurl' ;
const  path2  =  “ / x / v2 /帐户/ myinfo？” ;
const  path3  =  “ / x / v2 / account / mine \？” ;
如果 （URL 。的indexOf （PATH1 ）！= - 1 ） {
    让 obj  =  JSON 。解析（身体）;
    obj [ “ has_paid” ]  =  true ；
	obj [ “ quality” ]  =  obj [ “ accept_quality” ] [ 0 ] ;
	obj 。vip_type  =  2 ;
	obj 。vip_status  =  1 ;
 	body  =  JSON 。stringify （obj ）;
 } ;
如果 （URL 。的indexOf （PATH2 ）！= - 1 ）{
  让 obj  =  JSON 。解析（身体）;
    obj [ “ data” ] [ “ vip” ] [ “ type” ]  =  2 ;
    obj [ “ data” ] [ “ vip” ] [ “ status” ]  =  1 ;
    obj [ “ data” ] [ “ vip” ] [ “ vip_pay_type” ]  =  1 ;
    obj [ “ data” ] [ “ vip” ] [ “ due_date” ]  =  1669824160 ;

   body = JSON 。stringify （obj ）;
 } ;

如果 （URL 。的indexOf （path3时）！= - 1 ）{
  让 obj  =  JSON 。解析（身体）;
     obj [ “ data” ] [ “ vip_type” ]  =  2 ;
     obj [ “ data” ] [ “ vip” ] [ “ type” ]  =  2 ;
     obj [ “ data” ] [ “ vip” ] [ “ status” ]  =  1 ;
     obj [ “ data” ] [ “ vip” ] [ “ vip_pay_type” ]  =  1 ;
     obj [ “ data” ] [ “ vip” ] [ “ due_date” ]  =  1669824160 ;
   body = JSON 。stringify （obj ）;
} ;

 $ done （{ body } ）;
