import React from 'react';


import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from '@material-ui/core/styles';
import BootstrapTableGrid from "./tables/bootstrap_grid";
import { products, init_products, columns } from "./tables/data.json";

import CodeEditor from '../components/editor/code_editor';

export default function ReactLocalization() {
   return (
      <React.Fragment>


         <div className="container mt-4">
            <div className="row">

               <div className="col-sm-12">
                  <div className="card  border shadow-none mb-4">
                     <div className="card-header">
                        <h5>Demo Implementation</h5>
                     </div>
                     <div className="card-body">
                        <ThemeProvider theme={createTheme({

                        })}>
                           <BootstrapTableGrid
                              init_products={init_products}
                              products={products}
                              columns={columns}
                           />
                        </ThemeProvider>

                     </div>
                  </div>
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
                              
                        <h5 className="my-4"><span className="text-danger">Step : 0 </span> Create React App by  npx create-react-app </h5>
                        <CodeEditor code={`
                           npx create-react-app my-app
                           cd my-app
                           npm start

`

                        } />
                     </div>
                     <div className="step-1">
                        <h5 className="my-4"><span className="text-danger">Step : 1</span> Install Following Module</h5>
                        <CodeEditor code={
                        `"@date-io/date-fns": "^1.3.13",
                        "@material-ui/core": "^4.12.1",
                        "@material-ui/icons": "^4.11.2",
                        "@material-ui/pickers": "^3.3.10",
                        "create-react-library": "^3.1.1",
                        "date-fns": "^2.22.1",
                        "dixit-react-progress-bar": "^1.0.0",
                        "first-dixit-pachage": "^1.0.2",
                        "first-dixit-pachage-01": "^1.0.3",
                        "jquery": "^3.6.0",
                        "jquery-resizable-columns": "^0.2.3",
                        "jspdf": "^2.3.1",
                        "jspdf-autotable": "^3.5.15",
                        "react-bootstrap-table-next": "^4.0.3",
                        "react-bootstrap-table2-filter": "^1.3.3",
                        "react-bootstrap-table2-paginator": "^2.1.2",
                        "react-bootstrap-table2-toolkit": "^2.1.3",
                        "react-image-gallery": "^1.2.4",
                        "react-infinite-scroll-component": "^6.1.0",
                        "react-material-toast": "^16.1.7",
                        "super-lemon-dixit": "^1.0.1",
                        "super-lemon-stem": "^1.0.4",
                        "tinycolor2": "^1.4.2"
`

                        } />
                     </div>


                     <div className="step-1">
                        <h5 className="my-4"><span className="text-danger">Step : 2</span> Import Table and use it as per your need</h5>
                        <CodeEditor code={`
               import React from 'react';
               import { ThemeProvider } from "@material-ui/styles";
               import { createTheme } from '@material-ui/core/styles';
               import BootstrapTableGrid from "./tables/bootstrap_grid";
               import { products, init_products, columns } from "./tables/data.json";
              export default function ReactLocalization() {

               return (
                  <React.Fragment>
                                    <ThemeProvider theme={createTheme({
            
                                    })}>
                                       <BootstrapTableGrid
                                          init_products={init_products}
                                          products={products}
                                          columns={columns}
                                       />
                                    </ThemeProvider>
            
                                    </React.Fragment>
                                    )
                }
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


