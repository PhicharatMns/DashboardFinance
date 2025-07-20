import DataContent from "../../data/DataContent.json";

export default function Contentข่าว() {
  return (
    <div>
      {DataContent.map((event, index) => {
        return (
          <div className="p-2" key={index}>
            <div className="border">
              <div className="flex">
                {/* Image */}
                <img className="w-60 h-50" src={event.Image} alt="" />
                
                {/* Content Centered */}
                <div className="w-full justify-center flex flex-col pl-5">
                  <p className="font-bold text-lg">{event.title}</p>
                  <p className="text-gray-700">{event.text}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
