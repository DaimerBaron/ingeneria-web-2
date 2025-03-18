/* eslint-disable react/prop-types */

const HoverMedia = ({ media }) => {
  return (
    <div className="p-6 text-sm bg-black/80 rounded-lg absolute min-w-max z-30 text-white -translate-x-80 flex flex-col gap-2 overflow-hidden">
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
