import "../assets/index.css";
import andrewstudy from "../img/5.jpg";
import vladstudy from "../img/8.jpg";
import vmestestudy from "../img/4.jpg";
import "../assets/index.css";

function Study() {
  return (
    <div class="bg-gray-800 flex flex-col">
      <div class="flex flex-row self-center justify-center my-10">
        <h1 class="bg-gray-900 text-white font-poppins text-3xl shadow-2xl shadow-gray-800 rounded-xl px-4 py-2 my-5 shadow-white shadow-sm">
          Данные программисты активно трудятся и изучают тонны информации каждый
          день!
        </h1>
      </div>
      <div class="flex flex-row self-center justify-center">
        <img
          src={andrewstudy}
          class="h-96 w-80 mr-5 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
          alt="Andrew"
        />
        <img
          src={vladstudy}
          class="h-96 w-80 ml-5 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
          alt="Vlad"
        />
      </div>
      <div class="flex flex-col self-center justify-center">
        <img
          src={vmestestudy}
          class="w-full my-5 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 h-96"
          alt="Vlad"
        />
      </div>
    </div>
  );
}

export default Study;
