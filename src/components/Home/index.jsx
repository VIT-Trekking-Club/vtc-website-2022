import BackgroundLayer from "./BackgroundLayer";
import MountainLayer from "./MountainLayer";
import TextLayer from "./TextLayer";

function Home() {
  return (
    <div className="home-container">
      <BackgroundLayer />
      <MountainLayer />
      <TextLayer />
    </div>
  );
}

export default Home;
