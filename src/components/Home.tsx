import { useRef } from "react";

const Home = () => {

const videoRef = useRef<HTMLVideoElement | null>(null);

const test = ()=>{
 
  if(videoRef.current)
  {
    const player = videoRef.current;
    player.src = "https://www.w3schools.com/Html/mov_bbb.mp4"
    player.play()
  }
}

  return (
    <div>
      Home
      <video ref={videoRef} id="video" controls width={720} />
      <button onClick={test}>Test</button>
    </div>
  );
};

export default Home;
