
const Video = () => {
  return (
    <video control muted loop autoPlay="autoplay" width="100%" class="vid">
      <source src="/We are BOEKENZA.mp4" type="video/mp4" />


      Sorry, your browser doesn't support videos.
    </video>
  );
};

export default Video;