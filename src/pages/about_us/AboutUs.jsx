
import "@/index.css";
import restaurant from "@assets/restaurant chef B.jpg";

function AboutUs() {
    return (
    <div className="grid grid-cols-[4fr_7fr] w-full h-full bg-white">
      <div className="col-start-1 aspect-square w-full overflow-hidden">
        <img
          src={restaurant}
          alt="restaurant"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="col-start-2 grid grid-flow-row m-1 border-2 border-secondary-brown content-center justify-center">
        <div className="grid grid-flow-row text-grey-800">
          <div className="font-karla font-bold text-4xl text-center">
            <p>About Us</p>
            <p className="text-sm">A family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
          </div>
          <div className="pt-10 font-normal text-lg leading-relaxed max-w-prose">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero sed libero lobortis bibendum. Nulla eros sem, ultricies eget congue nec, semper vitae velit. Phasellus in neque a neque tristique feugiat. Aliquam suscipit euismod consequat. Praesent lacinia, libero eu egestas auctor, diam odio viverra augue, sed ultrices lorem enim sit amet nibh. Ut nec elementum neque. Fusce aliquam vel dolor id sagittis. Suspendisse et eros ut ipsum dictum facilisis. Donec ac magna sed lacus dapibus auctor id eu massa. Morbi id imperdiet sapien. Etiam tincidunt nisi ac ornare suscipit. Duis sollicitudin urna fringilla, vulputate nisi ac, fringilla ipsum. Mauris efficitur leo sed diam porttitor, tincidunt tempus nisl hendrerit. Phasellus ultricies, elit vulputate consequat efficitur, justo lacus rhoncus ligula, sed vehicula dolor purus at lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur pulvinar, massa eu venenatis sodales, ligula sem auctor ex, eget tempor ligula felis ut odio.</p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default AboutUs;