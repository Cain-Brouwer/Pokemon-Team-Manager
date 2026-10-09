import { useParams, Link } from "react-router-dom";

export default function DetailPage() {
    const {name} = useParams();
    // const

    return <div>Detail: {name}</div>;
}