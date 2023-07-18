import type { NextPage } from "next";
import Layout from "../components/Layout";
import PageSignUp from "../components/PageSignUp";

const SignUp: NextPage = () => {
    return (
        <Layout hideFooter hideHeader>
            <PageSignUp />
        </Layout>
    );
};

export default SignUp;
