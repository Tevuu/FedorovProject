import "../assets/index.css";
import andrew from "../img/2.jpg";
import vlad from "../img/3.jpg";

function Body() {
  return (
    <>
      <div class="bg-gray-800 flex flex-col">
        <div class="flex flex-row self-center justify-сenter">
          <h1 class="bg-gray-900 text-white font-poppins text-3xl shadow-2xl shadow-gray-800 rounded-xl px-2 my-10 py-2 shadow-sm shadow-white">
            В нашей команде находится 2 выдающихся web-программиста:
          </h1>
        </div>
        <div class="flex flex-row self-center justify-center">
          <img
            src={andrew}
            class="h-auto mr-5 max-w-sm w-72 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
            alt="Andrew"
          />
          <img
            src={vlad}
            class="h-90 max-w-sm ml-5 w-72 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
            alt="Vlad"
          />
        </div>
        <div class="flex flex-row self-center justify-center">
          <h1
            class=" text-white font-poppins text-3xl shadow-2xl shadow-gray-800 rounded-xl px-5 static ml-3 
          rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 ">
            Fedorov Andrew
          </h1>
          <h1
            class=" text-white font-poppins text-3xl shadow-2xl shadow-gray-800 rounded-xl px-3 inline-block ml-12
          rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30">
            Smirnov Vladislav
          </h1>
        </div>
      </div>
    </>
  );
}

export default Body;
