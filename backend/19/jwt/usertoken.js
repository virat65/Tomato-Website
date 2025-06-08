import jwt from "jsonwebtoken";
const tokenGen = (myid) => {
  try {
    const myToken = jwt.sign({ id: myid }, process.env.key);
    console.log(myToken, "---> tokeen gennnnn");
    const verifying = jwt.verify(myToken, process.env.key);

    console.log(verifying, "verifyinggggg tokennnnn");
    return { myToken, verifying };
  } catch (error) {
    console.log(error, "Error occurred ");
  }
};
export default tokenGen;
