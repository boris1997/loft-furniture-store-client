import React, { FC } from "react";

interface IVideo {
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  src: string;
  type: string;
}

const Video: FC<IVideo> = ({ autoPlay, loop, muted, src, type }) => {
  return (
    <video autoPlay={autoPlay} loop={loop} muted={muted}>
      <source src={src} type={type} />
    </video>
  );
};

export default Video;
