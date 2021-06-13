//PLEASE SHARE HASHES AFTER FIND SOME, OR TIP TO 0x0ee6c3646ed7ddc6b3c1a57482623afac9666282

global.fetch = require("node-fetch");
const crypto = require('crypto');
const Web3 = require("web3");
const privateKeyToAddress = require('ethereum-private-key-to-address');


const bc_hashes=[
'f2a8ccf93f77e743d401db5422c9d60510d1f03079f75c6abeea0921c596c492',
'57237824af2cfcf93b0d4e79140698e756b43d16f66e331cdfe72f9d8d2ff893',
'ab7cdda9bb8b732360a7ea7d4deb6548bf35eaa1fa65ff83a7e703ef9eecee39',
'4abb37b78c1e493bda0dcfdc5a45f470f846cedfcb514d92adf3d48c50bb75a0',
'4da67a0f05f4862e8894d45fbddaa0c9e6984888bc07a3714916771862e2c99e',
'fdfb0e407d15c0c1c50d8ade8e244de8bc6844e5ff372a7537efc43f1e63d3ea',
'8c760fe88f9ea94129d878d869cb840d4392c2d2d01fc6418561887315312f95',
'cf0224dcbe7e03efa0af70a257b2626ebdd9dd858d518d3b3169c0473b811003',
'8a0b7ce4b857209d240342b703975b4c06ce9c9ca07418a17903056464636c56',
'a3b33be555a86d714bb97b2d18ce95373505bd9fbe2a05ac659896c1a3b64f89',
'5456db2720dcee5ec2b6424935fc5f2a9deb3a4804d672c2d33eb5637315c39b',
'0325390f69e1fc335eb9d6a4dfa4873c92c9c7e8ee8a5874a4f36e8568c357fa',
'a40eb10f56c25785a11f99928c12ab91415abd00bc9056ca59ef56d42ed604f6', 
'70fab6e3c20a882bd9075c76b3ef64cf698898a1a8a6f4729f62091fcbba3e10', 
'aca038fa01d398a1d8a6070df1e4a2ca18c7220b1ff9e457e8a7976c872c56ae', 
'bae02bd73fbebc9d8b592ec738e0135214b566a8ee3f771886c2b0a8bf8fcada', 
'bf5ffdcd3fe7e0595902ab0dea0ae786bf49caeffd25e82168af97dc37fdc4e7',     
'f4aa4e66e593797dabdd9101750999f485d7518686851fcbeb6dab1a9d9d5911', 
'ac8d1df2f64e37cd854f8c5c09d6c80214a59a7d421cabab46f13f4003fb4df3',         
'6d0a97123500d6366b196648373bd4822ec20a2b577f99ee87f300df21535f95', 
'5315d6d9d0564ceb29b0e3940e88c76bc2777030117f608fe52a6a0634f19c64',
'f996fc6252c1d235646ad650d96b783941136652b56c0e3c817989cc4bfae7fd',
'd6b5714df84e742a7cf67832e7b680484a8f5d42e751f7aa3929729bb33da96b',
'a3882325898872dd7006f9e223d14cfbaac5d9be40f51df1b0b37286140a52e5',
'8a635fe7ec630236f507bd85d0ef1ffdfeb4d8edf37dfd02f9f3cc93890c61f5',
'1c40ce30153092dd568023884356f36d622476b1c845f73e922659d765b7925e',
'453b86afe8aa0d4e71f5a152026c6eb60f9058dd1ab968373ce39eea24aa8fac',
'd0a1a56ea7e4ed345077a6e985981b6981d335703f2b18ba6a6691291766c683',
'31c7c9b31919adbc338b1a4f66e17dc63d2c90394beb0e346939203f050e968a',
'3ddd60dafea0db938c0e9db5f0c99ee9ef5e292d3097c75ba2d3f16b0a41d381',
'6f9b5b8fdcea55858e547dd12aa8aa8d9b9af66dd1eb638a2741e4475a1834e1',
'3dabdb143464c8fa14776806f4ac9250f32e03a1c2babfb92b7a57996cd1ad21',
'047e1ceba52aeb3aa7461d148ef209cbda5796776a336534c6a2d0caa40ddef9',
'8071e912cb3cb4444890352fc58360224d953bcbdf1c6329161f3afa0c2e4b17',
'27c1496e56f7f610d3d83d81105a4fc20b42e766cc16911652c83f395c2c6b66',
'16ff28fdbdddc8134d71eb1df442d890dd0f1b39417f7448e1b223fb09c113fb',
'4f5728c30546f5e05ef0e80ce793858ee68b675a7c3fbcf4bb07f0ddb345bbe3',
'4e651fc57ea61a35c77a2f5ab81dfc09fda533ccb90dc0a2ba5a26604ecc8ad8',
'fe321eb062a18cbd12e0fb9cdda6cf6c9b84e21c0496f0a840b766c1113e5eb6',
'4045b4029942bc0afd3994e6b4cb06ac8f2ed54f9c96c0c3fb5684469cc21a10',
'258e36ad1cce27db09ce626a0aa714250015469be062aaae5b1023932a4641a1',
'd51bce48b164eb402361f1eef251427f97e513fd27838060e0d3f84bfdcb15a4',
'4ad79f556228088aa4e9aaaa5577ddc0c5d443d8634a583ed9e101ddca2b209c',
'01a6b85a7de4b78521092b155206335cf74af835b288c4d996c922d84b1da4c3',
'a7679bcaf5dde51142a8825450c3400bef2a7591cb3bf42069e16119cd44817e',
'77a28129582c95ddb5383a082d19f7e8387be5007b4a648c81f2522c9750b8f1',
'bc6cefe06dacea7a585c1ae9c09e60352d337d7d462621755701d65e3d16274c',
'a07b511c2b6954facf5da4882555f932b990b9c914ecdc0d55241a67df933ad7',
'b6dc4043fc711701df161ad62ef75b128821332ed4ed49c8f33c4a2afe469891',
'a5d08853dd9f2a07c68a1a217fe5df062376d3e0c618cee5c880cfa2749d03f1',
'9230558b8fd9d1b9c534b142a1765103f8001651fbbda4822cbc8e4198f51889',
'19f5f916e05c437613faec23e8da59d8221999b25eb7277435675df88ce197f0',
'687ad4896c4cfda7d20a67cf9c5efb22abe25c2b08c8d866c1fcefe1c6161761'   
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
