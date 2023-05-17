import Head from "next/head";
import SEO from "../common/SEO";

const HeadComponent = ({ title, desc }) => {
    return (
        <div>
            <SEO title={title} desc={desc} />
            <h2>head page</h2>
        </div>
    );
}

export default HeadComponent;

export const getServerSideProps = () => {
    // description of any page most get from backend
    return {
        props: {
            title: "Head page",
            desc: "description of this page is nothing yet"
        }
    }
}