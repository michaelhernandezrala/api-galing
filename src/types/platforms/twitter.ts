type TwitterProfile = {
  username: string;
  displayName: string;
  bio: string | null;
  location: string | null;
  website: string | null;
  followers: number;
  following: number;
  tweets: number;
  verified: boolean;
  createdAt: string;
  profileImageUrl: string | null;
  bannerImageUrl: string | null;
};

type TwitterTweet = {
  id: string;
  text: string;
  createdAt: string;
  likes: number;
  retweets: number;
  replies: number;
  views: number | null;
  isRetweet: boolean;
  isReply: boolean;
  hashtags: string[];
  mentions: string[];
  urls: string[];
};

type TwitterEngagement = {
  avgLikes: number;
  avgRetweets: number;
  avgReplies: number;
  totalEngagement: number;
  engagementRate: number;
  topHashtags: string[];
  tweetFrequency: 'high' | 'medium' | 'low';
};

type TwitterData = {
  profile: TwitterProfile;
  recentTweets: TwitterTweet[];
  engagement: TwitterEngagement;
};

export default TwitterData;
