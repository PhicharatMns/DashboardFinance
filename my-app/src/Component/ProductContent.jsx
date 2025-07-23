import { useParams } from "react-router-dom";
import DataContent from "../../data/DataContent.json";

export default function ProductContent() {
  const { id } = useParams();
  const nummericID = parseInt(id);

  const product = DataContent.find((event) => event.id === nummericID);

  if (!product) return <p>not page</p>;

  return (
    <div className="h-full py-5 p-4">
      <div className="max-w-[1500px] mx-auto">
        <div className="text-white p-4 ">
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <div className="">
            <img
              className="rounded-xl lg:h-160 h-100 w-full py-5"
              src={product.Image}
              alt={product.Image}
            />
          </div>
        </div>
        <p>{product.text}</p>
      </div>
    </div>
  );
}
// การดึงข้อมูล URL เเบบ ข้อความ
// import { useParams } from "react-router-dom";
// import DataContent from "../../data/DataContent.json";

// export default function ProductContent() {
//   const { text } = useParams();

//   // ถอดรหัส text จาก URL
//   const decodedText = decodeURIComponent(text);

//   const product = DataContent.find((item) => item.text === decodedText);

//   if (!product) return <div className="p-4 text-red-500">ไม่พบข้อมูลข่าว</div>;

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
//       <img
//         className="w-full max-w-2xl mb-4"
//         src={product.Image}
//         alt={product.title}
//       />
//       <p className="text-lg">{product.text}</p>
//     </div>
//   );
// }
