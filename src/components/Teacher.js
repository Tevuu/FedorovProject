import "../assets/index.css";
import Nikita from "../img/7.jpg";
function Teacher() {
  return (
    <div class="bg-gray-800 flex flex-col h-screen">
      <div class="flex flex-row self-center justify-center my-10">
        <h1 class="bg-gray-900 text-white font-poppins text-3xl shadow-2xl shadow-gray-800 rounded-xl px-4 py-2 my-5 shadow-white shadow-sm">
          Каждый день их вдохновляет наставник:
        </h1>
      </div>
      <div class="flex flex-row self-center justify-center">
        <img
          src={Nikita}
          class="h-auto max-w-sm mr-5 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
          alt="Nikita"
        />
      </div>
      <div class="flex flex-row self-center justify-center">
        <a
          class=" text-white font-poppins text-3xl shadow-2xl shadow-gray-800 rounded-xl px-5 ml-3
          rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 "
          href="https://whywelive.me/"
          target="__blank">
          Sitnik Nikita
        </a>
      </div>
    </div>
  );
}

export default Teacher;
