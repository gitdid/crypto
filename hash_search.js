//PLEASE SHARE HASHES AFTER FIND SOME, OR TIP TO 0x0ee6c3646ed7ddc6b3c1a57482623afac9666282
global.fetch = require("node-fetch");
const crypto = require('crypto');
const Web3 = require("web3");
const privateKeyToAddress = require('ethereum-private-key-to-address');


const bc_hashes=[
'bef0ba1c61adabc3924c0f649d9f3be5f8d7ba61f9d28b98ef104d84c699d275',
'23a530750d6dd045b843573c27da61d0f81402bd4633142ae0ab8d9582e81877',
'b8b08c3b46ad222ec63dbb4bbc15e5059f1e2b22cec1cf53ebfe3b00b4cd0325',
'5282683c7a46ae665cab3072cb433ee0bbc45b70c12002b795bcd8928d3e1b23',
'f0f8483a4ab14b29b0352fc4ac98adcc3b132d39c5b0b9af10defb308ac48f16',
'976bc5c5b20fe8b9b4a9f24b743593ad9d2587a5fc4ba51451c635adc5050ff8',
'a40eb10f56c25785a11f99928c12ab91415abd00bc9056ca59ef56d42ed604f6',
'df2ff94cab0840ab0bc29ca0f183e7281e1f70944e0af318bb59919770cb21a1',
'bae02bd73fbebc9d8b592ec738e0135214b566a8ee3f771886c2b0a8bf8fcada',
'bf5ffdcd3fe7e0595902ab0dea0ae786bf49caeffd25e82168af97dc37fdc4e7',
'a3b33be555a86d714bb97b2d18ce95373505bd9fbe2a05ac659896c1a3b64f89',
'5456db2720dcee5ec2b6424935fc5f2a9deb3a4804d672c2d33eb5637315c39b',
'445070a377ee1e5602633c2f95ba573cf5c44cbaee8a3b0348fa7e9a855b3c9f',
'd676c885d72f9f496c1a94e8b4a9181b308f7c65d7c052b093a8258477aaa83e',
'f4aa4e66e593797dabdd9101750999f485d7518686851fcbeb6dab1a9d9d5911',
'ac8d1df2f64e37cd854f8c5c09d6c80214a59a7d421cabab46f13f4003fb4df3',
'093056b7a8f77d4dc6e4ae10700bf96c8e836dd3a4a86dacf7d82e4faee82e08',
'796dd064097e0e313be8de665939432ef777ff28b00afe45b676a2b5db19bf3e',
'576e1b33c29d79db18767e0551e69144e4fde39b142b952654ed016fe8142394',
'912e9de4dbfa7edf7fd904f0b1721b14cf0dadc49ac9e3346bdd0c8d97c90520',
'f368367200eb34c430201138bd82355d0fab03eb935ee28df55bdc30eeec000f',
'0f03cafee002a9197a44232dd1106735838cc6c03529d5eeb6acd24348c321eb'    
];
console.log(bc_hashes); 


var cound=0;
var check_balance =  function(data,addrs,keys){
  //  console.log('upfun',data,addrs,keys)
    var i = 0;
      console.log('wallet:',cound,'x20 keys')
    cound++;

for (var i = 0; i < 20; i++) {
   var bal= data.result[i].balance;



    if(bal!='0'){
        console.log('Finally found!!!!',bal,data,addrs,keys)
        return
    } else if(bal=='0'&&i==19){
        
   compare(); 
} 

    
}
    
}

var compare = async function(){
    var keys,addrs=[''];
    var str='';
var i = 0;

    
for (var i = 0; i < 20; i++) {
if(i==0){
   keys=[''];  
   addrs=[''];  
    str='';
}
const buf = crypto.randomBytes(256);
var encstring = crypto.createHash('sha256').update(buf).digest('hex');
var decstring = crypto.createHash('sha256').update(encstring).digest('hex');
    

    
for (var a=0; a <= bc_hashes.length; a++)
{  
   
    if(bc_hashes[a]==decstring){
        console.log('SEED CONGRATULATIONS');
        console.log('---------------');
        console.log(encstring);
        console.log(decstring);
        console.log(buf);
        console.log('---------------------------------------------------');    
        return;
    } 
    

}    
    
var addr = privateKeyToAddress(decstring); 
str=str+addr+",";      
keys.push(decstring);
addrs.push(addr);


if(i==19){
//    console.log(str);
  let url = await fetch('https://api.etherscan.io/api?module=account&action=balancemulti&address='+str+'tag=latest&apikey=2JN878JWNA7DX1G346HF23G3NDUWGF5VMY')  
    .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.log('Looks like there was a problem. Status Code: ' +  
          response.status);  
        return;  
      }


        response.json().then(function(data) {  
     
            check_balance(data,addrs,keys);
     
            
});
    }  
  )
  .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  compare();

})
  
  ;}
    
    
    
    
}

}

compare();
