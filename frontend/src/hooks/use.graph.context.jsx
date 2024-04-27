import { GraphContext } from "../context/graph.context";
import { useContext } from "react";

export const useGraphContext = () => {
    const context = useContext(GraphContext);

    if (!context) {
        throw Error("error");
    }

    return context;
}