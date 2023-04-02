import "../assets/index.css";
import logo from "../img/6.jpg";

function Contact() {
  return (
    <div class="bg-gray-900 flex flex-col">
      <div class="flex flex-row self-center justify-center">
        <h1 class=" text-white font-poppins text-3xl shadow-2xl shadow-gray-800 rounded-xl px-2 my-10 py-2 shadow-sm">
          Мы новички в разработке, но каждый день стремимся к большему. Мы
          предлагаем качество, а взамен просим только опыт.
        </h1>
      </div>
      <div class="flex flex-col justify-center self-center">
        <img
          src={logo}
          width="1280"
          height="676"
          class="h-90 w-90 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-white/30"
          alt="We!"
        />
      </div>
      <div class="flex flex-row self-center justify-center">
        <h1 class=" text-white font-poppins text-3xl shadow-2xl shadow-gray-800 rounded-xl px-2 my-10 py-2 shadow-sm ">
          Вы можете связаться с нами любыми способами из ниже перечисленных:
        </h1>
      </div>
      <div class="flex flex-row self-center justify-center">
        <a
          class=" text-white mr-5 font-poppins text-3xl shadow-2xl shadow-gray-800 rounded-xl px-2 my-10 py-2 shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out
         hover:shadow-gray-500/30"
          href="https://infeibal.github.io/HelloKittyWebCite/"
          target="__blank">
          Голубинная почта
        </a>
        <a
          class=" text-white font-poppins text-3xl mr-5 shadow-2xl shadow-gray-800 rounded-xl px-2 my-10 py-2 shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out
         hover:shadow-gray-500/30"
          href="https://tevuu.github.io/SimpleClicker/"
          target="__blank">
          Черепашья почта
        </a>
        <a
          class=" text-white font-poppins mr-5 text-3xl shadow-2xl shadow-gray-800 rounded-xl px-2 my-10 py-2 shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out
         hover:shadow-gray-500/30"
          href="https://tevuu.github.io/capibara.github.io/"
          target="__blank">
          Обезьянья почта
        </a>
      </div>
    </div>
  );
}

export default Contact;

{
}
