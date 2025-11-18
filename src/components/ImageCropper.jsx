import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "../services/cropImage.js"; 

export default function ImageCropper({ imageSrc, onCropComplete }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const handleCropComplete = useCallback((croppedArea, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleSave = async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      // Pass the cropped image as a file to parent
      onCropComplete(croppedImage);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="relative w-full h-96 bg-gray-200">
      <Cropper
        image={imageSrc}
        crop={crop}
        zoom={zoom}
        aspect={450 / 350} // Set desired ratio
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={handleCropComplete}
      />

      <button
        className="absolute bottom-4 right-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={handleSave}
      >
        Crop & Save
      </button>
    </div>
  );
}
