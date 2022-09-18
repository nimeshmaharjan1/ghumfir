import Header from "@components/pages/home/Header";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Ghumfir</title>
      </Head>
      <Header></Header>
      <main
        className="min-h-screen bg-fixed bg-cover overflow-y-auto flex justify-start items-center"
        style={{
          background: "linear-gradient(rgba(40,40,40, 0.6), rgba(40,40,40, 0.6)), url('/images/hero.png')",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <h1 className="font-bold text-7xl uppercase w-4/5 leading-snug text-white">where you find your companion!</h1>
          <p className="text-white w-4/5 my-6">
            Connect with fellow companion of similar taste and have some exciting trips. Exciting people, Adventurous places, fun memories.
          </p>
          <button className="btn-primary-500 mt-7">Plan a Trip</button>
        </div>
      </main>
      <section className="min-h-screen bg-white  text-black">
        <div className=" container flex flex-col gap-4">
          <h3 className="text-center text-4xl uppercase font-bold mt-12 px-12 leading-relaxed ">
            LET’S ENJOY AND TRAVEL WITH YOUR RECOMMENDED COMPANION
          </h3>
          <p className="text-center px-[4rem]">
            We offer variety of tours and destinations to all kind of ghumfirer’s based on the recommended interest. Ghumfir user can enjoy
            exlusive deals and tours along with their matched companions.
          </p>
          <div className="grid grid-cols-2 place-items-center mt-4 gap-2">
            <div className="first !h-[540px] w-[250px]">
              <div className="bg-orange-500 p-8 !h-[470px] w-[386px] ">
                <h2 className="font-bold text-white text-3xl">Nature Tours</h2>
                <p className="text-white text-sm mt-3 leading-loose">
                  Our aim is to provide ghumfirers with the tour service of the top quality, and we provide yo find suitable tour by
                  recommending with the taste of similar users. Our aim is to provide ghumfirers with the tour service of the top quality,
                  and we provide yo find suitable tour by recommending with the taste of similar users.Our aim is to provide ghumfirers with
                  the tour service of the top quality, and we provide yo find suitable tour by recommending with the taste of similar users.
                </p>
                <button className="bg-white mt-6 w-80 h-12 rounded-lg hover:outline-orange-200 hover:shadow-lg">Learn More</button>
              </div>
            </div>
            <div className="third !h-[600px] w-[386px]">
              <div className="bg-blue-500 p-8  !h-[440px] w-[386px] ">
                <h2 className="font-bold text-white text-3xl">Exclusive Deals</h2>
                <p className="text-white text-sm mt-3 leading-loose">
                  Our mission is to match the user with similar interest and taste. All our tours and excursions are available and
                  recommended accordingly at really affordable prices so you can always pick a great destination. Our mission is to match
                  the user with similar interest and taste. All our tours and excursions are available and recommended accordingly at really
                  affordable prices so you can always pick a great destination.
                </p>
                <button className="bg-white mt-6 w-80 h-12 rounded-lg hover:outline-orange-200 hover:shadow-lg">View All</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen container flex flex-col gap-4">
        <div className="sticky top-0"></div>
        <h3 className="text-center text-4xl uppercase font-bold ">LET’S ENJOY AND TRAVEL WITH YOUR RECOMMENDED COMPANION</h3>
      </section>
    </>
  );
};

export default Home;
