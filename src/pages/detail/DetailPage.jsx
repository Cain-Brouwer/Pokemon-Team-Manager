import { useParams } from "react-router-dom";

export default function DetailPage() {
    const {name} = useParams();
    return <div>Detail: {name}</div>;
}