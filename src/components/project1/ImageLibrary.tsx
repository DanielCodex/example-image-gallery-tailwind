import { nanoid } from "nanoid";
import Heart from "./Heart";
import useWindowDimension from "./useWindowDimension";

const headerImgURL = "https://picsum.photos/600/400/?random";
const userImg = "https://picsum.photos/32/32/?random";

function ImageLibrary() {
  let { height, width } = useWindowDimension();

 
  return (
    <div className="m-11 grid grid-cols-auto-fit content-center justify-center gap-6 p-4">
      {Array(10)
        .fill(0)
        .map((_) => {
          return (
            <div className="bg-white-300 w-full rounded-lg pb-6 shadow-lg">
              <img
                className="block h-auto w-full rounded-t-lg"
                src={headerImgURL}
                key={nanoid()}
                alt="random"
              />
              <div className="flex justify-between">
                <h1 className="ml-2 mt-2 font-semibold">Article Title</h1>
                <span className="mr-2 mt-2 text-gray-400">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={userImg}
                    alt="user"
                    className="mt-2 ml-2 block rounded-full"
                  />
                  <p className="ml-1 mt-2 text-sm">Author name</p>
                </div>
                <Heart />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ImageLibrary;
