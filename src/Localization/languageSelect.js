import React from 'react';
import i18next from "i18next";

export default function LanguageSelect() {
  const [lang,setLang] = React.useState("en");


  const handleChange = (event) => {
    setLang(event.target.value ? event.target.value : 'en');
    i18next.changeLanguage(event.target.value);
  };

  let languages = [
  { id: 1, code: 'en', name: 'English' }, 
  { id: 1, code: 'jap', name: 'Japanese' }, 
  { id: 1, code: 'hin', name: 'Hindi' }, 
  { id: 1, code: 'fre', name: 'French' },
  { id: 1, code: 'ger', name: 'germany' },
  
]

React.useEffect(() => {
  if(localStorage.getItem("i18nextLng")){
    setLang(localStorage.getItem("i18nextLng") || "en");
  }
});

  return (
    <div className="lang-select">
       <select className="form-select" aria-label="Default select example"
          value={lang}
          onChange={handleChange}
        >
          
           {
             languages.length && languages.map((lang)=>{
               return(
                <option  value={lang.code}>{lang.name}</option>
               )
             })
           }
             

        </select>

    </div>
  );
};

