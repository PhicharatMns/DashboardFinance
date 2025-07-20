import { useParams } from "react-router-dom";
import sldes from "../../data/sldes";

export default function ProductHome() {
  const { id } = useParams();
  const numericId = parseInt(id); // แปลงเป็นตัวเลข

  const product = sldes.find((event) => event.id === numericId);

  if (!product) return <p>ไม่พบหน้านี้</p>;

  return (
    <div className="h-ful py-5 p-4">
      <div className="max-w-[1500px] mx-auto">
        {" "}
        <div className="text-white p-4">
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <img
            src={product.url}
            alt={product.title}
            className="rounded-xl w-full h-160 py-5"
          />
          <p className='leading-10'>{product.text}</p>
        </div>
      </div>
    </div>
  );
}
