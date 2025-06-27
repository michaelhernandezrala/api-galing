type LinkedInProfile = {
  firstName: string;
  lastName: string;
  headline: string;
  summary: string | null;
  location: string | null;
  industry: string | null;
  connections: number;
  profileUrl: string;
};

type LinkedInExperience = {
  title: string;
  company: string;
  companyUrl: string | null;
  location: string | null;
  startDate: string;
  endDate: string | null;
  duration: string;
  description: string | null;
};

type LinkedInEducation = {
  school: string;
  degree: string | null;
  fieldOfStudy: string | null;
  startYear: number | null;
  endYear: number | null;
};

type LinkedInSkill = {
  name: string;
  endorsements: number;
};

type LinkedInPost = {
  content: string;
  publishedAt: string;
  likes: number;
  comments: number;
  shares: number;
  type: 'text' | 'image' | 'video' | 'article';
};

type LinkedInData = {
  profile: LinkedInProfile;
  experiences: LinkedInExperience[];
  education: LinkedInEducation[];
  skills: LinkedInSkill[];
  recentPosts: LinkedInPost[];
};

export default LinkedInData;
