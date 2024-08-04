
export const uploadCv = async (file: any) => {
  const url = `https://api.cloudinary.com/v1_1/diqswjnop/raw/upload?folder=cv_file_folder`
  console.log('url =>', url)
  if (file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "cv-files");
    formData.append("folder", "cv_file_folder");
    try {
      const data = await fetch(
        url,
        {
          method: "POST",
          body: formData
        },
      ).then((res) => res.json())
      console.log("response from cloudinary", data)
      return data.secure_url;
    } catch (error) {
      if (error instanceof Error)
        console.log(error);
      return { error: "invalid file type" };
    }
  }
}