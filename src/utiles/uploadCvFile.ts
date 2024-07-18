
export const uploadCv = async (file: any) => {
  const url = `https://api.cloudinary.com/v1_1/dqgvzlkkn/raw/upload?folder=immigrants-cv`
  console.log('url =>', url)
  if (file) {
    // const formData = new FormData()
    // formData.append("file", file)
    // formData.append("upload_preset", "immigrant-cv");
    // formData.append("folder", "immigrants-cv");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "code-files");
    formData.append("folder", "code-files-folder");
    // console.log("formData =>", formData)
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