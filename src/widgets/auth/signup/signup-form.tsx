// import { Form, Formik } from "formik";

// import { useNavigate } from "react-router-dom";
// import { SignupFields } from "./signup-fields";
// import { initialValues, validationSchema } from "../../../shared/formik";

// export const InvestorSignupPage = () => {
//   const navigate = useNavigate();

//   const onFormSubmit = async (values) => {
//     console.log("front");
//   };

//   return (
//     <Formik initialValues={initialValues} validationSchema={validationSchema} validateOnMount onSubmit={onFormSubmit}>
//       {(formik) => {
//         const { isSubmitting, isValid, dirty } = formik;
//         return (
//           <Form style={{ width: "100%" }}>
//             <div>
//               <div>
//                 <div>
//                   <SignupFields isSubmitting={isSubmitting} isValid={isValid} dirty={dirty} name={formik.values.name} surname={formik.values.surname} />
//                 </div>
//               </div>
//             </div>
//           </Form>
//         );
//       }}
//     </Formik>
//   );
// };
