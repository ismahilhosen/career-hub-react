import { Helmet } from "react-helmet-async";
import FeaturedJobList from "../Componets/Featured job/FeaturedJobList";

const Home = () => {
    return (
        <> 
        <Helmet>
            <title>Career Hub | Home</title>
        </Helmet>
        <FeaturedJobList></FeaturedJobList>
        </>
    );
};

export default Home;