exports.get404 = (req, res, next) => {
  //get path all system (macos, window, ..)
  res.status(404).render("404", { pageTitle: "404 Page" });
};
