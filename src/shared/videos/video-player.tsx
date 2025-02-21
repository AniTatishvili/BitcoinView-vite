// import ReactPlayer from "react-player";

interface SliderItemType {
  videoSource: string;
}
// https://vimeo.com/243556536
export const VideoPlayer = (props: SliderItemType) => {
  const { videoSource } = props;
  return (
    // <ReactPlayer
    //   url={videoSource}
    //   width="100%"
    //   height="100%"
    //   playing={true}
    //   controls={false}
    //   light={bannerSource}
    //   style={{ borderRadius: "8px", overflow: "hidden" }}
    //   playIcon={
    //     <Button bg={"none"} color={"#fff"} fontSize={"4rem"} _hover={{ background: "none", color: "brand.blue" }}>
    //       <FiPlayCircle />
    //     </Button>
    //   }
    // />
    <video
      src={videoSource}
      autoPlay
      muted
      style={{ width: "100%", objectFit: "cover", objectPosition: "50% 25%", borderRadius: "8px", overflow: "hidden", zIndex: 1 }}></video>
  );
};
