import "./App.css";
import { useState } from "react";
import Hero from "/assets/undraw_online-learning_tgmv.svg";
const excellenceSVGs = [
  {
    title: "Belajar dari Mentor Porfesional",
    image: "/assets/undraw_certificate_71gt.svg",
  },
  {
    title: "Kurikulum Berbasis Industri",
    image: "/assets/undraw_online-learning_tgmv.svg",
  },
  {
    title: "Metode Learning by Doing",
    image: "/assets/undraw_learning-sketchingsh.svg",
  },
  {
    title: "Sertifikat Resmi & Portofolio Projek",
    image: "/assets/undraw_certification_i2m0.svg",
  },
  {
    title: "Komunitas Eksklusif & Networking",
    image: "/assets/undraw_community_fv55.svg",
  },
  {
    title: "Fleksibel - Belajar Kapan Saja, di Mana Saja",
    image: "/assets/undraw_education_3vwh.svg",
  },
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const navLink = (
    <ul className="hidden mt-2 mb-4 lg:flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1 font-normal hover:text-gray-500">
        <a href="#" className="flex items-center">
          Beranda
        </a>
      </li>
      <li className="p-1 font-normal hover:text-gray-500">
        <a href="#" className="flex items-center">
          Kursus
        </a>
      </li>
      <li className="p-1 font-normal hover:text-gray-500">
        <a href="#" className="flex items-center">
          Testimoni
        </a>
      </li>
      <li className="p-1 font-normal hover:text-gray-500">
        <a href="#" className="flex items-center">
          FAQ
        </a>
      </li>
      <li className="p-1 font-normal hover:text-gray-500">
        <a href="#" className="flex items-center">
          Kontak
        </a>
      </li>
    </ul>
  );
  return (
    <div className="w-full h-screen">
      <nav className="w-full m-0 bg-white drop-shadow-md flex fixed justify-around items-center px-3 py-2 right-0 left-0 top-0 lg:px-8 lg:py-4 text-gray-800">
        <h1 className="mr-4 cursor-pointer py-1.5 font-bold lg:text-2xl text-gray-800">
          <a href="#">TechBoost</a>
        </h1>
        {navLink}
        <a href="#" className="hidden lg:block">
          <button className="relative overflow-hidden border border-[#FF9800] rounded-md p-2 cursor-pointer bg-white text-gray-800 transition-all duration-300 ease-in-out hover:text-white hover:bg-[#FF9800]">
            <span className="relative z-10">Daftar Sekarang</span>
          </button>
        </a>

        {/* tombol humberger */}
        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

        <div
          className={`absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center transform transition-transform duration-300 ease-in-out ${
            isOpen ? "block opacity-100" : "hidden opacity-0"
          } lg:hidden`}
        >
          <ul className="w-full text-center">
            <li className="py-3 border-b">
              <a href="#" onClick={() => setIsOpen(false)}>
                Beranda
              </a>
            </li>
            <li className="py-3 border-b">
              <a href="#" onClick={() => setIsOpen(false)}>
                Kursus
              </a>
            </li>
            <li className="py-3 border-b">
              <a href="#" onClick={() => setIsOpen(false)}>
                Testimoni
              </a>
            </li>
            <li className="py-3 border-b">
              <a href="#" onClick={() => setIsOpen(false)}>
                FAQ
              </a>
            </li>
            <li className="py-3 border-b">
              <a href="#" onClick={() => setIsOpen(false)}>
                Kontak
              </a>
            </li>
          </ul>

          {/* Tombol Daftar (Mobile) */}
          <a href="#" className="py-3">
            <button className="border border-black rounded-md px-4 py-2 bg-black text-white">
              Daftar Sekarang
            </button>
          </a>
        </div>
      </nav>

      {/* hero section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen lg:gap-4">
        <div className="w-full flex flex-col mt-8 lg:my-auto mx-auto text-center">
          <h1 className="font-semibold text-xl lg:text-5xl">
            Belajar Teknologi dengan <br /> Mentor Profesional
          </h1>
          <h4 className="font-light text-xs lg:text-2xl mt-4">
            Mulai perjalanan karier digitalmu hari ini dengan kursus berkualitas
            dan mentor berpengalaman.
          </h4>
          <button className="lg:w-2/6 w-3/6 p-2 rounded-md border bg-[#FF9800] text-white cursor-pointer mt-4">
            Daftar Sekarang
          </button>
          <button></button>
        </div>
        <div className="w-full md:w-1/2 m-auto">
          <img src={Hero} alt="Hero" className="w-full h-auto" />
        </div>
      </section>

      {/* about TechBoost */}
      <section className="w-full h-screen mt-8">
        <h2 className="lg:Pt-14 lg:pb-7 font-semibold text-xl lg:text-4xl text-[#ff9800]">
          Keunggulan TechBoost
        </h2>

        <h2 className="font-semibold text-xl lg:text4xl">
          TechBoost - Belajar Teknologi, Bangun Karier Digital!
        </h2>
        <h4 className="font-light text-xs lg:text-2xl mt-3">
          TechBoost adalah platform edukasi teknologi yang membantu pemula dan
          profesional membangun keterampilan digital dengan metode belajar
          berbasis proyek nyata
        </h4>
        <div className="grid lg:grid-cols-2 grid-cols-1 "></div>

        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 mt-6">
          {excellenceSVGs.map((excellence, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm transition-transform duration-300 hover:scale-105"
            >
              <img
                src={excellence.image}
                alt={excellence.title}
                className="rounded-t-lg w-full h-40"
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {excellence.title}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* courses */}
      <section className="w-full min-h-screen mt-16 bg-[#ff9800]">
          <h2 className="font-semibold lg:text-4xl text-xl">Kursus</h2>
      </section>
    </div>
  );
}
