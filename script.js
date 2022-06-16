const formText=document.querySelector(".form-text");
const toText=document.querySelector(".to-text");
 selectTag=document.querySelectorAll("select");
 exchangeIcon=document.querySelector(".exchange");
translatorBtn=document.querySelector("button");
icons=document.querySelectorAll(".row i");


selectTag.forEach((tag,id)=>{
  
    for (const country_code in countries) {
        let selected;
        if(id==0 && country_code == "en-GB"){
            selected="selected";

        }else if(id==1 && country_code == "hi-IN"){
            selected="selected";
        }
        console.log(countries[country_code]);

        let option=`<option value="${country_code}" ${selected}>${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend",option);
       
    }
});

translatorBtn.addEventListener("click",()=>{
let text=formText.value,
translateFrom=selectTag[0].value,
translateTo=selectTag[1].value;

let api_url=`https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
fetch(api_url).then(res=>res.json()).then(data=>{
    // console.log(data);
    toText.value=data.responseData.translatedText;
     
});


});

exchangeIcon.addEventListener("click",()=>{
    let tempText=formText.value;
    let tempLang=selectTag[0].value;
    formText.value=toText.value;
    selectTag[0].value=selectTag[1].value;
    toText.value=tempText;
    selectTag[1].value=tempLang;

});

icons.forEach(icon=>{
icon.addEventListener("click",({target})=>{
    if(target.classList.contains("fa-copy")){
        if(target.id=="from"){
            navigator.clipboard.writeText(formText.value);
        }else{
            navigator.clipboard.writeText(toText.value);
            // console.log(" to copy icon clicked");
            
        }
    }else{
        console.log(" speech icon clicked");
        
    }
});
});