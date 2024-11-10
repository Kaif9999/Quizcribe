import axios from "axios";

const downloadAndConvertVideoToAudio = async (url: string): Promise<Blob> => {
    try {
      const response = await axios.post("/api/download-audio", { videoUrl: url }, { responseType: "blob" });
      return response.data; // audio file as blob
    } catch (error) {
      console.error("Error downloading and converting video:", error);
      throw new Error("Error downloading and converting video");
    }
  };
  