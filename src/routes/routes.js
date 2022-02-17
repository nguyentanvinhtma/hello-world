import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import Loading from "../components/Loading/Loading";
// import {PATH} from "../constants/paths"
// import { HandleJoin } from "../pages/Invite/HandleJoin";
// import { PageNotFound } from "../pages/404/PageNotFound";
// import DetailClassReviewGrade from "../pages/Class/DetailClassReviewGrade";
// import VerifyEmail from "../pages/VerifyEmail/VerifyEmail";
import Form from "../components/MyForm/MyForm";
import Home from "../components/Home/Home";
import ShareDataAndFunction from "../components/ShareDataAndFunction/ShareDataAndFunction";
import Loading from "../components/Loading/Loading";

const ImagePage = lazy(() => import("../pages/ImagePage"));
const Counter = lazy(() => import("../pages/Counter"));

const AuthRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route exact path={'/'} element={<Home name='Vinh' />} />
        <Route exact path={'/form'} element={<Form />} />
        <Route exact path={'/share-data-and-function'} element={<ShareDataAndFunction />} />
        <Route exact path={"/image"} element={<ImagePage />} />
        <Route exact path={"/counter"} element={<Counter />} />
        {/* <Route exact path="*" element={<PageNotFound/>} /> */}
      </Routes>
    </Suspense>
  );
};

export { AuthRoutes };