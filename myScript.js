let cnt=-1;
let txt=["ਮ*ਸੀ*ਹ*_*ਯਾ*ਸੂ*_*ਦੇ*_*ਦਾ*ਸਾਂ*_*ਪੈ*ਲੂਸ*_*ਅਤੇ*_*ਤਿ*ਮੱ*ਥਿ*ਉਸ","ਅੱ*ਗੇ*_*ਯੋ*ਗ*_*ਫ਼ਿ*ਲਿੱ*ਪੈ","ਦੇ*_*ਵਿੱ*ਚ*_*ਜਿੰ*ਨੇ*_*ਮ*ਸੀ*ਹ*_*ਯਿ*ਸੁ","ਵਿੱ*ਚ*_*ਸੰਤ*_*ਹਨ*_*ਉ*ਨ੍ਹਾਂ","*ਸਭ*ਨਾਂ*_*ਨੂੰ*_*ਕ*ਲੀ*ਸਿ*ਯਾ*_*ਦੇ*_*ਨਿ*ਗਾ*ਹ*ਬਾ*ਨਾਂ","ਅਤੇ*_*ਸੇ*ਵ*ਕਾਂ*_*ਸਣੇ","ਸਾਡੇ ਪਿਤਾ ਪਰਮੇਸ਼ੁਰ ਅਤੇ ਪ੍ਰਭੂ ਯਿਸੂ ਮਸੀਹ ਦੀ ਵੱਲੋਂ ਤੁਹਾਨੂੰ ਕਿਰਪਾ ਅਤੇ ਸ਼ਾਂਤੀ ਮਿਲਦੀ ਰਹੇ"];
         let engs=["1Masīha yisū dē dāsa paulusa atē timōthi'usa"," especially qualified Phillipians of in the as much as Christ Jesus Agē yōga filipai dē vica jinē masīha yisū ","there are saints in them all Vica sata hana unhā sabhanā ", they to the congregation of overseers"," and servants including","ਵਿੱਚ ਸੰਤ ਹਨ ਉਨ੍ਹਾਂ ਸਭਨਾਂ ਨੂੰ ਕਲੀਸਿਯਾ ਦੇ ਨਿਗਾਹਬਾਨਾਂ ਅਤੇ ਸੇਵਕਾਂ ਸਣੇ ।","2 ਸਾਡੇ ਪਿਤਾ ਪਰਮੇਸ਼ੁਰ ਅਤੇ ਪ੍ਰਭੂ ਯਿਸੂ ਮਸੀਹ ਦੀ ਵੱਲੋਂ ਤੁਹਾਨੂੰ ਕਿਰਪਾ ਅਤੇ ਸ਼ਾਂਤੀ ਮਿਲਦੀ ਰਹੇ ।" ];

function next1(){
let test=document.getElementById("echo");
re= document.getElementById("read");
if(test.innerText===re.innerText){cnt=cnt+1;
    if (cnt>txt.length){cnt=cnt-1;}};
 update();}
                                  
function update(){                                  
clean=txt[cnt].replaceAll('*','');
re.innerText=clean;
let test=document.getElementById("echo");
test.innerText="";
engdiv=document.getElementById("english");
engdiv.innerText=engs[cnt];
keys();}

function keys(){
line1=document.getElementById("key1");
line1.innerHTML="";
myArray = txt[cnt].split("*");
butset = new Set(myArray);
let butArray = Array.from(butset);
butArray.sort();
for (let loop1= 0; loop1< butArray.length; loop1++) 
{ let btn = document.createElement("button");
btn.innerHTML = butArray[loop1];
btn.onclick = function write() {let etext=document.getElementById('echo');
etext.innerHTML = etext.innerHTML+ butArray[loop1];};
btn.classList.add("b");
line1.appendChild(btn);}
};


function fd(){cnt=cnt+1;if (cnt>txt.length){cnt=cnt-1};
update();}
    
function bk1(){ cnt=cnt-1;if (cnt<0){cnt=0};
    update(); }

function hd() {if (re.style.visibility==="visible"){re.style.visibility="hidden";}
else{re.style.visibility="visible";}}

function engvis() {if (engdiv.style.visibility==="visible"){engdiv.style.visibility="hidden";}
else{engdiv.style.visibility="visible";}}

function clr(){let str=document.getElementById("echo");
del= str.innerText.slice(0, -1);
str.innerText=del;}
