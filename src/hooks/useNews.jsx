import { useContext } from "react";
import NewsContext from "../context/NewsProvider";

function useNews() {
    return useContext(NewsContext);
}

export default useNews