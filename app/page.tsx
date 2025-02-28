"use client";
import React, { useState } from "react";
import FocusIndustries from "@/Components/Services/FocusIndustries";
import Image from "next/image";
import axios from "axios";

// Define the type for images
interface ImageData {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const Page = () => {
  const [images, setImages] = useState<ImageData[]>([]);

  const getImages = async () => {
    try {
      const response = await axios.get<ImageData[]>("https://picsum.photos/v2/list");
      setImages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="outer-container">
      <div className="container text-center">
        <FocusIndustries />
        <button
          className="p-5 py-4 bg-green-700 text-white rounded"
          onClick={getImages}>
          Get Images
        </button>
        <div className="py-10">
          {images.map((img, i) => (
            <Image
              className="m-10 rounded inline-block"
              key={img.id}
              src={img.download_url}
              alt={`Random Image ${i}`}
              width={400}
              height={400}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
