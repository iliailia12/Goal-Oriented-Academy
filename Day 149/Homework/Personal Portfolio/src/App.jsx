import React from "react";

const Portfolio = () =>{
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:py-16">
        <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-12 mb-12">
          <img
            className="w-40 sm:w-48"
            height="200"
            alt="Ilia Kviciani"
            src="https://scontent.ftbs1-1.fna.fbcdn.net/v/t39.30808-6/463979713_122137990478332196_2786836592475438067_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=vzDrt6RAxeIQ7kNvwHt-CtT&_nc_oc=Adm9SmXCkwSetLxHVLFMyGmenVTLbdV6h1y3yIlNqTLjM_ICOlN7-xsoEvixkG4jPwI&_nc_zt=23&_nc_ht=scontent.ftbs1-1.fna&_nc_gid=Ub0ZAcvyEiLN8oFzl_meBw&oh=00_AfYTxTUP4zWbU1ke0tUXANZhAZSIp4-2ncpqK7neddlWRQ&oe=68C4C0E5"
            width="160"
            />
          <div className="flex flex-col">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight">Portfolio</h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-1">ILIA Kviciani</h2>
            <p className="text-gray-700 text-sm sm:text-base mt-1 font-light">Frontend developer</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">About Me</h3>
            <p className="text-gray-700 text-sm sm:text-base font-light leading-relaxed">
              Hi, I’m Ilia, a 14-year-old web developer and front-end enthusiast.
              I specialize in HTML, CSS, JS, and am learning React. I can build websites just by analyzing
              photos, and I write clean, professional code. I’ve created over 250 websites and have 180 repositories
              with an organized GitHub profile. I’m aiming to become a full-stack developer and am currently studying
              at Goal-Oriented Academy.
            </p>
            <p className="text-gray-700 text-sm sm:text-base font-light leading-relaxed mt-4">
              I may be young, but I’m committed to proving that age isn’t a barrier to creating high-quality,
              professional websites. I’m always learning, and I appreciate any opportunity to grow. Let’s build something
              great together! Thank you for your time and collaboration!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
