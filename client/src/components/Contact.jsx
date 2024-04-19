import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact(listing) {
  const [landlord, setLandlord] = useState(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const creatorId = listing.listing.creator;

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await axios.get(`/api/v1/users/${creatorId}`);

        const data = res.data;

        if (data.success === false) {
          setError(true);
          return;
        }

        setLandlord(data);
        setError(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchLandlord();
  }, [creatorId]);
  return (
    <div>
      {error && <p className="text-red-700">Error fetching landlord data.</p>}
      {landlord && (
        <div className="flex flex-col gap-4">
          <p>
            Contact{" "}
            <span className="font-semibold">
              {landlord.username} for{" "}
              <span className="font-semibold">
                {listing.listing.name.toLowerCase()}
              </span>
            </span>
          </p>

          <textarea
            placeholder="Enter your message here ...."
            className="w-full border p-3 rounded-lg"
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}
          ></textarea>

          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
          >
            Send Message
          </Link>
        </div>
      )}
    </div>
  );
}
