import mongoose, { Schema } from "mongoose";

const listingSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Listing name is required"],
    },
    description: {
      type: String,
      required: [true, "Listing description is required"],
    },
    address: {
      type: String,
      required: [true, "Listing address is required"],
    },
    regularPrice: {
      type: Number,
      required: [true, "Listing regular price is required"],
    },
    discountedPrice: {
      type: Number,
      required: [true, "Listing discounted price is required"],
    },
    bathrooms: {
      type: Number,
      required: [true, "Listing bathroooms is required"],
    },
    bedrooms: {
      type: Number,
      required: [true, "Listing bedrooms is required"],
    },
    furnished: {
      type: Boolean,
      required: [true, "Listing furnished is requiured"],
    },
    parking: {
      type: Boolean,
      required: [true, "Listing parking is required"],
    },
    type: {
      type: String,
      required: [true, "Listing type is required"],
    },
    offer: {
      type: Boolean,
      required: [true, "Listing offer is required"],
    },
    imageUrls: {
      type: [String],
      required: [true, "Listing images are required"],
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Listing = mongoose.model("Listing", listingSchema);
