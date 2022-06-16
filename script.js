const formText=document.querySelector(".form-text");
const toText=document.querySelector(".to-text");
 selectTag=document.querySelectorAll("select");
translatorBtn=document.querySelector("button");


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