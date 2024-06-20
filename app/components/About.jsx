import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
          excepturi assumenda impedit quasi, nisi, nam quia, eveniet possimus
          architecto quis quod totam necessitatibus rem saepe voluptas!
          Praesentium libero eius nemo. Maxime voluptate in, recusandae magni
          laborum iste asperiores quos modi corporis eius! In dolorum molestiae
          quisquam a, qui culpa inventore asperiores, omnis eius provident
          doloremque nisi neque quasi illum magni.
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          provident quas magnam quam repellat assumenda odit dolor laudantium
          atque suscipit totam exercitationem, saepe officiis obcaecati non
          excepturi praesentium laboriosam eligendi. Quae hic in fuga deserunt
          reprehenderit deleniti repellendus exercitationem modi incidunt aut
          eius ipsam inventore, ut fugiat error veritatis eveniet atque
          molestias sed nisi sequi animi! Repudiandae porro voluptatem
          distinctio!
        </p>
      </div>
    </div>
  );
};

export default About;
