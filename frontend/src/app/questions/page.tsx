'use Client'

import React from "react";
import NavBar from "./navbar";
import Questionnaire from "@/app/questions/questionnaire";
import {Field, Form, Formik} from "formik";

import ReactDOM from 'react-dom';



export default function Questions() {
    return (
        <>
            <NavBar/>
            <Questionnaire/>
        </>
    )
}


// const Example = () => (
//     <div>
//         <h1>Sign Up</h1>
//         <Formik
//             initialValues={{
//                 picked: '',
//             }}
//             onSubmit={async (values) => {
//                 await new Promise((r) => setTimeout(r, 500));
//                 alert(JSON.stringify(values, null, 2));
//             }}
//         >
//             {({ values }) => (
//                 <Form>
//                     <div id="my-radio-group">Picked</div>
//                     <div role="group" aria-labelledby="my-radio-group">
//                         <label>
//                             <Field type="radio" name="picked" value="One" />
//                             One
//                         </label>
//                         <label>
//                             <Field type="radio" name="picked" value="Two" />
//                             Two
//                         </label>
//                         <div>Picked: {values.picked}</div>
//                     </div>
//                 </Form>
//                 )}
//                 </Formik>
//                 </div>
// )
// ReactDOM.render(<Example />, document.getElementById('root'));
//
//
