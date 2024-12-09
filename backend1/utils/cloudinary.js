import {v2 as cloudinary}  from "cloudinary"
import fs from "fs"
import { fileURLToPath } from "url";

 // Configuration
 cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_cloud_name, 
    api_key: process.env.CLOUDINARY_api_key, 
    api_secret: process.env.CLOUDINARY_api_secret
});

  const uploadOnCloudinary = async  (localFilePath) =>{
    try{
      if(!localFilePath) return null;
      const response  = await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
      })
      console.log("file is uploaded on cloudinary",response.url)
      return response
    } catch (error){
        fs.unlinkSync(localFilePath)
    }
  }


