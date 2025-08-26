"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    // Main container with max width and spacing
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      
      {/* Title and short description */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-yellow-500">
          About Our Fast Food
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl">
          Welcome to our world of delicious fast food! ...
        </p>
      </section>

      {/* Mission section: Image + Text side by side */}
      <section className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Left side: Food image */}
        <div className="flex-1 relative w-full h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="https://images.nightcafe.studio/ik-seo/jobs/1zuMcflAIr0E2Mc21pg8/1zuMcflAIr0E2Mc21pg8--1--v2lu8/mcdonalds.jpg?tr=w-1080,c-at_max" 
            alt="Delicious food"
            fill
            className="object-cover"
          />
        </div>
        {/* Right side: Mission text */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our mission is to serve tasty, high-quality fast food...
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you are enjoying a quick meal on the go...
          </p>
        </div>
      </section>

      {/* Features section: Grid of cards */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Fresh Ingredients", desc: "We use only the freshest ingredients for every dish." },
          { title: "Fast Delivery", desc: "Get your food hot and fast, every time." },
          { title: "Tasty Recipes", desc: "Unique flavors crafted by our expert chefs." },
          { title: "Affordable Prices", desc: "Delicious food without breaking the bank." },
          { title: "Friendly Staff", desc: "Our team is always ready to serve you with a smile." },
          { title: "Quality Service", desc: "We prioritize quality in every step of the process." },
        ].map((feature, idx) => (
          // Each feature card
          <div
            key={idx}
            className="bg-yellow-50 p-6 rounded-3xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold mb-2 text-yellow-600">{feature.title}</h3>
            <p className="text-gray-700">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Bottom banner with background image + overlay text */}
      <section className="relative w-full h-72 rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src="/placeholder-food-2.jpg" 
          alt="More delicious food"
          fill
          className="object-cover"
        />
        {/* Dark overlay + centered text */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-4xl font-extrabold text-white text-center px-4">
            Taste the Happiness in Every Bite!
          </h2>
        </div>
      </section>
    </div>
  );
}
