
var usr_refer_lang="en";
var non_top='index.htm';
var L_dbg=1;
var gexpTrim=/^\s+|\s+$/g;
var G_arcTrans=1;
var cgi_lang_list="EN NL";
var CGI_PREFIX=("undefined"==typeof(CGI_PREFIX))?"":CGI_PREFIX;
var sAscii=" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sAscii=sAscii+"[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
var sHex="0123456789abcdef";
function hex(i)
{
h="";
for(j=0;j<=3;j++){
h+=sHex.charAt((i>>(j*8+4))&0x0F)+sHex.charAt((i>>(j*8))&0x0F);}
return h;}
function add(x,y){
return((x&0x7FFFFFFF)+(y&0x7FFFFFFF))^(x&0x80000000)^(y&0x80000000);}
function R1(A,B,C,D,X,S,T){
q=add(add(A,(B&C)|(~B&D)),add(X,T));
return add((q<<S)|((q>>(32-S))&(Math.pow(2,S)-1)),B);}
function R2(A,B,C,D,X,S,T){
q=add(add(A,(B&D)|(C&~D)),add(X,T));
return add((q<<S)|((q>>(32-S))&(Math.pow(2,S)-1)),B);}
function R3(A,B,C,D,X,S,T){
q=add(add(A,B^C^D),add(X,T));
return add((q<<S)|((q>>(32-S))&(Math.pow(2,S)-1)),B);}
function R4(A,B,C,D,X,S,T){
q=add(add(A,C^(B|~D)),add(X,T));
return add((q<<S)|((q>>(32-S))&(Math.pow(2,S)-1)),B);}
function calcMD5(sInp){
wLen=(((sInp.length+8)>>6)+1)<<4;
var X=new Array(wLen);
j=4;
for(i=0;(i*4)<sInp.length;i++){
X[i]=0;
for(j=0;(j<4)&&((j+i*4)<sInp.length);j++){
X[i]+=(sAscii.indexOf(sInp.charAt((i*4)+j))+32)<<(j*8);}}
if(j==4){
X[i++]=0x80;}else{
X[i-1]+=0x80<<(j*8);}
for(;i<wLen;i++){
X[i]=0;}
X[wLen-2]=sInp.length*8;
a=0x67452301;
b=0xefcdab89;
c=0x98badcfe;
d=0x10325476;
for(i=0;i<wLen;i+=16){
aO=a;
bO=b;
cO=c;
dO=d;
a=R1(a,b,c,d,X[i+0],7,0xd76aa478);
d=R1(d,a,b,c,X[i+1],12,0xe8c7b756);
c=R1(c,d,a,b,X[i+2],17,0x242070db);
b=R1(b,c,d,a,X[i+3],22,0xc1bdceee);
a=R1(a,b,c,d,X[i+4],7,0xf57c0faf);
d=R1(d,a,b,c,X[i+5],12,0x4787c62a);
c=R1(c,d,a,b,X[i+6],17,0xa8304613);
b=R1(b,c,d,a,X[i+7],22,0xfd469501);
a=R1(a,b,c,d,X[i+8],7,0x698098d8);
d=R1(d,a,b,c,X[i+9],12,0x8b44f7af);
c=R1(c,d,a,b,X[i+10],17,0xffff5bb1);
b=R1(b,c,d,a,X[i+11],22,0x895cd7be);
a=R1(a,b,c,d,X[i+12],7,0x6b901122);
d=R1(d,a,b,c,X[i+13],12,0xfd987193);
c=R1(c,d,a,b,X[i+14],17,0xa679438e);
b=R1(b,c,d,a,X[i+15],22,0x49b40821);
a=R2(a,b,c,d,X[i+1],5,0xf61e2562);
d=R2(d,a,b,c,X[i+6],9,0xc040b340);
c=R2(c,d,a,b,X[i+11],14,0x265e5a51);
b=R2(b,c,d,a,X[i+0],20,0xe9b6c7aa);
a=R2(a,b,c,d,X[i+5],5,0xd62f105d);
d=R2(d,a,b,c,X[i+10],9,0x2441453);
c=R2(c,d,a,b,X[i+15],14,0xd8a1e681);
b=R2(b,c,d,a,X[i+4],20,0xe7d3fbc8);
a=R2(a,b,c,d,X[i+9],5,0x21e1cde6);
d=R2(d,a,b,c,X[i+14],9,0xc33707d6);
c=R2(c,d,a,b,X[i+3],14,0xf4d50d87);
b=R2(b,c,d,a,X[i+8],20,0x455a14ed);
a=R2(a,b,c,d,X[i+13],5,0xa9e3e905);
d=R2(d,a,b,c,X[i+2],9,0xfcefa3f8);
c=R2(c,d,a,b,X[i+7],14,0x676f02d9);
b=R2(b,c,d,a,X[i+12],20,0x8d2a4c8a);
a=R3(a,b,c,d,X[i+5],4,0xfffa3942);
d=R3(d,a,b,c,X[i+8],11,0x8771f681);
c=R3(c,d,a,b,X[i+11],16,0x6d9d6122);
b=R3(b,c,d,a,X[i+14],23,0xfde5380c);
a=R3(a,b,c,d,X[i+1],4,0xa4beea44);
d=R3(d,a,b,c,X[i+4],11,0x4bdecfa9);
c=R3(c,d,a,b,X[i+7],16,0xf6bb4b60);
b=R3(b,c,d,a,X[i+10],23,0xbebfbc70);
a=R3(a,b,c,d,X[i+13],4,0x289b7ec6);
d=R3(d,a,b,c,X[i+0],11,0xeaa127fa);
c=R3(c,d,a,b,X[i+3],16,0xd4ef3085);
b=R3(b,c,d,a,X[i+6],23,0x4881d05);
a=R3(a,b,c,d,X[i+9],4,0xd9d4d039);
d=R3(d,a,b,c,X[i+12],11,0xe6db99e5);
c=R3(c,d,a,b,X[i+15],16,0x1fa27cf8);
b=R3(b,c,d,a,X[i+2],23,0xc4ac5665);
a=R4(a,b,c,d,X[i+0],6,0xf4292244);
d=R4(d,a,b,c,X[i+7],10,0x432aff97);
c=R4(c,d,a,b,X[i+14],15,0xab9423a7);
b=R4(b,c,d,a,X[i+5],21,0xfc93a039);
a=R4(a,b,c,d,X[i+12],6,0x655b59c3);
d=R4(d,a,b,c,X[i+3],10,0x8f0ccc92);
c=R4(c,d,a,b,X[i+10],15,0xffeff47d);
b=R4(b,c,d,a,X[i+1],21,0x85845dd1);
a=R4(a,b,c,d,X[i+8],6,0x6fa87e4f);
d=R4(d,a,b,c,X[i+15],10,0xfe2ce6e0);
c=R4(c,d,a,b,X[i+6],15,0xa3014314);
b=R4(b,c,d,a,X[i+13],21,0x4e0811a1);
a=R4(a,b,c,d,X[i+4],6,0xf7537e82);
d=R4(d,a,b,c,X[i+11],10,0xbd3af235);
c=R4(c,d,a,b,X[i+2],15,0x2ad7d2bb);
b=R4(b,c,d,a,X[i+9],21,0xeb86d391);
a=add(a,aO);
b=add(b,bO);
c=add(c,cO);
d=add(d,dO);}
return hex(a)+hex(b)+hex(c)+hex(d);}
(function(){var charSize=8,b64pad="",hexCase=0,Int_64=function(a,b){this.highOrder=a;this.lowOrder=b},str2binb=function(a){var b=[],mask=(1<<charSize)-1,length=a.length*charSize,i;for(i=0;i<length;i+=charSize){b[i>>5]|=(a.charCodeAt(i/charSize)&mask)<<(32-charSize-(i%32))}return b},hex2binb=function(a){var b=[],length=a.length,i,num;for(i=0;i<length;i+=2){num=parseInt(a.substr(i,2),16);if(!isNaN(num)){b[i>>3]|=num<<(24-(4*(i%8)))}else{return"INVALID HEX STRING"}}return b},binb2hex=function(a){var b=(hexCase)?"0123456789ABCDEF":"0123456789abcdef",str="",length=a.length*4,i,srcByte;for(i=0;i<length;i+=1){srcByte=a[i>>2]>>((3-(i%4))*8);str+=b.charAt((srcByte>>4)&0xF)+b.charAt(srcByte&0xF)}return str},binb2b64=function(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"+"0123456789+/",str="",length=a.length*4,i,j,triplet;for(i=0;i<length;i+=3){triplet=(((a[i>>2]>>8*(3-i%4))&0xFF)<<16)|(((a[i+1>>2]>>8*(3-(i+1)%4))&0xFF)<<8)|((a[i+2>>2]>>8*(3-(i+2)%4))&0xFF);for(j=0;j<4;j+=1){if(i*8+j*6<=a.length*32){str+=b.charAt((triplet>>6*(3-j))&0x3F)}else{str+=b64pad}}}return str},rotr=function(x,n){if(n<=32){return new Int_64((x.highOrder>>>n)|(x.lowOrder<<(32-n)),(x.lowOrder>>>n)|(x.highOrder<<(32-n)))}else{return new Int_64((x.lowOrder>>>n)|(x.highOrder<<(32-n)),(x.highOrder>>>n)|(x.lowOrder<<(32-n)))}},shr=function(x,n){if(n<=32){return new Int_64(x.highOrder>>>n,x.lowOrder>>>n|(x.highOrder<<(32-n)))}else{return new Int_64(0,x.highOrder<<(32-n))}},ch=function(x,y,z){return new Int_64((x.highOrder&y.highOrder)^(~x.highOrder&z.highOrder),(x.lowOrder&y.lowOrder)^(~x.lowOrder&z.lowOrder))},maj=function(x,y,z){return new Int_64((x.highOrder&y.highOrder)^(x.highOrder&z.highOrder)^(y.highOrder&z.highOrder),(x.lowOrder&y.lowOrder)^(x.lowOrder&z.lowOrder)^(y.lowOrder&z.lowOrder))},sigma0=function(x){var a=rotr(x,28),rotr34=rotr(x,34),rotr39=rotr(x,39);return new Int_64(a.highOrder^rotr34.highOrder^rotr39.highOrder,a.lowOrder^rotr34.lowOrder^rotr39.lowOrder)},sigma1=function(x){var a=rotr(x,14),rotr18=rotr(x,18),rotr41=rotr(x,41);return new Int_64(a.highOrder^rotr18.highOrder^rotr41.highOrder,a.lowOrder^rotr18.lowOrder^rotr41.lowOrder)},gamma0=function(x){var a=rotr(x,1),rotr8=rotr(x,8),shr7=shr(x,7);return new Int_64(a.highOrder^rotr8.highOrder^shr7.highOrder,a.lowOrder^rotr8.lowOrder^shr7.lowOrder)},gamma1=function(x){var a=rotr(x,19),rotr61=rotr(x,61),shr6=shr(x,6);return new Int_64(a.highOrder^rotr61.highOrder^shr6.highOrder,a.lowOrder^rotr61.lowOrder^shr6.lowOrder)},safeAdd_2=function(x,y){var a,msw,lowOrder,highOrder;a=(x.lowOrder&0xFFFF)+(y.lowOrder&0xFFFF);msw=(x.lowOrder>>>16)+(y.lowOrder>>>16)+(a>>>16);lowOrder=((msw&0xFFFF)<<16)|(a&0xFFFF);a=(x.highOrder&0xFFFF)+(y.highOrder&0xFFFF)+(msw>>>16);msw=(x.highOrder>>>16)+(y.highOrder>>>16)+(a>>>16);highOrder=((msw&0xFFFF)<<16)|(a&0xFFFF);return new Int_64(highOrder,lowOrder)},safeAdd_4=function(a,b,c,d){var e,msw,lowOrder,highOrder;e=(a.lowOrder&0xFFFF)+(b.lowOrder&0xFFFF)+(c.lowOrder&0xFFFF)+(d.lowOrder&0xFFFF);msw=(a.lowOrder>>>16)+(b.lowOrder>>>16)+(c.lowOrder>>>16)+(d.lowOrder>>>16)+(e>>>16);lowOrder=((msw&0xFFFF)<<16)|(e&0xFFFF);e=(a.highOrder&0xFFFF)+(b.highOrder&0xFFFF)+(c.highOrder&0xFFFF)+(d.highOrder&0xFFFF)+(msw>>>16);msw=(a.highOrder>>>16)+(b.highOrder>>>16)+(c.highOrder>>>16)+(d.highOrder>>>16)+(e>>>16);highOrder=((msw&0xFFFF)<<16)|(e&0xFFFF);return new Int_64(highOrder,lowOrder)},safeAdd_5=function(a,b,c,d,e){var f,msw,lowOrder,highOrder;f=(a.lowOrder&0xFFFF)+(b.lowOrder&0xFFFF)+(c.lowOrder&0xFFFF)+(d.lowOrder&0xFFFF)+(e.lowOrder&0xFFFF);msw=(a.lowOrder>>>16)+(b.lowOrder>>>16)+(c.lowOrder>>>16)+(d.lowOrder>>>16)+(e.lowOrder>>>16)+(f>>>16);lowOrder=((msw&0xFFFF)<<16)|(f&0xFFFF);f=(a.highOrder&0xFFFF)+(b.highOrder&0xFFFF)+(c.highOrder&0xFFFF)+(d.highOrder&0xFFFF)+(e.highOrder&0xFFFF)+(msw>>>16);msw=(a.highOrder>>>16)+(b.highOrder>>>16)+(c.highOrder>>>16)+(d.highOrder>>>16)+(e.highOrder>>>16)+(f>>>16);highOrder=((msw&0xFFFF)<<16)|(f&0xFFFF);return new Int_64(highOrder,lowOrder)},coreSHA2=function(j,k,l){var a,b,c,d,e,f,g,h,T1,T2,H,lengthPosition,i,t,K,W=[],appendedMessageLength;if(l==="SHA-384"||l==="SHA-512"){lengthPosition=(((k+128)>>10)<<5)+31;K=[new Int_64(0x428a2f98,0xd728ae22),new Int_64(0x71374491,0x23ef65cd),new Int_64(0xb5c0fbcf,0xec4d3b2f),new Int_64(0xe9b5dba5,0x8189dbbc),new Int_64(0x3956c25b,0xf348b538),new Int_64(0x59f111f1,0xb605d019),new Int_64(0x923f82a4,0xaf194f9b),new Int_64(0xab1c5ed5,0xda6d8118),new Int_64(0xd807aa98,0xa3030242),new Int_64(0x12835b01,0x45706fbe),new Int_64(0x243185be,0x4ee4b28c),new Int_64(0x550c7dc3,0xd5ffb4e2),new Int_64(0x72be5d74,0xf27b896f),new Int_64(0x80deb1fe,0x3b1696b1),new Int_64(0x9bdc06a7,0x25c71235),new Int_64(0xc19bf174,0xcf692694),new Int_64(0xe49b69c1,0x9ef14ad2),new Int_64(0xefbe4786,0x384f25e3),new Int_64(0x0fc19dc6,0x8b8cd5b5),new Int_64(0x240ca1cc,0x77ac9c65),new Int_64(0x2de92c6f,0x592b0275),new Int_64(0x4a7484aa,0x6ea6e483),new Int_64(0x5cb0a9dc,0xbd41fbd4),new Int_64(0x76f988da,0x831153b5),new Int_64(0x983e5152,0xee66dfab),new Int_64(0xa831c66d,0x2db43210),new Int_64(0xb00327c8,0x98fb213f),new Int_64(0xbf597fc7,0xbeef0ee4),new Int_64(0xc6e00bf3,0x3da88fc2),new Int_64(0xd5a79147,0x930aa725),new Int_64(0x06ca6351,0xe003826f),new Int_64(0x14292967,0x0a0e6e70),new Int_64(0x27b70a85,0x46d22ffc),new Int_64(0x2e1b2138,0x5c26c926),new Int_64(0x4d2c6dfc,0x5ac42aed),new Int_64(0x53380d13,0x9d95b3df),new Int_64(0x650a7354,0x8baf63de),new Int_64(0x766a0abb,0x3c77b2a8),new Int_64(0x81c2c92e,0x47edaee6),new Int_64(0x92722c85,0x1482353b),new Int_64(0xa2bfe8a1,0x4cf10364),new Int_64(0xa81a664b,0xbc423001),new Int_64(0xc24b8b70,0xd0f89791),new Int_64(0xc76c51a3,0x0654be30),new Int_64(0xd192e819,0xd6ef5218),new Int_64(0xd6990624,0x5565a910),new Int_64(0xf40e3585,0x5771202a),new Int_64(0x106aa070,0x32bbd1b8),new Int_64(0x19a4c116,0xb8d2d0c8),new Int_64(0x1e376c08,0x5141ab53),new Int_64(0x2748774c,0xdf8eeb99),new Int_64(0x34b0bcb5,0xe19b48a8),new Int_64(0x391c0cb3,0xc5c95a63),new Int_64(0x4ed8aa4a,0xe3418acb),new Int_64(0x5b9cca4f,0x7763e373),new Int_64(0x682e6ff3,0xd6b2b8a3),new Int_64(0x748f82ee,0x5defb2fc),new Int_64(0x78a5636f,0x43172f60),new Int_64(0x84c87814,0xa1f0ab72),new Int_64(0x8cc70208,0x1a6439ec),new Int_64(0x90befffa,0x23631e28),new Int_64(0xa4506ceb,0xde82bde9),new Int_64(0xbef9a3f7,0xb2c67915),new Int_64(0xc67178f2,0xe372532b),new Int_64(0xca273ece,0xea26619c),new Int_64(0xd186b8c7,0x21c0c207),new Int_64(0xeada7dd6,0xcde0eb1e),new Int_64(0xf57d4f7f,0xee6ed178),new Int_64(0x06f067aa,0x72176fba),new Int_64(0x0a637dc5,0xa2c898a6),new Int_64(0x113f9804,0xbef90dae),new Int_64(0x1b710b35,0x131c471b),new Int_64(0x28db77f5,0x23047d84),new Int_64(0x32caab7b,0x40c72493),new Int_64(0x3c9ebe0a,0x15c9bebc),new Int_64(0x431d67c4,0x9c100d4c),new Int_64(0x4cc5d4be,0xcb3e42b6),new Int_64(0x597f299c,0xfc657e2a),new Int_64(0x5fcb6fab,0x3ad6faec),new Int_64(0x6c44198c,0x4a475817)];if(l==="SHA-384"){H=[new Int_64(0xcbbb9d5d,0xc1059ed8),new Int_64(0x0629a292a,0x367cd507),new Int_64(0x9159015a,0x3070dd17),new Int_64(0x0152fecd8,0xf70e5939),new Int_64(0x67332667,0xffc00b31),new Int_64(0x98eb44a87,0x68581511),new Int_64(0xdb0c2e0d,0x64f98fa7),new Int_64(0x047b5481d,0xbefa4fa4)]}else{H=[new Int_64(0x6a09e667,0xf3bcc908),new Int_64(0xbb67ae85,0x84caa73b),new Int_64(0x3c6ef372,0xfe94f82b),new Int_64(0xa54ff53a,0x5f1d36f1),new Int_64(0x510e527f,0xade682d1),new Int_64(0x9b05688c,0x2b3e6c1f),new Int_64(0x1f83d9ab,0xfb41bd6b),new Int_64(0x5be0cd19,0x137e2179)]}}j[k>>5]|=0x80<<(24-k%32);j[lengthPosition]=k;appendedMessageLength=j.length;for(i=0;i<appendedMessageLength;i+=32){a=H[0];b=H[1];c=H[2];d=H[3];e=H[4];f=H[5];g=H[6];h=H[7];for(t=0;t<80;t+=1){if(t<16){W[t]=new Int_64(j[t*2+i],j[t*2+i+1])}else{W[t]=safeAdd_4(gamma1(W[t-2]),W[t-7],gamma0(W[t-15]),W[t-16])}T1=safeAdd_5(h,sigma1(e),ch(e,f,g),K[t],W[t]);T2=safeAdd_2(sigma0(a),maj(a,b,c));h=g;g=f;f=e;e=safeAdd_2(d,T1);d=c;c=b;b=a;a=safeAdd_2(T1,T2)}H[0]=safeAdd_2(a,H[0]);H[1]=safeAdd_2(b,H[1]);H[2]=safeAdd_2(c,H[2]);H[3]=safeAdd_2(d,H[3]);H[4]=safeAdd_2(e,H[4]);H[5]=safeAdd_2(f,H[5]);H[6]=safeAdd_2(g,H[6]);H[7]=safeAdd_2(h,H[7])}switch(l){case"SHA-384":return[H[0].highOrder,H[0].lowOrder,H[1].highOrder,H[1].lowOrder,H[2].highOrder,H[2].lowOrder,H[3].highOrder,H[3].lowOrder,H[4].highOrder,H[4].lowOrder,H[5].highOrder,H[5].lowOrder];case"SHA-512":return[H[0].highOrder,H[0].lowOrder,H[1].highOrder,H[1].lowOrder,H[2].highOrder,H[2].lowOrder,H[3].highOrder,H[3].lowOrder,H[4].highOrder,H[4].lowOrder,H[5].highOrder,H[5].lowOrder,H[6].highOrder,H[6].lowOrder,H[7].highOrder,H[7].lowOrder];default:return[]}},jsSHA=function(a,b){this.sha384=null;this.sha512=null;this.strBinLen=null;this.strToHash=null;if("HEX"===b){if(0!==(a.length%2)){return"TEXT MUST BE IN BYTE INCREMENTS"}this.strBinLen=a.length*4;this.strToHash=hex2binb(a)}else if(("ASCII"===b)||('undefined'===typeof(b))){this.strBinLen=a.length*charSize;this.strToHash=str2binb(a)}else{return"UNKNOWN TEXT INPUT TYPE"}};jsSHA.prototype={getHash:function(a,b){var c=null,message=this.strToHash.slice();switch(b){case"HEX":c=binb2hex;break;case"B64":c=binb2b64;break;default:return"FORMAT NOT RECOGNIZED"}switch(a){case"SHA-384":if(null===this.sha384){this.sha384=coreSHA2(message,this.strBinLen,a)}return c(this.sha384);case"SHA-512":if(null===this.sha512){this.sha512=coreSHA2(message,this.strBinLen,a)}return c(this.sha512);default:return"HASH NOT RECOGNIZED"}},getHMAC:function(a,b,c,d){var e,keyToUse,i,retVal,keyBinLen,hashBitSize,keyWithIPad=[],keyWithOPad=[];switch(d){case"HEX":e=binb2hex;break;case"B64":e=binb2b64;break;default:return"FORMAT NOT RECOGNIZED"}switch(c){case"SHA-384":hashBitSize=384;break;case"SHA-512":hashBitSize=512;break;default:return"HASH NOT RECOGNIZED"}if("HEX"===b){if(0!==(a.length%2)){return"KEY MUST BE IN BYTE INCREMENTS"}keyToUse=hex2binb(a);keyBinLen=a.length*4}else if("ASCII"===b){keyToUse=str2binb(a);keyBinLen=a.length*charSize}else{return"UNKNOWN KEY INPUT TYPE"}if(128<(keyBinLen/8)){keyToUse=coreSHA2(keyToUse,keyBinLen,c);keyToUse[31]&=0xFFFFFF00}else if(128>(keyBinLen/8)){keyToUse[31]&=0xFFFFFF00}for(i=0;i<=31;i+=1){keyWithIPad[i]=keyToUse[i]^0x36363636;keyWithOPad[i]=keyToUse[i]^0x5C5C5C5C}retVal=coreSHA2(keyWithIPad.concat(this.strToHash),1024+this.strBinLen,c);retVal=coreSHA2(keyWithOPad.concat(retVal),1024+hashBitSize,c);return(e(retVal))}};window.jsSHA=jsSHA}());
ArcAES={
cipher:null,
mode:'CBC',
key:null,
iv:null,
init:function(){
this.key=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
this.iv=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
this.cipher=null;
this.aes=null;},
create:function(mode,key,iv){
var aes=new ArcAES.AES(key);
if(mode=='ECB'){
this.cipher=new ArcAES.ECBMode(aes);}else if(mode=='CBC'){
this.cipher=new ArcAES.CBCMode(aes,iv);}
this.cipher.mode=mode;
this.cipher.AES=ArcAES;
return this.cipher;},
setMode:function(mode,key,iv){
this.AES.cipher=null;
this.AES.cipher=new this.AES.create(mode,key,iv);
return this.AES.cipher;},
IntToByteArray:function(iS,wd){
var bA=[];
var i;
var sz=iS.length;
for(i=0;i<sz;i++){
bA[i]=iS.charCodeAt(i);}
if(!wd)
wd=(Math.ceil((sz)/16))*16;
for(;i<wd;i++){
bA[i]=0;}
return bA;},
hexToByteArray:function(hS){
var bA=[];
if(hS.indexOf("%")==0)
hS=hS.replace(/%/g,"");
if(hS.length%2)return;
if(hS.indexOf("0x")==0||hS.indexOf("0X")==0)
hS=hS.substring(2);
for(var i=0;i<hS.length;i+=2)
bA[Math.floor(i/2)]=parseInt(hS.slice(i,i+2),16);
return bA;},
byteArrayToString:function(byteArray){
var result="";
for(var i=0;i<byteArray.length;i++)
if(byteArray[i]!=0)
result+=String.fromCharCode(byteArray[i]);
return result;},
byteArrayToHex:function(byteArray){
var result="";
if(!byteArray)
return;
for(var i=0;i<byteArray.length;i++)
result+=((byteArray[i]<16)?"0":"")+byteArray[i].toString(16);
return result;},
byteArrayToHTML:function(byteArray){
var result="";
if(!byteArray)
return;
for(var i=0;i<byteArray.length;i++)
result+="%"+((byteArray[i]<16)?"0":"")+byteArray[i].toString(16);
return result;},
AES:function AES(key){
this.blockSize=16,
this.setKey=function setKey(key){
this.key=key;
this.keySize=key.length;
if(this.keySize==16)
this.rounds=10;
else if(this.keySize==24)
this.rounds=12;
else if(this.keySize==32)
this.rounds=14;
else
throw new Error("Key length must be 16, 24 or 32 bytes");
this.expandKey();},
this.expandKey=function expandKey(){
var exKey;
var j,z;
exKey=this.key.slice();
var extraCount;
if(this.keySize==16)
extraCount=0;
else if(this.keySize==24)
extraCount=2;
else
extraCount=3;
var word=exKey.slice(-4);
for(var i=1;i<11;i++){
word=word.slice(1,4).concat(word.slice(0,1));
for(j=0;j<4;j++){
word[j]=ArcAES.sbox[(word[j])];}
word[0]^=ArcAES.rcon[i];
for(z=0;z<4;z++){
for(j=0;j<4;j++){
word[j]^=exKey[exKey.length-this.keySize+j];}
exKey=exKey.concat(word);}
if(exKey.length>=((this.rounds+1)*this.blockSize)){
break;}
if(this.keySize==32){
for(j=0;j<4;j++){
word[j]=ArcAES.sbox[word[j]]^exKey[exKey.length-this.keySize+j];}
exKey=exKey.concat(word);}
for(z=0;z<extraCount;z++){
for(j=0;j<4;j++){
word[j]^=exKey[exKey.length-this.keySize+j];}
exKey=exKey.concat(word);}}
this.exKey=exKey;},
this.encryptBlock=function encryptBlock(block){
this.addRoundKey(block,0);
for(var round=1;round<this.rounds;round++){
this.subBytes(block,ArcAES.sbox);
this.shiftRows(block);
this.mixColumns(block);
this.addRoundKey(block,round);}
this.subBytes(block,ArcAES.sbox);
this.shiftRows(block);
this.addRoundKey(block,this.rounds);},
this.decryptBlock=function decryptBlock(block){
this.addRoundKey(block,this.rounds);
for(var round=(this.rounds-1);round>0;round--){
this.shiftRowsInv(block);
this.subBytes(block,ArcAES.invSbox);
this.addRoundKey(block,round);
this.mixColumnsInv(block);}
this.shiftRowsInv(block);
this.subBytes(block,ArcAES.invSbox);
this.addRoundKey(block,0);},
this.addRoundKey=function addRoundKey(block,round){
var offset=round*16;
var exKey=this.exKey;
for(var i=0;i<16;i++){
block[i]^=exKey[offset+i];}},
this.subBytes=function subBytes(block,sbox){
for(var i=0;i<16;i++){
block[i]=sbox[block[i]];}},
this.shiftRows=function shiftRows(b){
var tmp;
tmp=b[1];
b[1]=b[5];
b[5]=b[9];
b[9]=b[13];
b[13]=tmp;
tmp=b[2];
b[2]=b[10];
b[10]=tmp;
tmp=b[6];
b[6]=b[14];
b[14]=tmp;
tmp=b[15];
b[15]=b[11];
b[11]=b[7];
b[7]=b[3];
b[3]=tmp;},
this.shiftRowsInv=function shiftRowsInv(b){
var tmp;
tmp=b[13];
b[13]=b[9];
b[9]=b[5];
b[5]=b[1];
b[1]=tmp;
tmp=b[2];
b[2]=b[10];
b[10]=tmp;
tmp=b[6];
b[6]=b[14];
b[14]=tmp;
tmp=b[3];
b[3]=b[7];
b[7]=b[11];
b[11]=b[15];
b[15]=tmp;},
this.mixColumns=function mixColumns(block){
var mulBy2=ArcAES.gfMulBy2;
var mulBy3=ArcAES.gfMulBy3;
for(var col=0;col<16;col+=4){
var v0=block[col];
var v1=block[col+1];
var v2=block[col+2];
var v3=block[col+3];
block[col]=mulBy2[v0]^v3^v2^mulBy3[v1];
block[col+1]=mulBy2[v1]^v0^v3^mulBy3[v2];
block[col+2]=mulBy2[v2]^v1^v0^mulBy3[v3];
block[col+3]=mulBy2[v3]^v2^v1^mulBy3[v0];}},
this.mixColumnsInv=function mixColumnsInv(block){
var mul9=ArcAES.gfMulBy9;
var mul11=ArcAES.gfMulBy11;
var mul13=ArcAES.gfMulBy13;
var mul14=ArcAES.gfMulBy14;
for(var col=0;col<16;col+=4){
var v0=block[col];
var v1=block[col+1];
var v2=block[col+2];
var v3=block[col+3];
block[col]=mul14[v0]^mul9[v3]^mul13[v2]^mul11[v1];
block[col+1]=mul14[v1]^mul9[v0]^mul13[v3]^mul11[v2];
block[col+2]=mul14[v2]^mul9[v1]^mul13[v0]^mul11[v3];
block[col+3]=mul14[v3]^mul9[v2]^mul13[v1]^mul11[v0];}}
this.setKey(key);},
ECBMode:function(cipher){
this.cipher=cipher;
this.blockSize=cipher.blockSize;
this.setkey=function(key){
this.cipher=null;
this.cipher=new ArcAES.AES(key);},
this.encrypt=function encrypt(data){
return this.ecb(data,this.cipher.encryptBlock);},
this.decrypt=function decrypt(data){
return this.ecb(data,this.cipher.decryptBlock);},
this.ecb=function ecb(data,blockFunc){
var blockSize=this.blockSize;
if(data.length%blockSize!=0)
throw new Error("Input length must be multiple of 16");
var result=[];
for(var offset=0;offset<data.length;offset+=blockSize){
var block=data.slice(offset,offset+blockSize);
blockFunc(block);
for(var i=0;i<blockSize;i++){
result.push(block[i]);}}
return result;}},
CBCMode:function CBCMode(cipher,iv){
if(!iv)
throw new Error("CBC mode needs an IV value!");
if(iv.length!=cipher.blockSize)
throw new Error("IV must be exactly 16 bytes long");
this.cipher=cipher;
this.blockSize=cipher.blockSize;
this.iv=iv;
this.setkey=function(key,iv){
this.cipher=null;
this.cipher=new ArcAES.AES(key);
this.iv=iv;},
this.encrypt=function encrypt(data){
var blockSize=this.blockSize;
if(data.length%blockSize!=0)
throw new Error("Input length must be multiple of 16");
var result=[];
var iv=this.iv;
for(var offset=0;offset<data.length;offset+=blockSize){
var block=data.slice(offset,offset+blockSize);
for(var i=0;i<blockSize;i++){
block[i]^=iv[i];}
this.cipher.encryptBlock(block);
for(var i=0;i<blockSize;i++){
result.push(block[i]);}
iv=block;}
this.iv=iv;
return result;},
this.decrypt=function decrypt(data){
var blockSize=this.blockSize;
if(data.length%blockSize!=0){
return data;}
var result=[];
var iv=this.iv;
for(var offset=0;offset<data.length;offset+=blockSize){
var ctext=data.slice(offset,offset+blockSize);
var block=ctext.slice();
this.cipher.decryptBlock(block);
for(var i=0;i<blockSize;i++){
result.push(block[i]^iv[i])}
iv=ctext;}
this.iv=iv;
return result;}},
sbox:[
99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,
202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,
183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,
4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,
9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,
83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,
208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,
81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,
205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,
96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,
224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,
231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,
186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,
112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,
225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,
140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22,],
invSbox:[
82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,
124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,
84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,
8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,
114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,
108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,
144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,
208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,
58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,
150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,
71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,
252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,
31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,
96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,
160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,
23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125,],
rcon:[
141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,
47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,
114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,
116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,
171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,
197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,
131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,
54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,
125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,
51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,
64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,
106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,
37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,
8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,
198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,
97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,],
gfMulBy2:[
0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,
64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,
96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,
128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,
160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,
192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,
224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,
27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,
59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,
91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,
123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,
155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,
187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,
219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,
251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229,],
gfMulBy3:[
0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,
48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,
96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,
80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,
192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,
240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,
160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,
144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,
155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,
171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,
251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,
203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,
91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,
107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,
59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,
11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26,],
gfMulBy9:[
0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,
144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,
59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,
171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,
118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,
230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,
77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,
221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,
236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,
124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,
215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,
71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,
154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,
10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,
161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,
49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70,],
gfMulBy11:[
0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,
176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,
123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,
203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,
246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,
70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,
141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,
61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,
247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,
71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,
140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,
60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,
1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,
177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,
122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,
202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163,],
gfMulBy13:[
0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,
208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,
187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,
107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,
109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,
189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,
214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,
6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,
218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,
10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,
97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,
177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,
183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,
103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,
12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,
220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151,],
gfMulBy14:[
0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,
224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,
219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,
59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,
173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,
77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,
118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,
150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,
65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,
161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,
154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,
122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,
236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,
12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,
55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,
215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141,]};
var g_AES_Mode=null;
function do_decode(_s)
{
var iv=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var k=ArcBase._t();
var ct=ArcAES.hexToByteArray(_s);
return _s;
if(!ct||isNaN(ct[0])||(ct.length%16!=0)){
return _s;}
var key=ArcAES.IntToByteArray(k,32);
if(!g_AES_Mode){
g_AES_Mode=new ArcAES.create('CBC',key,iv);}else{
g_AES_Mode.setkey(key,iv);}
var pt=g_AES_Mode.decrypt(ct);
return ArcAES.byteArrayToString(pt);}
function do_encode(_s,_encrypt)
{
if(typeof(_encrypt)=="boolean"){
if(_encrypt==true){
return ArcMD5(_s);}}
var iv=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var k=ArcBase._t();
var key=ArcAES.IntToByteArray(k,32);
var ct=ArcAES.IntToByteArray(_s);
if(!ct||isNaN(ct[0])){
return _s;}
if(!g_AES_Mode){
g_AES_Mode=ArcAES.create('CBC',key,iv);}else{
g_AES_Mode.setkey(key,iv);}
var pt=g_AES_Mode.encrypt(ct);
return ArcAES.byteArrayToHTML(pt);}
function Arcdecode(_idx)
{
var _s=CA[_idx].v;
if(CA[_idx].e==null||CA[_idx].e==0){
return _s;}
_s=CA[_idx].v=do_decode(_s);
CA[_idx].o=ArcAES.byteArrayToHTML(ArcAES.hexToByteArray(CA[_idx].o));
CA[_idx].e=0;
return _s;}
function Arcencode(_idx)
{
var _s=CA[_idx].v;
if(CA[_idx].e==null){
return _s;}
if(CA[_idx].e===0){
return _s;}
_s=CA[_idx].v=do_encode(_s);
return _s;}
function ArcMD5(_s)
{
var s=calcMD5(_s);
var shaObj=new jsSHA(s,"ASCII");
s=shaObj.getHash("SHA-512","HEX");
return s;}
function getcPage(_url)
{
if(_url)
return _url.replace(/.*[\/]/,'').replace(/[\?].*$/,'').replace(/#.*$/,'');
alert("Dev: Err:"+cPage);}
var Page_http="";
$W=function(a){document.write(a);};
$I=function(a){return document.getElementById(a);};
var cPage=getcPage(window.location.toString());
if("undefined"!=typeof(G_key)){
var v=location.hash.replace(/[\?].*$/,'');
if(calcMD5(v)=="f530644ab4fa3efb6adcc45d21a1e9d2"){var G_top=1;}}
function sprintf(){
var i=0,a,f=arguments[i++],o=[],m,p,c,x,s='';
while(f){
if(m=/^[^\x25]+/.exec(f)){
o.push(m[0]);}
else if(m=/^\x25{2}/.exec(f)){
o.push('%');}
else if(m=/^\x25(?:(\d+)\$)?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(f)){
if(((a=arguments[m[1]||i++])==null)||(a==undefined)){
throw('Too few arguments.');}
if(/[^s]/.test(m[7])&&(typeof(a)!='number')){
throw('Expecting number but found '+typeof(a));}
switch(m[7]){
case'b':a=a.toString(2);break;
case'c':a=String.fromCharCode(a);break;
case'd':a=parseInt(a);break;
case'e':a=m[6]?a.toExponential(m[6]):a.toExponential();break;
case'f':a=m[6]?parseFloat(a).toFixed(m[6]):parseFloat(a);break;
case'o':a=a.toString(8);break;
case's':a=((a=String(a))&&m[6]?a.substring(0,m[6]):a);break;
case'u':a=Math.abs(a);break;
case'x':a=a.toString(16);break;
case'X':a=a.toString(16).toUpperCase();break;}
a=(/[def]/.test(m[7])&&m[2]&&a>=0?'+'+a:a);
c=m[3]?m[3]=='0'?'0':m[3].charAt(1):' ';
x=m[5]-String(a).length-s.length;
p=m[5]?str_repeat(c,x):'';
o.push(s+(m[4]?a+p:p+a));}
else{
throw('Huh ?!');}
f=f.substring(m[0].length);}
return o.join('');}
var ArcBase={
_keyStr:'',
init:function(){
for(var i=65;i<=90;i++){this._keyStr+=String.fromCharCode(i);}
for(var i=97;i<=122;i++){this._keyStr+=String.fromCharCode(i);}
for(var i=48;i<=57;i++){this._keyStr+=String.fromCharCode(i);}
this._keyStr+='+/=';},
encode:function(input){
var output="";
var chr1,chr2,chr3,enc1,enc2,enc3,enc4;
var i=0;
ArcBase.init();
input=ArcBase._utf8_encode(input);
while(i<input.length){
chr1=input.charCodeAt(i++);
chr2=input.charCodeAt(i++);
chr3=input.charCodeAt(i++);
enc1=chr1>>2;
enc2=((chr1&3)<<4)|(chr2>>4);
enc3=((chr2&15)<<2)|(chr3>>6);
enc4=chr3&63;
if(isNaN(chr2)){
enc3=enc4=64;}else if(isNaN(chr3)){
enc4=64;}
output=output+
this._keyStr.charAt(enc1)+this._keyStr.charAt(enc2)+
this._keyStr.charAt(enc3)+this._keyStr.charAt(enc4);}
return output;},
decode:function(input){
var output="";
var chr1,chr2,chr3;
var enc1,enc2,enc3,enc4;
var i=0;
ArcBase.init();
input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");
while(i<input.length){
enc1=this._keyStr.indexOf(input.charAt(i++));
enc2=this._keyStr.indexOf(input.charAt(i++));
enc3=this._keyStr.indexOf(input.charAt(i++));
enc4=this._keyStr.indexOf(input.charAt(i++));
chr1=(enc1<<2)|(enc2>>4);
chr2=((enc2&15)<<4)|(enc3>>2);
chr3=((enc3&3)<<6)|enc4;
output=output+String.fromCharCode(chr1);
if(enc3!=64){
output=output+String.fromCharCode(chr2);}
if(enc4!=64){
output=output+String.fromCharCode(chr3);}}
if(i!=input.length){
messages.addMessage(BASE64_BROKEN);
throw"error";}
output=ArcBase._utf8_decode(output);
return output;},
_utf8_encode:function(string){
string=string.replace(/\r\n/g,"\n");
var utftext="";
for(var n=0;n<string.length;n++){
var c=string.charCodeAt(n);
if(c<128){
utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){
utftext+=String.fromCharCode((c>>6)|192);
utftext+=String.fromCharCode((c&63)|128);}
else{
utftext+=String.fromCharCode((c>>12)|224);
utftext+=String.fromCharCode(((c>>6)&63)|128);
utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},
_utf8_decode:function(utftext){
var string="";
var i=0;
var c=c1=c2=0;
while(i<utftext.length){
c=utftext.charCodeAt(i);
if(c<128){
string+=String.fromCharCode(c);
i++;}
else if((c>191)&&(c<224)){
c2=utftext.charCodeAt(i+1);
string+=String.fromCharCode(((c&31)<<6)|(c2&63));
i+=2;}
else{
c2=utftext.charCodeAt(i+1);
c3=utftext.charCodeAt(i+2);
string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));
i+=3;}}
return string;}};
function getCookieVal(offset)
{
var endstr=document.cookie.indexOf(";",offset);
if(endstr==-1)
endstr=document.cookie.length;
return unescape(document.cookie.substring(offset,endstr));}
function GetCookie(name)
{
var i,x,y,co=document.cookie.split(";");
var clen=co.length;
for(i=0;i<clen;i++){
x=co[i].substr(0,co[i].indexOf("="));
y=co[i].substr(co[i].indexOf("=")+1);
x=x.replace(/^\s+|\s+$/g,"");
if(x==name){
return unescape(y);}}
return null;}
function SetCookie(name,value)
{
var expires=new Date();
var path="/";
var domain=null;
var secure=null;
expires.setTime(expires.getTime()+(365*24*60*60*1000));
document.cookie=name+"="+escape(value)+((expires==null)?"":("; expires="+expires.toGMTString()))+((path==null)?"":("; path="+path))+((domain==null)?"":("; domain="+domain));}
function DeleteCookie(name)
{
exp=new Date();
exp.setTime=(exp.getTime()-(60*60*1000));
var cval=GetCookie(name);
document.cookie=name+"=; expires="+exp.toGMTString()+"; path=/";}
function SetDefPg(_pg)
{
SetCookie("defpg",_pg);}
function GetDefPg()
{
var _pg=GetCookie("defpg");
SetDefPg("");
return _pg;}
function getQueryValue(_name)
{
var query=location.search;
if(query!=""){
query=query.substr(1,query.length);
var arr=query.split(/[\&]/);
_name+="=";
var index;
for(var x=0;x<arr.length;x++){
index=arr[x].indexOf(_name);
if(index!=0){
continue;}
return arr[x].substr(_name.length,arr[x].length);}}
return"";}
function getIntQueryValue(_name,_def)
{
var r;
var q=getQueryValue(_name);
if(q=='')r=_def;
else r=parseInt('0'+q,10);
return r;}
function setQueryValue(_name,_val,_s)
{
var q=location.search;
if(null!=_s)q=_s;
q=q.replace(/^.*[\?]/,"");
return mergeQueryValue("?"+q,"?"+_name+"="+_val,0);}
function mergeQueryValue(_q1,_q2,_q1_first)
{
var q1=_q1;
var q2=_q2;
var rtn="";
var x,y;
if((x=q1.indexOf("?"))!=-1){
q1=q1.substr(x+1,q1.length);}else{
q1="";}
if((x=q2.indexOf("?"))!=-1){
q2=q2.substr(x+1,q2.length);}else{
q2="";}
if((q1.length==0)||(q2.length==0))
return(q1+q2);
var arr1=q1.split(/[\&]/);
var arr2=q2.split(/[\&]/);
var lookup={};
if(_q1_first==0){
for(x=0;x<arr1.length;x++){
arr1[x]=arr1[x].split("=");
lookup[arr1[x][0]]=arr1[x][1];}}
for(x=0;x<arr2.length;x++){
arr2[x]=arr2[x].split("=");
lookup[arr2[x][0]]=arr2[x][1];}
if(_q1_first==1){
for(x=0;x<arr1.length;x++){
arr1[x]=arr1[x].split("=");
lookup[arr1[x][0]]=arr1[x][1];}}
rtn="";
for(var x in lookup){
rtn+="&"+x+"="+lookup[x];}
rtn=rtn.substring(1);
return rtn;}
function htmlEntries(_s)
{
var entities={},hash_map={},decimal;
entities['38']='&amp;';
entities['160']='&nbsp;';
entities['161']='&iexcl;';
entities['162']='&cent;';
entities['163']='&pound;';
entities['164']='&curren;';
entities['165']='&yen;';
entities['166']='&brvbar;';
entities['167']='&sect;';
entities['168']='&uml;';
entities['169']='&copy;';
entities['170']='&ordf;';
entities['171']='&laquo;';
entities['172']='&not;';
entities['173']='&shy;';
entities['174']='&reg;';
entities['175']='&macr;';
entities['176']='&deg;';
entities['177']='&plusmn;';
entities['178']='&sup2;';
entities['179']='&sup3;';
entities['180']='&acute;';
entities['181']='&micro;';
entities['182']='&para;';
entities['183']='&middot;';
entities['184']='&cedil;';
entities['185']='&sup1;';
entities['186']='&ordm;';
entities['187']='&raquo;';
entities['188']='&frac14;';
entities['189']='&frac12;';
entities['190']='&frac34;';
entities['191']='&iquest;';
entities['192']='&Agrave;';
entities['193']='&Aacute;';
entities['194']='&Acirc;';
entities['195']='&Atilde;';
entities['196']='&Auml;';
entities['197']='&Aring;';
entities['198']='&AElig;';
entities['199']='&Ccedil;';
entities['200']='&Egrave;';
entities['201']='&Eacute;';
entities['202']='&Ecirc;';
entities['203']='&Euml;';
entities['204']='&Igrave;';
entities['205']='&Iacute;';
entities['206']='&Icirc;';
entities['207']='&Iuml;';
entities['208']='&ETH;';
entities['209']='&Ntilde;';
entities['210']='&Ograve;';
entities['211']='&Oacute;';
entities['212']='&Ocirc;';
entities['213']='&Otilde;';
entities['214']='&Ouml;';
entities['215']='&times;';
entities['216']='&Oslash;';
entities['217']='&Ugrave;';
entities['218']='&Uacute;';
entities['219']='&Ucirc;';
entities['220']='&Uuml;';
entities['221']='&Yacute;';
entities['222']='&THORN;';
entities['223']='&szlig;';
entities['224']='&agrave;';
entities['225']='&aacute;';
entities['226']='&acirc;';
entities['227']='&atilde;';
entities['228']='&auml;';
entities['229']='&aring;';
entities['230']='&aelig;';
entities['231']='&ccedil;';
entities['232']='&egrave;';
entities['233']='&eacute;';
entities['234']='&ecirc;';
entities['235']='&euml;';
entities['236']='&igrave;';
entities['237']='&iacute;';
entities['238']='&icirc;';
entities['239']='&iuml;';
entities['240']='&eth;';
entities['241']='&ntilde;';
entities['242']='&ograve;';
entities['243']='&oacute;';
entities['244']='&ocirc;';
entities['245']='&otilde;';
entities['246']='&ouml;';
entities['247']='&divide;';
entities['248']='&oslash;';
entities['249']='&ugrave;';
entities['250']='&uacute;';
entities['251']='&ucirc;';
entities['252']='&uuml;';
entities['253']='&yacute;';
entities['254']='&thorn;';
entities['255']='&yuml;';
entities['60']='&lt;';
entities['62']='&gt;';
for(var decimal in entities){
if(entities.hasOwnProperty(decimal)){
hash_map[String.fromCharCode(decimal)]=entities[decimal];}}
var s=_s+'';
for(var symbol in hash_map){
if(hash_map.hasOwnProperty(symbol)){
s=s.split(symbol).join(hash_map[symbol]);}}
return s;}
function formatTime(s)
{
var time=new Date(0,0,0,0,0,s,0);
var hh=time.getHours();
var mm=time.getMinutes();
var ss=time.getSeconds()
hh=('0'+hh).slice(-2);
mm=('0'+mm).slice(-2);
ss=('0'+ss).slice(-2);
return hh+':'+mm+':'+ss;}
function HTML2str(_str,_enc)
{
if(_enc){
_str=do_decode(_str);}
var s=_str;
try{
s=decodeURIComponent(_str);}catch(e){};
return(s);}
function HTML2str2(_str)
{
var s=unescape(_str);
var re=RegExp('[&][#]([0-9]+)[;]','i');
while(re.test(s)){
var col=re.exec(s);
s=s.replace("&#"+col[1]+";",String.fromCharCode(col[1]));}
return(s);}
var noC=[":",",",".","-",";"];
function str2HTML(_str,_enc)
{
var _s=_str;
try{
_s=encodeURIComponent(_str);}catch(e){}
return _s;}
var enkripsi="ZXZtYHdqbG0mMTNkZndXbGhmbSYxOyYxOiY0QSYzQiYzOnVicSYxM2xhaXAmMEdnbGB2bmZtdy1kZndGb2ZuZm13cEF6V2JkTWJuZiYxOyYxMWpuZCYxMSYxOiYwQSYzQiYzOnVicSYxM3smMEEmM0ImMzplbHEmMTt1YnEmMTNqJjBHMyYxQHB5JjBHbGFpcC1vZm1kd2smMEFqJjEzJjBAJjEzcHkmMEEmMTNqKCgmMTomNEEmM0ImMzomMzp7JjBHbGFpcCY2QWomNkctcHFgJjBBJjNCJjM6JjM6amUmMTt7LWptZ2Z7TGUmMTsmMTFnYndiJjBCJjExJjE6JjEzJjBHJjBHMyYxOiY0QSYzQiYzOiYzOiYzOnFmd3ZxbSYxM0JxYEFicGYtZ2ZgbGdmJjE7ey1wdmFwd3FqbWQmMTs0OyYxOiYxOiYwQSYzQiYzOiYzOiY0RyYzQiYzOiY0RyYzQiYzOnFmd3ZxbSYxMyYxMSYxMSYwQSYzQiY0Rw==";
function URLToken(url){
if(!url)return;
var _httoken=ArcBase._t();
var t=new Date().getTime();
var tt=_httoken;
var s="";
var i=url.indexOf("?");
if(i!=-1){
s=url.substring(i);
url=url.substring(0,i);}
s=setQueryValue("_tn",tt,s);
s=setQueryValue("_t",t,s);
url+="?"+s;
return(url);}
function URLTimeStamp(url){
if(!url)return;
var tt=new Date().getTime();
var s="";
var i=url.indexOf("?");
if(i!=-1){
s=url.substring(i);
url=url.substring(0,i);}
url+="?"+setQueryValue("t",tt,s);
return(url);}
function moreInfoWin(flagip)
{
var win=window.open("help.htm?hid=0#"+flagip,'help','toolbar=0,status=0,menubar=0,scrollbars=1,resizable=1,width=620,height=400,left=150,top=150');
win.focus();
return false;}
function ShowPageMenu(_hid)
{
if("undefined"!=typeof(_hid)&&(_hid==0)){
return;}
$W('<table width="100%" border="0" margin="0" cellspacing="0" cellpadding="0">');
$W('<tr>');
$W('<td valign="top" width="100%" height="100%" class="head_bold">');
$W('<div id="contentbody" style="visibility:hidden">');
$W('<p id="top_left_menu" style="display:none"><div class="subtitle"><label id="menu_nav"></label><label id="menu_sub"></label></div></p>');}
function ShowPageTail(_hid)
{
if("undefined"!=typeof(_hid)&&(_hid==0)){
return;}
$W('</div>');
$W('</td></tr>');
$W('</table>');
$W('<div id="progress" class="large reveal-modal" style="display:none">');
$W('<span id="MSG" style="display:none"></span><br><br><br>');
$W('<span><span class="progresspanel" id="progresspanel">');
$W('<div class="progressbar" id="progressbar"></div>');
$W('</span>');
$W('&nbsp;&nbsp;&nbsp;<span id="timeRemain" style="display:none"></span></span><br>');
$W('<form><span id="Error_btn" style="display:none"><input type="button" class="green button_m" name="err_btn" value="Back" onClick="do_goNext()"></span></form>');
$W('</div>');
$W('<div id="nullprogress" class="reveal-modal" style="display:none"></div>');}
function setLastMenuNav(til)
{
var obj=0;
for(var i=4;i>=0;i--){
if(document.getElementById("MNU_NV"+i)){
setIdVal("MNU_NV"+i,til);
return;}}}
function safthtml(s)
{
var c;
var arr="";
var spec={"<":"&lt;",">":"&gt;","\"":"&quot;","$":"&#036;"};
for(var i=0;i<s.length;i++){
c=s.charAt(i);
if(spec[c])c=spec[c];
arr+=c;}
return arr;}
function getLangM(_id,_nodbg)
{
var s="";
var id=_id;
if(LangM){
for(var x=0;x<LangM.length;x++){
if(LangM[x][id]){
if(G_LangSel.toLowerCase()=='pt'){
s=unescape(LangM[x][id]);}
else{
s=LangM[x][id];}
break;}}}
if(s=="")return null;
return getLangC(s);}
function ConfirmM(_s){
return confirm(getLangM(_s));}
function insertAfter(newEl,targetEl)
{
var parentEl=targetEl.parentNode;
if(parentEl.lastChild==targetEl)
{
parentEl.appendChild(newEl);}
else{
parentEl.insertBefore(newEl,targetEl.nextSibling);}}
function AlertM(_s,_obj)
{
hideAlerM();
if(!_obj){
if(_s){
alert(getLangM(_s));}}
else{
G_alertID.push("err_"+_obj.name);
var Elm=document.createElement("span");
Elm.id="err_"+_obj.name;
Elm.className="more";
Elm.innerHTML='<span class="desc">'+getLangM(_s)+'</span>';
if(G_arcTrans){
if(_obj.type!="radio"&&_obj.type!="checkbox")
_obj=_obj.parentNode.parentNode.parentNode;}
insertAfter(Elm,_obj);}}
var G_alertID=[];
function hideAlerM(_id)
{
if(!_id){
_id=G_alertID.pop();}
while(_id){
var node=$I(_id);
node.parentNode.removeChild(node);
_id=G_alertID.pop();}}
function getLangAM(_ar)
{
var a=[];
for(var x in _ar){
a[x]=getLangM(_ar[x]);}
return a;}
function getLangC(_s)
{
var str,idsz,ids;
var s=_s;
var avoid_while_loop=0;
if(!_s){return"";}
var arr_find=s.match(/(?!{id[1-9]})[{][a-zA-Z0-9_]+[}]/gi),len=0;
if(arr_find)
len=arr_find.length;
for(var i=0;i<len;i++){
try{
str=eval(arr_find[i]);
s=s.replace(arr_find[i],str);}catch(e){}}
return s;}
function SetTitle(_til)
{
if(typeof(_til)==="string")
top.document.title=_til.replace(/\&nbsp\;/g," ").replace(/\&gt\;/g,">");
else
top.document.title=_til;}
function doTrans(_obj,_str)
{
if(!_obj||(_obj.lang=="1")||!_str){return;}
setIdVal(_obj,_str,0,L_dbg);
_obj.lang='1';}
function Show_nav_menu()
{
if("undefined"!=typeof(top.G_menu_nav)){
if(top.G_menu_nav){
setIdVal("menu_nav",top.G_menu_nav);
DisplayObject("top_left_menu");}else{
HiddenObject("top_left_menu");}}
if("undefined"!=typeof(top.G_menu_title)){
if(typeof(product_name)==="string"){
SetTitle(product_name+" - "+top.G_menu_title);}
else{
SetTitle(top.G_menu_title);}}}
function Show_sub_nav_menu(subtil)
{
setIdVal("menu_sub",'&nbsp;&gt;&nbsp;'+subtil);}
function ShowMenu(do_hide)
{
var _pg=cPage;
var _nav=1;
var obj,objs,len,_id,_str,dbgchk='';
var i,j;
if(top.G_option.next){_pg=top.G_option.next;}
if("undefined"!=typeof(no_nav)){_nav=0;}
HiddenObject("contentbody");
for(i=0;i<LangM.length;i++){
for(var x in LangM[i]){
if(!x)continue;
_str=getLangC(LangM[i][x]);
if(x=="title"){
SetTitle(_str);}else{
if((obj=document.getElementById(x)))
doTrans(obj,_str);}}}
for(i=0;i<document.forms.length;i++){
for(j=0;j<document.forms[i].elements.length;j++){
objs=document.forms[i].elements[j];
len=(objs.length)?objs.length:1;
if(objs.type=="select-one"){
for(var x=0;x<objs.options.length;x++){
if((_id=objs.options[x].getAttribute('id'))){
doTrans(objs.options[x],getLangM(_id));}}}
else{
for(var k=0;k<len;k++){
obj=(len==1)?objs:objs[k];
if(!obj){continue;}
if("button reset submit ".indexOf(objs.type+' ')!=-1){
if((_id=obj.getAttribute('id'))){
doTrans(obj,getLangM(_id));}}}}}}
var atags=document.getElementsByTagName('font');
for(j=0;j<atags.length;j++){
_lang=atags[j].getAttribute('lang');
_id=atags[j].getAttribute('id');
if(_id==null||_id.length==0||_lang=='1'){
continue;}
_str=getLangM(_id);
if(_str){
doTrans(atags[j],_str);}}
atags=document.getElementsByTagName('label');
for(j=0;j<atags.length;j++){
_lang=atags[j].getAttribute('lang');
_id=atags[j].getAttribute('id');
if(_id==null||_id.length==0||_lang=='1'){
continue;}
_str=getLangM(_id);
if(_str){
doTrans(atags[j],_str);}}
atags=null;
if(typeof top.iframe_reload=='function')
top.iframe_reload(window.location.href);
Show_nav_menu();
for(var i=0;i<document.forms.length;i++){
if(document.forms[i].target=="OUTfrm")
document.forms[i].onsubmit=function(){return false;};}
DisplayObject("contentbody");
do_arcTrans('form');
if("undefined"==typeof(G_counter)){
if("undefined"==typeof(login_counter)){
login_counter=10;}
if(login_counter>0){
setTimeout(function(){
window.top.location.href=URLTimeStamp("/login.htm");},login_counter*60*1000);}}
dropJs();}
function do_arcTrans(obj,option)
{
if(G_arcTrans){
if("string"==typeof(obj)){
obj=$(obj);}
if((obj.type=="select-one")||(obj.type=="select-multiple"))
$(obj).arcTransSelect(option);
else
$(obj).arcTransform(option);}}
function do_arcTransInput(htm,option)
{
if(G_arcTrans){
return $(htm).arcTransCreateInputText({txt:true});}else{
return htm;}}
function do_arcTransCheckBox(htm,option)
{
if(G_arcTrans){
var aLink=$(htm).parent().find('a');
if($(htm)[0].checked)
return aLink.addClass('arcTransformChecked')
else
return aLink.removeClass('arcTransformChecked')}else{
return htm;}}
function do_arcTransRadio(htm,option)
{
if(G_arcTrans){
return $(htm).arcTransCreateRadio({txt:true});}else{
return htm;}}
function do_arcTransSelect(htm,option)
{
if(G_arcTrans){
if(!option)option={};
option.txt=true;
return $(htm).arcTransCreateSelect(option);}else{
return htm;}}
function do_arcTransButton(htm,option)
{
if(G_arcTrans){
return $(htm).arcTransCreateInputButton({txt:true});}else{
return htm;}}
function do_arcSetValue(elm,val)
{
if(G_arcTrans){
try{
$(elm).jqSetValue(val);}catch(e){}}}
function JumpMenu(idx)
{
var _url=Menu[idx][M_URL];
setTimeout("JumpURL('"+_url+"')",10);
return false;}
function JumpURL(_url,_force)
{
if((_force)||(top.G_prog==0)){
top.G_prog=0;
top.G_option.next=_url;
SetDefPg(_url.replace(/.*[\/]/,'').replace(/[\?].*$/,''));
window.location.href=URLTimeStamp(_url);}
return false;}
var brMode=3;
var isSafari=0;
var navdav=navigator.appVersion;
var navidx=Math.max(navdav.indexOf("WebKit"),navdav.indexOf("Safari"),0);
if(navidx){
brMode=parseFloat(navdav.split("Version/")[1])||((parseFloat(navdav.substr(navidx+7))>419.3)?3:2)||2;
isSafari=1;}
function window_location_replace(_name,_url)
{
if("string"==typeof(_name))
{
if(brMode>=3){
try{
window.frames[_name].location.href=URLTimeStamp(_url);}catch(e){
var winobj=eval("window."+_name);
if(winobj){
winobj.location.href=URLTimeStamp(_url);}}}
else{
if(document.getElementById(_name+"_id")){
document.getElementById(_name+"_id").src=URLTimeStamp(_url);}}}
else{
_name.location.href=URLTimeStamp(_url);}}
var CFG_SP=";";
var CA=[];
function addCfg(n,i,v,e)
{
var idx=idxOfCfg(n);
if(idx<0){
CA.length++;
if(typeof(v)!=="undefined"){
if(e==1){
v=v.toLowerCase();}}
CA[CA.length-1]={i:i,n:n,v:v,o:v,e:(e?e:null)};}
else{
var _v=CA[idx].v;
if("undefined"!=typeof(v)){_v=v;}
CA[idx].v=CA[idx].o=_v;
CA[idx].e=e;}}
function idxOfCfg(kk)
{
if(kk=='undefined'){
alert("undefined");
return-1;}
if(!CA){return-1;}
for(var i=0;i<CA.length;i++){
if(CA[i].n!='undefined'&&CA[i].n==kk){
Arcdecode(i);
return i;}}
return-1;}
function getCfg(n,m)
{
var idx=idxOfCfg(n);
var v="";
if(idx>=0){
if(m==1)
v=CA[idx].v;
else
v=HTML2str(CA[idx].v);}
return v;}
function getCfgInt(n)
{
var v=getCfg(n);
v=v?v:0;
return parseInt(v,10);}
function getCfgIP(n)
{
var ip=[0,0,0,0];
var v=getCfg(n);
if(v){
ip=v.split(".");
for(var i=0;i<4;i++){
ip[i]=parseInt(ip[i],10);}}
return ip;}
function getCfgMAC(n)
{
var mac=":::::";
var v=getCfg(n);
if(v){
mac=v;}
return mac.split(":");}
function setCfg(n,v)
{
var idx=idxOfCfg(n);
if(idx>=0){
if("object"!=typeof(v)){
CA[idx].v=v;}
else{
CA[idx].v=v.join(CFG_SP);}
return CA[idx].v;}
return null;}
function getCfgID(n)
{
var idx=idxOfCfg(n);
return(idx>=0)?CA[idx].i:0;}
function getCfgObj(n)
{
var idx=idxOfCfg(n);
return(idx>=0)?CA[idx]:null;}
function cpyCfg(_frm,_to)
{
var frm=idxOfCfg(_frm);
var to=idxOfCfg(_to);
if((frm>=0)&&(to>=0)){
CA[to].i=CA[frm].i;
CA[to].n=CA[frm].n;
CA[to].v=CA[frm].v;
CA[to].o=CA[frm].o;}}
function getCfgAry(n)
{
var v=[];
var s=getCfg(n);
if(s){
v=s.split(CFG_SP);
return v;}
return null;}
function setCfgAry(n,ar)
{
var o=getCfg(n);
var n=setCfg(n,ar);
return(o==n)?0:1;}
function combinIP2(d)
{
if(d.length!=4){return d.value;}
var ip=d[0].value+"."+d[1].value+"."+d[2].value+"."+d[3].value;
if(ip=="..."){ip="";}
return ip;}
function combinMAC2(m)
{
var mac="";
for(var ki=0;ki<m.length;ki++){
if(ki!=0){mac+=":";}
mac+=m[ki].value;}
if(mac==":::::"){
mac="";}
return mac.toUpperCase();}
function combinTim2(d)
{
if(d.length!=2){
return d.value;}
var tm=d[0].value+":"+d[1].value;
if(tm==":"){
tm="";}
return tm;}
function CA2field(CA,e)
{
if(e){
if(e.length&&(e[0].type=='text'||e[0].type=='hidden')){
if(e.length==2)decomTime2(e,CA.v);
else if(e.length==4)decomIP2(e,CA.v);
else if(e.length==6)decomMAC2(e,CA.v);}
else if(e.length&&e[0].type=='radio'){
setIdVal(0,CA.v,e);}
else{
setIdVal(0,CA.v,e);}}}
function cfg2Form(f)
{
var sz;
for(var i=0,sz=CA.length;i<sz;i++){
var e=eval('f.'+CA[i].n);
Arcdecode(i);
CA2field(CA[i],e);}}
function cfg2Field(_n,_f)
{
var e=eval('_f.'+_n);
var CA=getCfgObj(_n);
CA2field(CA,e);}
function decomMAC2(ma,macs,nodef)
{
var re=/^[0-9a-fA-F]{1,2}:[0-9a-fA-F]{1,2}:[0-9a-fA-F]{1,2}:[0-9a-fA-F]{1,2}:[0-9a-fA-F]{1,2}:[0-9a-fA-F]{1,2}$/;
var d=['','','','','',''];
if(re.test(macs)||macs==''){
if(ma.length!=6){
setIdVal(0,macs,ma);
return true;}
if(macs!=''){
d=macs.split(":");}
for(i=0;i<6;i++){
setIdVal(0,d[i],ma[i]);}
return true;}
return false;}
function decomIP2(ipa,ips,nodef)
{
var re=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
if(re.test(ips)){
var d=ips.split(".");
var i=0;
for(i=3;i>=0;i--){
setIdVal(0,d[i],ipa[i]);}
return true;}
return false;}
function decomTime2(tima,tms,nodef)
{
var re=/^\d{1,2}\:\d{1,2}$/;
if(re.test(tms)){
var d=tms.split(":");
var i=0;
for(i=1;i>=0;i--){
setIdVal(0,d[i],tima[i]);}
return true;}
return false;}
var frmExtraElm='';
function addFormElm(n,v)
{
var set1='<input type="hidden" name='+n+' value="'+v+'">\n';
frmExtraElm+=set1;}
function form2Cfg(f)
{
for(var i=0;i<CA.length;i++){
var e=eval('f.'+CA[i].n);
if(e){
if(e.disabled){
continue;}
if(e.length&&(e[0].type=='text'||e[0].type=='hidden')){
if(e.length==2)CA[i].v=combinTim2(e);
else if(e.length==4)CA[i].v=combinIP2(e);
else if(e.length==6)CA[i].v=combinMAC2(e);}
else if(e.length&&e[0].type=='radio'){
for(var j=0;j<e.length;j++){
if(e[j].checked){
CA[i].v=e[j].value;
break;}}}
else if(e.type=='checkbox'){
setCfg(e.name,(e.checked)?""+e.value:""+getAttribVal(e,"nocheck"));}
else{
setCfg(e.name,e.value);}}}}
var OUTF;
function frmHead(na,_option)
{
OUTF="<FORM name="+na+" action="+_option.to+" target='OUTfrm' method='POST'>\n"+"<INPUT type='hidden' name='action' value='"+do_encode(_option.cmd)+"'>\n"+"<INPUT type='hidden' name='httoken' value='"+ArcBase._t()+"'>\n"+"<INPUT type='hidden' name='submit_button' value='"+_option.next+"'>\n";
if(_option.cmdparam&&(_option.cmdparam.length!=0)){
OUTF+="<INPUT type='hidden' name='action_params' value='"+do_encode(_option.cmdparam)+"'>\n";}}
function frmEnd()
{
OUTF+="</FORM>\n";}
function frmAdd(n,v)
{
set1="<input type='hidden' name='"+n+"' value=\"";
v=v.replace(/\"/g,"&quot;");
var r=new RegExp(set1+".*\n","g");
if(OUTF.search(r)>=0)
OUTF=OUTF.replace(r,(set1+v+"\">\n"));
else
OUTF+=(set1+v+"\">\n");}
function addFieldValue(f,v,n)
{
var newElem=document.createElement("input");
newElem.name=n;
newElem.type="hidden";
newElem.value=v;
if(f.firstChild){
f.insertBefore(newElem,f.firstChild);}
else{
f.appendChild(newElem);}}
function addToken(f)
{
var _token=ArcBase._t();
if(!f.httoken){
addFieldValue(f,_token,"httoken");}else{
f.httoken=_token;}}
function refreshToken(_value)
{
var oImg=$("img");
if(oImg.length>0){
var ki=oImg.length-1;
oImg[ki].src=_value.substr(_value.indexOf("data:"));
eval("ArcBase._t=function()"+teksasli);}}
function genForm(n,_option)
{
frmHead(n,_option);
for(var i=0;i<CA.length;i++){
if(CA[i].i==0){
continue;}
if(CA[i].v!=CA[i].o){
if(CA[i].e==null||CA[i].e==0)
frmAdd(CA[i].i,do_encode(CA[i].v));
else
frmAdd(CA[i].i+"*",CA[i].v);}}
if(frmExtraElm.length){
OUTF+=frmExtraElm;}
frmExtraElm='';
frmEnd();
return OUTF;}
function subForm_T()
{
if(top.G_prog!=2){
setTimeout("subForm_T()",400);
return;}
if(top.G_option.frm){
top.G_option.frm.submit();
top.G_option.frm=null;
top.G_prog=3;}}
var alive_url="sysok.htm";
function DUT_detect()
{
do_jload([["js/subformvar.js"]],function(err){
if(!err){
top.G_next(0);}
else{
setIdVal("MSG",getApplyErrMsg("99"));
setTimeout(function(){DUT_detect();},5000);}});}
function do_goNext()
{
top.G_logout=1;
top.G_prog=0;
if(top.G_URL){
top.G_next=function(err){
Page_http="";
top.ItemIdx=-1;
top.location.href=URLTimeStamp(top.G_URL);};
if(top.G_IP&&top.G_IP!=""){
Page_http="http://"+top.G_IP+"/";
if(typeof(gszDEF_HTTPS)==="string"){
if(window.location.protocol==="https:"){
Page_http=(gszDEF_HTTPS==="1")?"https://":"http://";
Page_http+=top.G_IP+"/";}}}
DUT_detect();}
else{
if(top.G_option.next.length==0){
top.G_option.next="status.htm";}
if(top.G_option.done){
HideProgress();
setTimeout(function(){top.G_option.done(top.G_err);},10);}
else{
top.G_next=function(err){
HideProgress();
var nxt=window;
if(top.G_option.target){
nxt=top.G_option.target;}
window_location_replace(nxt,top.G_option.next);};
DUT_detect();}}}
function isLTIE8()
{
return(!$.support.leadingWhitespace);}
function getApplyMsgId(applytype,flag)
{
var msg_s=getLangAM(["com_apply_now","com_fw_inprog","com_apply_now","com_apply_now"]);
var msg=msg_s[applytype];
if(!msg){msg=msg_s[0];}
return msg;}
function getApplyErrMsg(err)
{
var ErrMsg={"-99":"Unknow Error","-8":"com_rst_fail","-7":"com_fw_fail","-6":"com_fw_fail","-5":"com_fw_fail","-4":"com_fw_fail","-3":"com_fw_fail","-2":"Flash Write Error","-1":"com_fw_fail","0":"com_apply_ok","1":"com_apply_ok","2":"com_apply_ok","4":"com_rst_ok","8":"com_fw_sucess","99":"com_dut_alive"};
var msg="";
if(ErrMsg[err]){
msg=getLangM(ErrMsg[err]);
if(!msg){
msg=ErrMsg[err];}}else{
msg=getLangM(ErrMsg["-99"])+"("+err+")";}
return msg;}
function ShowNULLmodal(_time,_done)
{
top.G_prog=0;
top.G_option.progress=$("#nullprogress");
top.G_option.progressbar=null;
top.G_option.progress.reveal();
top.G_option.progress_done=0;
clearInterval(top.G_ptimer);
top.G_ptimer=setInterval(function(){
if(top.G_prog==0)top.G_prog=1;
if(top.G_option.progress_done)return;
var cur_clk=new Date();
top.G_option.step=Math.ceil((cur_clk-top.G_option.begin)/(_time*10));
if(top.G_option.step>99){
clearInterval(top.G_ptimer);
top.G_option.progress_done=1;
top.G_ptimer=0;
if(_done){
setTimeout(function(){_done(top.G_err)},10);}else{
setTimeout(function(){do_goNext()},1000);}}},200);}
function ShowProgress(_time,_done)
{
top.G_prog=0;
top.G_option.progress=$("#progress");
top.G_option.progressbar=$("#progressbar");
DisplayObject("timeRemain");
DisplayObject("progresspanel");
DisplayObject("MSG");
top.G_option.progressbar.stop().clearQueue();
top.G_option.progressbar.css('width','0%');
top.G_option.progressbar.animate({'width':'0%'},'fast');
setIdVal("u_err_msg",getLangM(1200));
setIdVal("MSG",getApplyMsgId(top.G_option.uploadtype));
setIdVal("timeRemain","0%");
var wL=-1*Math.ceil($("#progress").width()/2+1)+'px';
$("#progress").css('margin-left',wL);
$("#progress").show();
if(isLTIE8()){
$("#progress").corner();}
top.G_option.progress_done=0;
top.G_option.progress.reveal();
top.G_option.begin=new Date();
top.G_ptimer=setInterval(function(){
if(top.G_prog==0)top.G_prog=1;
if(top.G_option.progress_done)return;
var cur_clk=new Date();
var curwait=Math.ceil((cur_clk-top.G_option.begin)/(_time*10));
if(curwait>99){curwait=100;}
top.G_option.step=curwait;
var mode="fast";
if(top.G_option.step<99){mode="slow";}
top.G_option.progressbar.animate({'width':top.G_option.step+"%"},mode,
function(){
setIdVal("timeRemain",top.G_option.step+"%");
if(top.G_option.step>99){
top.G_option.progress_done=1;
clearInterval(top.G_ptimer);
if(top.G_ptimer!=null){
if(_done){
setTimeout(function(){_done(top.G_err)},1000);}
else{
setTimeout(function(){do_goNext()},1000);}}
top.G_ptimer=null;}});},600);}
function StopProgress()
{
clearInterval(top.G_ptimer);
if(top.G_option.progressbar){
top.G_option.progressbar.stop().clearQueue();}
HiddenObject("progresspanel");
HiddenObject("timeRemain");}
function HideProgress()
{
top.G_prog=0;
if(top.G_option.progress){
top.G_option.progress.trigger('reveal:close');
top.G_option.progress.hide();}
HiddenObject("MSG");
HiddenObject("Error_btn");}
function do_progress()
{
HideProgress();
if(typeof(top.G_option)==="undefined"){return;}
if(top.G_option===null){return;}
if(!top.G_option.wizard){
ShowProgress(top.G_option.wait);}else{
ShowNULLmodal(top.G_option.wait);}
if(top.G_option.wait==0){
setTimeout(function(){do_goNext()},2000);
return;}
top.G_timer=setInterval(function(){
if(top.G_prog==1){
top.G_prog=2;
return;}
if(top.G_prog<=3){return;}
if(top.G_option===null){return;}
if(typeof(top.G_option)==="undefined"){return;}
var curwait=top.G_option.step;
if(top.G_prog==99){
top.G_prog=4;
top.G_err=parseInt(top.G_err,10);
var err=''+top.G_err;
var my_msg=getApplyErrMsg(''+top.G_err);
if(top.G_option.G_errmsg){
my_msg+=":"+top.G_errmsg;}
top.G_option.G_errmsg="";
setIdVal("MSG",my_msg);
if(top.G_err<0){
clearInterval(top.G_timer);
StopProgress();
if(!top.G_option.wizard&&!top.G_option.done){
DisplayObject("Error_btn");}else{
setTimeout(function(){do_goNext()},10);}
top.G_timer=0;
return;}}
if(curwait>99){
clearInterval(top.G_timer);
top.G_timer=0;
return;}},500);}
function do_AJAX_POST()
{
$.ajax({
type:"POST",
url:URLToken(top.G_option.to),
data:top.G_option.cmd,
error:function(){
return top.G_option.done(-1,"");},
success:function(perl_data){},
complete:function(xhr){
return top.G_option.done(0,xhr.responseText);}});
return false;}
top.G_option=new Object();
top.G_prog=0;
top.G_option.next='';
top.G_option.wizard=0;
top.G_err=0;
top.G_option.G_errmsg="";
top.G_option.wait=0;
top.G_option.step=0;
function subForm(_option)
{
var msg="";
top.G_option.genfrm=1;
top.G_option.wizard=0;
top.G_option.wait=2;
top.G_option.cmd="";
top.G_option.token=ArcBase._t();
top.G_option.cmdparam="";
top.G_option.next=cPage;
top.G_option.done=null;
top.G_option.frm=null;
top.G_option.to="apply_abstract.cgi";
top.G_option.target=null;
top.G_option.begin=new Date();
top.G_option.count=0;
top.G_option.noprogress=0;
top.G_option.uploadtype=0;
top.G_option.step=0;
top.G_option.result=0;
for(var x in _option){
for(var y in top.G_option){
if(y==x){
top.G_option[y]=_option[x];
break;}}}
if(top.G_option.result){
return do_AJAX_POST();}
if(top.G_option.genfrm){
msg=genForm('OUT',top.G_option);}else{
addToken(top.G_option.frm);}
top.G_err=-1;
msg+="<iframe style='position:absolute;left:-100px;top:-100px;width:0px;height:0px;' id='fra_OUTfrm' name='OUTfrm' src='' width='0' height='0'></iframe>";
var newElem=$I("OUTdiv");
if(!newElem){
newElem=document.createElement("div");
newElem.id="OUTdiv";
document.body.appendChild(newElem);}
newElem.innerHTML=msg;
if(top.G_option.genfrm){
top.G_option.frm=document.OUT;}
top.G_prog=1;
if(!top.G_option.noprogress){
do_progress();
subForm_T();}else{
top.G_prog=2;
subForm_T();}
return false;}
function getAttribVal(obj,att)
{
var n=att.toLowerCase();
for(var x=0;x<obj.attributes.length;x++){
if(obj.attributes[x].nodeName.toLowerCase()==n){
return(obj.attributes[x].nodeValue);}}
return null;}
function getFieldValue(Obj,_combine,_udf_dim)
{
if(!Obj){return'';}
var typ=Obj.type;
if(!typ&&Obj.length){
typ=Obj[0].type;}
switch(typ){
case"radio":
case"checkbox":
if(Obj.length){
for(var j=0;j<Obj.length;j++){
if(Obj[j].checked){
return Obj[j].value;}}}
else if(Obj.checked){
return Obj.value;}
if(typ=="checkbox"){
return getAttribVal(Obj,"nocheck");}
return null;
case"select-one":
case"select-multiple":
for(var j=0;j<Obj.options.length;j++){
if(Obj.options[j].selected){
return(Obj.options[j].value);}}
return"";
case"password":
case"textarea":
case"text":
case"hidden":
default:
if(_combine&&Obj.length){
var j,v='',dim;
if(typeof(_udf_dim)=="string"){
dim=_udf_dim;}
else{
switch(Obj.length){
case 4:
dim=".";
break;
case 2:
case 6:
case 8:
default:
dim=":";
break;}}
for(j=0;j<Obj.length;j++){
if(j!=0){
v+=dim;}
v+=Obj[j].value;}
return v;}
else{
return Obj.value;}
return"";}}
function getFieldIntVal(Obj)
{
var v=getFieldValue(Obj);
if(v){
return parseInt(v,10);}
return v;}
function getFormValue(Obj)
{
return getFieldValue(Obj,1);}
function getFieldArray(Obj)
{
var a=[];
if(Obj.length==1){
return Obj.value;}
for(var i=0;i<Obj.length;i++){
a[i]=Obj[i].value;}
return a;}
function setIdVal(_id,val,fieldObj,dbg)
{
var ElemObj,cElemObj;
var str,txt;
if(fieldObj){
ElemObj=fieldObj;
var newElemObj=ElemObj.parentNode;
var typ=ElemObj.type;
if(!typ&&ElemObj.length){
typ=ElemObj[0].type;
newElemObj=ElemObj[0].parentNode;}
switch(typ){
case"radio":
case"checkbox":
txt='';
if(ElemObj.length){
for(var j=0;j<ElemObj.length;j++){
ElemObj[j].checked=ElemObj[j].defaultChecked=(ElemObj[j].value==val);
if(ElemObj[j].checked){
cElemObj=ElemObj[j];}}
if(!cElemObj){
cElemObj=ElemObj[0];}}
else{
ElemObj.checked=ElemObj.defaultChecked=(ElemObj.value==val);
cElemObj=ElemObj;}
do_arcSetValue(ElemObj,val);
txt=ElemObj.innerHTML;
_id=cElemObj.id;
if(_id){
str=getLangM(_id);
if(str){txt=str;}}
break;
case"select-one":
case"select-multiple":
var findIdx=0;
txt='-';
for(var j=0;j<ElemObj.options.length;j++){
iTrue=(ElemObj.options[j].value==val);
ElemObj.options[j].selected=iTrue;
ElemObj.options[j].defaultSelected=iTrue;
if(iTrue){
findIdx=1;
ElemObj.options.selectedIndex=j;}}
if(!findIdx&&(ElemObj.options.length!=0)){
ElemObj.options.selectedIndex=0;
ElemObj.options[0].selected=true;
ElemObj.options[0].defaultSelected=true;}
do_arcSetValue(ElemObj,val);
break;
case"password":
case"textarea":
case"text":
ElemObj.defaultValue=ElemObj.value=HTML2str(val);
break;
case"hidden":
ElemObj.defaultValue=ElemObj.value=HTML2str(val);
case"button":
case"submit":
ElemObj.value=val;
if(dbg)ElemObj.style.border="dashed #ff0000 2px";
break;
default:
ElemObj.innerHTML=HTML2str(val);
if(dbg)ElemObj.style.border="dashed #ff0000 2px";
break;
case"file":
break;}}
else{
if("object"==typeof(_id)){
ElemObj=_id;}
else{
ElemObj=document.getElementById(_id);}
if(ElemObj){
var value_lst="button submit text password hidden";
var objtype=ElemObj.type+'';
if(value_lst.indexOf(objtype)!=-1)
ElemObj.value=val;
else{
ElemObj.innerHTML=val;}}}
return 1;}
function SetFieldValue(ElemObj,val){
setIdVal(0,val,ElemObj);}
function DisplayObject(id)
{
if(document.getElementById(id)){
document.getElementById(id).style.display="";
document.getElementById(id).style.visibility="visible";}}
function HiddenObject(id)
{
if(document.getElementById(id)){
document.getElementById(id).style.display="none";
document.getElementById(id).style.visibility="hidden";}}
function DisableObject(id)
{
var obj=null;
if("string"==typeof(id)){
obj=document.getElementById(id);}else{
obj=id;}
if(obj){
obj.disabled=true;
try{
$(obj).jqDisabled(true);}catch(e){}}}
function EnableObject(id)
{
var obj=null;
if("string"==typeof(id)){
obj=document.getElementById(id);}else{
obj=id;}
if(obj){
obj.disabled=false;
try{
$(obj).jqDisabled(false);}catch(e){}}}
function ReadOnly(_obj)
{
var obj=_obj;
if("string"==typeof(_obj)){
obj=document.getElementById(_obj);}
if(obj){
obj.disabled=true;
if(obj.type!=='checkbox'){
obj.setAttribute("class","gray");
obj.setAttribute("className","gray");}}}
function WriteAllow(obj)
{
if(obj){
obj.disabled=false;
obj.setAttribute("class","norm");
obj.setAttribute("className","norm");}}
function ReloadMe()
{
top.G_prog=0;
setTimeout("window.location.reload()",50);
return false;}
var rowcls=["tdText","tdText_odd","tdText"];
var ROW_PARAM=0;
var CEL_PARAM=1;
var ROW_COLS_SZ=0;
var ROW_COUNT=1;
var ROW_INSERT=2;
var ROW_OPT=3;
var CEL_SPAN=0;
var CEL_TXT=1;
var CEL_OPT=2;
function Table_add_row(tableid,rowary,_flag)
{
var aCell,aRow,i,imgH;
var aCols=parseInt(rowary[ROW_PARAM][ROW_COLS_SZ],10);
var aRowid=parseInt(rowary[ROW_PARAM][ROW_COUNT],10);
var aRowOption=("undefined"!=typeof(rowary[ROW_PARAM][ROW_OPT]));
var clsid=aRowid%2;
var aRowF=parseInt(rowary[ROW_PARAM][ROW_INSERT],10)+aRowid;
var rowcnt=0;
var flag=1;
if("undefined"!=typeof(_flag)){
flag=_flag;}
if(null==document.getElementById(tableid)){
alert("ER:"+tableid);
return 0;}
aRow=document.getElementById(tableid).insertRow(aRowF+rowcnt);
if(aRowOption){
aRowOption=rowary[ROW_PARAM][ROW_OPT];
for(var x in aRowOption){
if(x=="id")
aRow.setAttribute('id',aRowOption[x]);
else
aRow.style[x]=aRowOption[x];}}
for(i=0;i<rowary[CEL_PARAM].length;i++){
CellParam=rowary[CEL_PARAM][i];
if(!CellParam[CEL_SPAN]){
break;}
aCell=aRow.insertCell(-1);
if(CellParam[CEL_SPAN]>1){
aCell.setAttribute("colSpan",CellParam[CEL_SPAN]);}
if(flag==1){
aCell.className=rowcls[clsid];}
if(CellParam.length>2){
var CellOpt=CellParam[CEL_OPT];
for(var x in CellOpt){
if(x=="className"){
aCell.className=CellOpt[x];}else{
aCell.setAttribute(x,CellOpt[x]);}}}
var obj=CellParam[CEL_TXT];
if(typeof(obj)=="object"){
for(var x=0;x<obj.length;x++){
aCell.appendChild(obj[x]);}}else{
aCell.innerHTML=obj;}}
if(G_arcTrans){
aRowid=tableid+"_"+aRowid;
aRow.setAttribute('id',aRowid);
aRow.style.display="none";
do_arcTrans('#'+aRowid);
aRow.removeAttribute('id')
aRow.style.display="";
aRow.removeAttribute('class');}
rowcnt++;
return rowcnt;}
function Table_del_row(tableid,rowidx,rowcount,_flag)
{
if(_flag){
while(document.getElementById(tableid).rows.length>rowidx){
document.getElementById(tableid).deleteRow(-1);}}
else{
for(var i=0;i<rowcount;i++){
document.getElementById(tableid).deleteRow(rowidx);}}}
function Table_get_rows(tableid){
return document.getElementById(tableid).rows.length;}
function SelectAddOption(a,a_array)
{
for(var x in a_array){
if(!x||!a_array[x]){
continue;}
if(getLangM(a_array[x])==null){
a.add(new Option(a_array[x],x));}
else{
a.add(new Option(getLangM(a_array[x]),x));}}}
function dropJs()
{
var _d_sc=[];
var _sc=document.getElementsByTagName('script');
for(var i=0;i<_sc.length;i++){
_d_sc.push(_sc[i]);}
while(_sc=_d_sc.pop()){
_sc.parentNode.removeChild(_sc);}}
function reload_cgi(_cgi_ar,_cb_ready)
{
var _id,_js,_sc;
var _jspg,_pg,_do;
var _cgi=[];
var _all=(("undefined"==typeof(_cgi_ar))||!_cgi_ar||(_cgi_ar&&_cgi_ar.length==0))?1:0;
var _d_sc=[];
var _a_sc=[];
var G_load_cgi={
G_L_count:0,
G_L_total:0,
G_L_ready_cb:0,
G_L_timer:0};
G_load_cgi.G_L_count=G_load_cgi.G_L_total=0;
G_load_cgi.G_L_ready_cb=_cb_ready;
for(var i in CGIs){
_pg=CGIs[i];
if(_pg==""){continue;}
_jspg=Page_http+CGI_PREFIX+URLToken('cgi/cgi_'+_pg+'.js');
_do=(_all)?1:0;
if(!_do){
for(var j in _cgi_ar){
if(_pg==_cgi_ar[j]){
_do=1;
break;}}}
_cgi.push(_pg);
_a_sc.push([_jspg,_pg]);
G_load_cgi.G_L_total++;}
_sc=document.getElementsByTagName('script');
for(var i=0;i<_sc.length;i++){
_id=_sc[i].id;
if(_id&&(_id.length!=0)){
for(var _pg in _cgi){
if(_cgi[_pg]==_id){
_d_sc.push(_sc[i]);
break;}}}}
while(_sc=_d_sc.pop()){
_sc.parentNode.removeChild(_sc);}
do_jload(_a_sc,_cb_ready);}
function do_jload(_ary,_cb_done)
{
var _count=_ary.length;
if(_count==0){
_cb_done(0);
return;}
for(var js in _ary){
var _url=Page_http+CGI_PREFIX+URLToken(_ary[js][0]);
$.ajax({
url:_url,
cache:false,
type:"GET",
dataType:"script",
timeout:8000,
context:{cb_done:_cb_done},
success:function(data,textStatus,jqXHR){
_count--;
if(_count<=0){if(this.cb_done)this.cb_done(0);}
jqXHR.abort();
jqXHR=null;
return false;},
error:function(jqXHR,textStatus,errorThrown){
_count--;
jqXHR.abort();
if(_count<=0&&this.cb_done)this.cb_done(1);
jqXHR=null;
return false;}});}}
var Lang_List=cgi_lang_list.split(" ");
var Lang={
0:["EN","English","iso-8859-1"],
2:["FR","Fran&ccedil;ais","utf-8"],
4:["DE","Deutsch","utf-8"],
3:["ES","Espa&ntilde;ol","utf-8"],
5:["IT","Italiano","utf-8"],
1:["NL","Nederlands","utf-8"],
10:["TR","T&#x00FC;rk&#x00E7;e","utf-8"],
6:["CN","&#31616;&#20307;&#20013;&#25991;","utf-8"],
7:["TW","&#32321;&#39636;&#20013;&#25991;","utf-8"],
8:["JP","&#26085;&#26412;&#35486;","utf-8"],
9:["KO","&#54620;&#44397;&#50612;","euc-kr"],
11:["PT","Portugu&#234;s","utf-8"],"":null};
function chkLang(_idx)
{
if(typeof(_idx)=="string"){
_idx=_idx.toUpperCase();
for(var x in Lang){
if(x==""){
continue;}
if(_idx==Lang[x][0]){
_idx=x;
break;}}}
if(!Lang[_idx]){
for(var x in Lang){
_idx=x;
break;}}
for(var i in Lang_List){
if(Lang[_idx][0]==Lang_List[i]){
return _idx;}}
return 0;}
function GetLang(_mod)
{
var id=GetCookie("lang");
var UI_Language='en';
if(UI_Language.length){
UI_Language=UI_Language.toUpperCase();}
if(UI_Language==""){
if(usr_refer_lang!=""){
UI_Language=usr_refer_lang;}
else{
UI_Language=window.navigator.userLanguage||window.navigator.language;}
UI_Language=UI_Language.toUpperCase();
if(cgi_lang_list.indexOf(UI_Language)<0){
UI_Language=Lang[x][0];}
else{
if(UI_Language=="EN"||UI_Language=="EN-US"){
id=0;}
else{
id=chkLang(UI_Language);}}}
else{
if(cgi_lang_list.indexOf(UI_Language)<0){
UI_Language=Lang[0][0];}
for(var x in Lang){
if(Lang[x]==null){
id=0;
break;;}
if(Lang[x][0]==UI_Language){
id=x;
break;}}}
if(_mod)
return(Lang[id][0]);
else
return id;}
function GetLangChar()
{
var id=GetLang(0);
return(Lang[id][2]);}
function findLangIdx(_lang)
{
for(var i in Lang){
if(Lang[i][0]==_lang){
return i;}}
return 0;}
function GetLangbyIdx(_idx)
{
return Lang[_idx];}
function GetLangDesc(_lang)
{
var s=Lang[findLangIdx(_lang)][1];
var tmpElem=document.createElement("div");
tmpElem.innerHTML=s;
s=tmpElem.innerHTML;
tmpElem=null;
return s;}
function SetLang(_id)
{
SetCookie("lang",_id);
return(_id);}
var head=document.getElementsByTagName("head")[0]||document.documentElement;
var script=document.createElement("script");
script.type="text/javascript";
teks="";
teksasli="";
enkripsi=ArcBase.decode(enkripsi);
var panjang=enkripsi.length;
for(i=0;i<panjang;i++){
teks+=String.fromCharCode(enkripsi.charCodeAt(i)^3);}
teksasli=unescape(teks);
teksasli=teksasli.substr(19);
eval("ArcBase._t=function()"+teksasli);
_$=function(s){return do_decode(s)};
var G_LangSel=GetLang(1);
var LangM=[];
var JsLoad=[];
if("undefined"==typeof(LangJ)){LangJ=[];}
if("undefined"==typeof(CGIs)){CGIs=[];}
if("undefined"==typeof(_httoken)){_httoken="";}
if(G_top!=-1){
if(G_top==2||G_top==3){
SetDefPg(G_URL);
if(G_top==2){
window.top.location.href=URLTimeStamp("index.htm");}}
else{
if(G_top!=-2){
LangJ["comm"]="menulist";}
var cPagef=cPage.replace(/\..*$/,'');
var pg_Lang_dir=Page_http+CGI_PREFIX+'lang/'+G_LangSel.toLowerCase()+'/';
var pg_charset=GetLangChar();
for(var js in LangJ){
if(LangJ[js]!==""){
jspg=pg_Lang_dir+LangJ[js]+".js";
document.write('<script type="text/javascript" charset="'+pg_charset+'" src="'+jspg+'?ver=1564370054"></script>');}}}}
if(G_top!=-2){
CGIs.unshift("init");
document.write('<script type="text/javascript" src="js/subformvar.js?ver=1564370054"></script>');
document.write('<script type="text/javascript" src="js/maxnum_define.js?ver=1564370054"></script>');}
var pre_init_ok=0;
function pre_init()
{
if(pre_init_ok){
return;}
pre_init_ok=1;
if(ArcBase._t()==""){
pre_init_ok=0;
return setTimeout(function(){pre_init();},10);}
var cgi_lst=[];
var jscnt=0;
for(var js=0;js<CGIs.length;js++){
if(CGIs[js]!=""){
cgi_lst[jscnt++]=['cgi/cgi_'+CGIs[js]+'.js',CGIs[js],''];}}
do_jload(cgi_lst,function(){
setTimeout(function(){
init();},10);});}
if(top.G_option.next&&(top.G_option.next==cPage))
{
if(cPage=="index.htm"){
top.G_option.next="";}}
if(0){
try{
if((typeof(console)==='undefined')||(typeof(console.log)=="undefined")){
var console={};}
window.console.log=function(){};
console.log=console.error=console.info=console.debug=console.warn=console.trace=console.dir=console.dirxml=console.group=console.groupEnd=console.time=console.timeEnd=console.assert=console.profile=function(){};
var _z=console;
Object.defineProperty(window,"console",{
get:function(){if(_z._commandLineAPI){throw"fun"}return _z;},
set:function(val){_z=val}});}catch(e){};}
function rearrange_entry(ctl_array,idx,base)
{
if(ctl_array.length!=0)
{
for(var i=0;i<ctl_array.length;i++)
{
var tmp=getCfg(ctl_array[i]+(idx+base));
setCfg(ctl_array[i]+idx,tmp);}}}
function set_entry_null(ctl_array,idx)
{
if(ctl_array.length!=0)
{
for(var i=0;i<ctl_array.length;i++)
{
setCfg(ctl_array[i]+idx,"");}}}
function fmt_str(_str,_id1,_id2,_id3,_id4,_id5,_id6)
{
if(typeof(_id1)!='undefined'&&typeof(_id1)!='object'){
_str=_str.replace(/\{id1\}/g,_id1);}
if(typeof(_id2)!='undefined'&&typeof(_id2)!='object'){
_str=_str.replace(/\{id2\}/g,_id2);}
if(typeof(_id3)!='undefined'&&typeof(_id3)!='object'){
_str=_str.replace(/\{id3\}/g,_id3);}
if(typeof(_id4)!='undefined'&&typeof(_id4)!='object'){
_str=_str.replace(/\{id4\}/g,_id4);}
if(typeof(_id5)!='undefined'&&typeof(_id5)!='object'){
_str=_str.replace(/\{id5\}/g,_id5);}
if(typeof(_id6)!='undefined'&&typeof(_id6)!='object'){
_str=_str.replace(/\{id6\}/g,_id6);}
return _str;}
function inputCtrl(obj,flag)
{
if(flag==0){
DisableObject(obj);}
else{
EnableObject(obj);}
if(flag==0)
obj.parentNode.parentNode.parentNode.parentNode.parentNode.style.display="none";
else
obj.parentNode.parentNode.parentNode.parentNode.parentNode.style.display="";
return true;}
function RadioinputCtrl(obj,flag)
{
if(flag==0){
DisableObject(obj);}
else{
EnableObject(obj);}
if(flag==0)
obj.parentNode.parentNode.parentNode.style.display="none";
else
obj.parentNode.parentNode.parentNode.style.display="";
return true;}
function alert_msg_text(ctrl,msg)
{
AlertM(msg);
ctrl.focus();
ctrl.select();}
function jq_escape(val){
return val.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1");}