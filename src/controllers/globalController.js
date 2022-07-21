// 홈페이지 렌더링 콜백 함수
export const handleHome = (req, res) => {
  return res.render("home", { pageTitle: "감사합니다", isNotTitle: false });
};

export const handleAboutMe = (req, res) => {
  return res.render("aboutMe", { pageTitle: "자기 소개", isNotTitle: true });
};

export const handlePortfolio = (req, res) => {
  return res.render("portfolio", { pageTitle: "포트폴리오", isNotTitle: true });
};

export const handleSkills = (req, res) => {
  return res.render("skills", { pageTitle: "기술 스택", isNotTitle: true });
};

export const handleEducation = (req, res) => {
  return res.render("education", { pageTitle: "수료 교육", isNotTitle: true });
};
