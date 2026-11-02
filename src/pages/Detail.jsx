import { useParams, Link } from "react-router-dom";
import usePokemonDetail from "../hooks/usePokemonDetail.js";
import DetailCard from "../components/pokemon/DetailCard.jsx";

export default function Detail() {
  const { name } = useParams();

  const { data, loading, error } = usePokemonDetail(name);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <DetailCard pokemon={data[0]} species={data[1]} />
      <Link
        to="/pokemon"
        className="mt-4 inline-flex items-center gap-1 text-base font-semibold text-slate-500 transition-colors hover:text-slate-900 ml-5"
      >
        <span aria-hidden="true">←</span>
        Terug naar overzicht
      </Link>
    </div>
  );
}
