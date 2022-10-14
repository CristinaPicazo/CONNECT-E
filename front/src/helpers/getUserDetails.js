// Get user details from localStoreage to use it in the app
const getUserDetails = () => {
  const userDetailsRaw = localStorage.getItem("userDetails");
  const userDetails = JSON.parse(userDetailsRaw);
  const user = {
    id: userDetails.id,
    user: userDetails.user,
    email: userDetails.email,
  };
  return user;
};

export default getUserDetails;
