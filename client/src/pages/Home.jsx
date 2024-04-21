import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import axios from "axios";
import ListingItem from "../components/ListingItem";
import { MdArrowRightAlt, MdOutlineArrowRight } from "react-icons/md";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await axios.get(`/api/v1/listings/get?offer=true&limit=4`);
        const data = await res.data;

        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await axios.get(`/api/v1/listings/get?type=rent&limit=4`);
        const data = await res.data;

        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await axios.get(`/api/v1/listings/get?type=sell&limit=4`);

        const data = await res.data;

        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  return (
    <div>
      {/* top */}

      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="  text-3xl lg:text-6xl">
         FIND YOUR NEXT PERFECT <br /> PLACE WITH EASE.
        </h1>

        <div className=" text-xs sm:text-sm">
          HomeHive will help you find your future home fast, easy and
          comfortable. <br /> We have a wide variety of properties for you to
          choose
        </div>

        <Link
          to={"/search"}
          className="flex justify-center rounded-3xl items-center bg-[#FE6C4C] w-[180px] p-2 hover:opacity-95 text-white"
        >
          Get Started <MdArrowRightAlt className="ml-1 text-3xl"/>
        </Link>
      </div>

      {/* swiper */}

      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                key={listing._id}
                className="h-[550px]"
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}
      <div className="max-w-7xl mx-auto p-1 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-4xl ">
                Recent offers
              </h2>
              <Link
                className="text-sm text-[#FE6C4C] hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
            <h2 className="text-4xl ">
                Recent places for <span className="text-[#FE6C4C]">Rent</span>
              </h2>
              <Link
                className="text-sm text-[#FE6C4C] hover:underline"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
            <h2 className="text-4xl ">
                Recent places for <span className="text-[#FE6C4C]">Sale</span>
              </h2>
              <Link
                className="text-sm text-[#FE6C4C] hover:underline"
                to={"/search?type=sell"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
