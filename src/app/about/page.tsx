"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mt-[100px] mx-auto px-6 py-16 space-y-20">
      
      {/* Section: Title */}
      <motion.section
        className="text-center space-y-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          About Our Fast Food
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Welcome to our world of delicious fast food! We bring flavors that excite your taste buds and make every meal unforgettable.
        </p>
      </motion.section>

      {/* Section: Mission */}
      <section className="flex flex-col lg:flex-row gap-12 items-center">
        <motion.div
          className="flex-1 relative w-full h-72 sm:h-96 lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://images.nightcafe.studio/ik-seo/jobs/1zuMcflAIr0E2Mc21pg8/1zuMcflAIr0E2Mc21pg8--1--v2lu8/mcdonalds.jpg?tr=w-1080,c-at_max"
            alt="Delicious food"
            fill
            className="object-cover hover:scale-110 transition duration-700"
          />
        </motion.div>

        <motion.div
          className="flex-1 space-y-5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Our Mission 🚀
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our mission is to serve tasty, high-quality fast food that’s not only quick but also crafted with care and passion.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you’re enjoying a quick meal on the go or sharing a moment with friends, we promise an experience filled with flavor and joy.
          </p>
        </motion.div>
      </section>

      {/* Section: Features */}
      <motion.section
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {[
          { title: "Fresh Ingredients", desc: "We use only the freshest ingredients for every dish." },
          { title: "Fast Delivery", desc: "Get your food hot and fast, every time." },
          { title: "Tasty Recipes", desc: "Unique flavors crafted by our expert chefs." },
          { title: "Affordable Prices", desc: "Delicious food without breaking the bank." },
          { title: "Friendly Staff", desc: "Our team is always ready to serve you with a smile." },
          { title: "Quality Service", desc: "We prioritize quality in every step of the process." },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="bg-gradient-to-br from-yellow-50 to-orange-100 p-7 rounded-3xl shadow-lg hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-bold mb-3 text-orange-600">{feature.title}</h3>
            <p className="text-gray-700">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Section: Story Timeline */}
      <section className="space-y-8">
        <h2 className="text-center text-4xl font-extrabold text-gray-900">
          Our Journey 📖
        </h2>
        <div className="relative border-l-4 border-yellow-400 pl-6 space-y-8">
          {[
            { year: "2010", text: "Started as a small family-owned fast food corner." },
            { year: "2015", text: "Expanded to 10+ branches with thousands of happy customers." },
            { year: "2020", text: "Launched online delivery with record-breaking orders." },
            { year: "2025", text: "Now serving happiness globally with our unique flavors!" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="space-y-2"
            >
              <span className="text-xl font-bold text-yellow-600">{item.year}</span>
              <p className="text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section: CTA Banner */}
      <section className="relative w-full h-80 rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src="https://images.pexels.com/photos/4109116/pexels-photo-4109116.jpeg?_gl=1*1hrli1v*_ga*MTg5NzQ5MDI2My4xNzU3MDM0NTk2*_ga_8JE65Q40S6*czE3NTcwMzQ1OTUkbzEkZzEkdDE3NTcwMzU0ODkkajkkbDAkaDA."
          alt="More delicious food"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-white mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Taste the Happiness in Every Bite!
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-yellow-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-600 transition"
          >
            <Link href='/menu'>Order Now 🍔</Link>
          </motion.button>
        </div>
      </section>
    </div>
  );
}
