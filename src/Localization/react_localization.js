import React from 'react';
import LanguageSelect from './languageSelect';
import { useTranslation } from 'react-i18next';

import CodeEditor from '../components/editor/code_editor';
export default function ReactNextGrid() {

   const { t } = useTranslation();
   return (
      <React.Fragment>
     

         <div className="container mt-4">
            <div className="row">
               <div className="col-sm-2">

               </div>
               <div className="col-sm-8">
                  <div className="card  border shadow-none mb-4">
                     <div className="card-header">
                        <h5>Demo Implementation</h5>
                     </div>
                     <div className="card-body">
                        <div className="mt-3 text-center">
                           <LanguageSelect />
                        </div>
                        <div className="text-center content card-body bg-light mt-2 rounded">
                           {t('Example')}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-sm-2">

               </div>
            </div>
         </div>
         {/* Code Start */}
         <div className="container">
            <div className="row">
               <div className="col-sm-2">

               </div>
               <div className="col-sm-8">
                  <div className="card-body">

                  <div className="step-0">
                       <h5 className="my-4"><span className="text-danger">Step : 0 </span>Create React App by  npx create-react-app </h5>
                        <CodeEditor code={`
npx create-react-app my-app
cd my-app
npm start

`

                        } />
                     </div>
                     <div className="step-1">
                       <h5 className="my-4"><span className="text-danger">Step : 1</span> Create i18n.js in src Folder</h5>
                        <CodeEditor code={`
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { resources } from "./data.json";
const fallbackLng = ["en"];
const availableLanguages = ["en", "jap", "hin", "ger", "fre"];
i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
   resources,
   fallbackLng,

   detection: {
      checkWhitelist: true
   },

   debug: false,

   whitelist: availableLanguages,

   interpolation: {
      escapeValue: false
   }
});

export default i18n;

`

                        } />
                     </div>


                     <div className="step-1">
                        <h5 className="my-4"><span className="text-danger">Step : 2</span> Create data.json File</h5>
                        <CodeEditor code={`
{
   "resources": {
       "en": {
           "translation": {
               "Example": "Example"

           }
       },
       "jap": {
           "translation": {
               "Example": "例"
           }
       },
       "hin": {
           "translation": {
               "Example": "उदाहरण"
           }
       },
       "ger": {
           "translation": {
               "Example": "Beispiel"
           }
       },
       "fre": {
           "translation": {
               "Example": "Exemple"
           }
       }
   }
}

`

                        } />
                     </div>
                     <div className="step-3">
                        <h5 className="my-4"><span className="text-danger">Step : 3</span> Create Language Dropdown Component</h5>
                        <CodeEditor code={`
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
      <div className="">
         <select
            value={lang}
            onChange={handleChange}
         >
            
            {
               languages.length && languages.map((lang)=>{
               return(
                  <option value={lang.code}>{lang.name}</option>
               )
               })
            }
               

         </select>

      </div>
   );
};
   
   

`

                        } />
                     </div>
                     <div className="step-4">
                        <h5 className="my-4"><span className="text-danger">Step : 4</span> use in your page </h5>
                        <CodeEditor code={`

import React from 'react';
import LanguageSelect from './languageSelect';
import { useTranslation } from 'react-i18next';
import BackButton from '../components/back';
import CodeEditor from '../components/editor/code_editor';
export default function ReactLocalization() {

   const { t } = useTranslation();
   return (
      <React.Fragment>
         <BackButton />
         <div className="mt-5 text-center">
            <LanguageSelect />
         </div>
         <div className="mt-5 text-center content">
            {t('Example')}
         </div>
         )
      }
                     `
                        } />
                     </div>

                     <div className="step-5">
                        <h5 className="my-4"><span className="text-danger">Step : 4</span> Simple import in index.js </h5>
                        <CodeEditor code={`
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import Themes from "./themes";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { LayoutProvider } from "./context/LayoutContext";
import { UserProvider } from "./context/UserContext";
import i18n from "../src/components/Localization/i18n";
ReactDOM.render(
  <LayoutProvider>
    <UserProvider>
      <ThemeProvider theme={Themes.default}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </UserProvider>
  </LayoutProvider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

                     `
                        } />
                     </div>
                  </div>
               </div>
               <div className="col-sm-2">

               </div>
            </div>
         </div>


      </React.Fragment>

   )
}


