// import { useEffect, useState } from "react";
// import useAxios from "../utils/useAxios";
// import PostForm from "../components/PostForm";

// function ProtectedPage() {
//   const [res, setRes] = useState("");
//   const api = useAxios();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await api.get("/test/");
//         setRes(response.data.response);
//         console.log(response.data);
//       } catch {
//         setRes("Something went wrong");
//       }
//     };
//     fetchData();
//   });

//   return (
//     <div>
//       if {res}
//       <h1>Protected Page</h1>
//       <p>{res}</p>
//       <PostForm />
//     </div>
//   );
// }

// export default ProtectedPage;
