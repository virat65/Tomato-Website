const imageUpload = (file,folder = "image")=>{
  console.log(file,"filesssss");

  const filename = Math.random().toString(36).substring(2) //substring(2) removes the first two characters ("0.") and returns only the random part, e.g., "8susd95cum".
  console.log(filename,"filenameeeee");
  const extension = file.name.split(".")[1]
console.log(extension,"jpg extensionnnnnn");


  const imageName =  filename + "."+ extension
  file.mv(`public/${folder}/${imageName}`);
return imageName


}
export default imageUpload;