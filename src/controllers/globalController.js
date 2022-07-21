// 홈페이지 렌더링 콜백 함수
export const handleHome = (req, res) => {
  return res.render("home");
};

export const handleAboutMe = (req, res) => {
  return res.render("aboutMe");
};

export const handleEducation = (req, res) => {
  return res.render("education");
};

export const handlePortfolio = (req, res) => {
  return res.render("portfolio");
};

export const handleSkills = (req, res) => {
  return res.render("skills");
};
