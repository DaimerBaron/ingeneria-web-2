/* eslint-disable react/prop-types */

const HoverMedia = ({ media,translateX }) => {
  return (
    <div  className={`p-6 text-sm bg-black/90 rounded-lg absolute min-w-80 z-30 text-white  flex flex-col gap-2 overflow-hidden ${translateX<370?"translate-x-44":"-translate-x-80"}`}>
      <h2 className="truncate max-w-60" > {media.title}</h2>
      <div className="text-colortext-light max-w-64 max-h-28 min-h-20 overflow-hidden text-wrap truncate line-clamp-4">
        {media.synopsis}
      </div>
      <div className="bg-primary-light max-w-max px-2 rounded-lg ">{media.Genre.name
      }</div>
    </div>
  );
};

export default HoverMedia;
