import DataContent from "../../data/DataContent.json";
import { Link } from "react-router-dom";

export default function Contentข่าว() {
  return (
    <div>
      {DataContent.map((event, index) => (
        <div className="p-2" key={index}>
          {/* <Link to={`/DataContent/${encodeURIComponent(event.text)}`}> */}
          <Link to={`/DataContent/${event.id}`}>
            <div className="border hover:shadow-md p-3 rounded">
              <div className="flex">
                <img
                  className="w-60 h-40 object-cover"
                  src={event.Image}
                  alt={event.title}
                />
                <div className="w-full flex flex-col justify-center pl-5">
                  <p className="font-bold text-lg">{event.title}</p>
                  <p className="text-gray-400">{event.text}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
