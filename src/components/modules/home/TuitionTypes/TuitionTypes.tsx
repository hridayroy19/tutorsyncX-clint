import Image from "next/image";
import React from "react";

const TuitionTypes = () => {
  const cards = [
    {
      title: "Home Tutoring",
      description:
        "Looking for one-to-one classes? It's a unique opportunity to learn in the home with your expected future in different categories everything is in favor of your need.",
      bgColor: "bg-orange-200",
      image:
        "https://i.ibb.co.com/7NXX4pY5/165667673931855cute-little-boy-study-with-father-home-together-removebg-preview.png",
    },
    {
      title: "Online Tutoring",
      description:
        "Are you left with any doubts? Connect with the best tutors from anywhere and take online classes by using different tools. Make your life more easier with this process.",
      bgColor: "bg-green-200",
      image:
        "https://i.ibb.co.com/21K2CW15/4b9d5dd1-35e2-4389-a7c6-bffa33dcbd4b-removebg-preview.png",
    },
    {
      title: "Group Tutoring",
      description:
        "Need the Competitive & Effortable experience? A group of students can fulfill their hunger for learning within more affordable tuition fees. Get the opportunity of learning with knowledge sharing!",
      bgColor: "bg-purple-300",
      image:
        "https://i.ibb.co.com/RGLKjV6G/165665874841939students-and-teacher1-removebg-preview-removebg-preview.png",
    },
  ];
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-start lg:text-4xl text-2xl font-medium ">
          {" "}
          Tuition Types
        </h1>
        <p className="text-start lg:text-2xl text-xl  mt-3 mb-10">
          Find the Best Tuition Type which suits you most
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105`}
            >
              <div className="relative h-52 w-full mb-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TuitionTypes;
