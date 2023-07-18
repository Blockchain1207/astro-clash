import type { NextPage } from "next";
import Layout from "../components/Layout";
import PageWishlist from "../components/PageWishlist";

const Wishlist: NextPage = () => {
    return (
        <Layout>
            <PageWishlist />
        </Layout>
    );
};

export default Wishlist;
