import React from "react";

function AboutUs() {
  return (
    <div className="container mx-auto p-5 md:p-20 bg-white mt-8 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        {/* Introduction */}
        <div className="mb-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <h2 className="text-4xl font-bold mb-8 text-[#FE6C4C]">
              We’re changing the way people connect
            </h2>
            <p className="text-lg mb-4">
              At HomeHive, we believe in revolutionizing the real estate
              industry. Our platform is designed to connect individuals
              directly, eliminating unnecessary hurdles and transforming the way
              properties are bought, sold, and rented.
            </p>
            <p className="text-lg mb-4">
              Our mission is to provide a seamless and transparent experience
              for all our users, empowering them to make informed decisions and
              find their perfect home or investment opportunity.
            </p>
          </div>

          <div className="md:w-1/2 mt-5 md:mt-0">
            <img
              className="rounded-2xl"
              src="https://cdn.builder.io/api/v1/image/assets%2Fd35037adcd734f2b8611cb90d5f362bb%2Fa9c131b80907476b8ea995bbc0a91fb3"
              alt="homehive"
            />
          </div>
        </div>
        {/* Our Mission */}
        <div className="mb-20 p-5 md:p-1">
        <h2 className="text-4xl font-bold mb-8 text-[#FE6C4C]">Our Mission</h2>
          <p className="text-lg mb-4">
            <span className="font-bold text-2xl">HomeHive</span> is committed to redefining the real estate experience. Our
            mission is to create a platform that enables individuals to explore
            properties, connect with owners, and make transactions with
            confidence.
          </p>
          <p className="text-lg mb-4">
            We strive to provide innovative solutions and unparalleled support,
            ensuring that every interaction with HomeHive is efficient,
            transparent, and rewarding.
          </p>

          <div className="flex justify-center mt-5">
          <img className="rounded-2xl" src="https://cdn.builder.io/api/v1/image/assets%2Fd35037adcd734f2b8611cb90d5f362bb%2F36bf5b74c5514aea9ffd2a786a976fef" alt="" />
          </div>
        </div>
        {/* Key Statistics */}
        <div className="mb-20 p-5 md:p-1">
        <h2 className="text-4xl font-bold mb-8 text-[#FE6C4C]">Key Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Transactions every 24 hours
              </h3>
              <p className="text-lg">44 million</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Assets under holding
              </h3>
              <p className="text-lg">$119 trillion</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">New users annually</h3>
              <p className="text-lg">46,000</p>
            </div>
          </div>
        </div>
        {/* Our Values */}
        <div className="mb-20 p-5 md:p-1">
        <h2 className="text-4xl font-bold mb-8 text-[#FE6C4C]">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Be world-class</h3>
              <p className="text-lg mb-4">
                We strive for excellence in everything we do, pushing boundaries
                and setting new standards in the real estate industry.
              </p>
              <h3 className="text-xl font-semibold mb-2">Always learning</h3>
              <p className="text-lg mb-4">
                We believe in continuous growth and development, embracing new
                ideas and staying ahead of the curve.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Share everything you know
              </h3>
              <p className="text-lg mb-4">
                We believe in transparency and knowledge-sharing, empowering our
                community with valuable insights and information.
              </p>
              <h3 className="text-xl font-semibold mb-2">Be supportive</h3>
              <p className="text-lg mb-4">
                We foster a culture of collaboration and support, working
                together to achieve our goals and lift each other up.
              </p>
            </div>
          </div>
        </div>
        {/* Our Team */}
        <div className="mb-20 p-5 md:p-1">
        <h2 className="text-4xl font-bold mb-8 text-[#FE6C4C]">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-100 rounded-lg">
              <img
                src="placeholder-image.jpg"
                alt="Michael Foster"
                className="w-full h-auto mb-4 rounded-lg"
              />
              <p className="text-lg font-semibold">Michael Foster</p>
              <p className="text-lg">Co-Founder / CTO</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <img
                src="placeholder-image.jpg"
                alt="Dries Vincent"
                className="w-full h-auto mb-4 rounded-lg"
              />
              <p className="text-lg font-semibold">Dries Vincent</p>
              <p className="text-lg">Business Relations</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <img
                src="placeholder-image.jpg"
                alt="Lindsay Walton"
                className="w-full h-auto mb-4 rounded-lg"
              />
              <p className="text-lg font-semibold">Lindsay Walton</p>
              <p className="text-lg">Front-end Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
