import FEATURES from './features';

type Feature = keyof typeof FEATURES;

const createFeatureObject = (feature: Feature) => ({
  code: feature,
  description: FEATURES[feature],
});

const PLAN_FEATURES = {
  free: [
    createFeatureObject('BASIC_SCORING'),
    createFeatureObject('GITHUB_ANALYSIS'),
    createFeatureObject('SENIORITY_EVALUATION'),
  ],
  pro: [
    createFeatureObject('BASIC_SCORING'),
    createFeatureObject('GITHUB_ANALYSIS'),
    createFeatureObject('SENIORITY_EVALUATION'),
    createFeatureObject('DETAILED_BREAKDOWN'),
    createFeatureObject('CATEGORY_SCORING'),
    createFeatureObject('RECOMMENDATIONS'),
    createFeatureObject('MARKET_BENCHMARKS'),
    createFeatureObject('PDF_EXPORT'),
    createFeatureObject('EVALUATION_HISTORY'),
    createFeatureObject('TREND_ANALYSIS'),
  ],
  premium: [
    createFeatureObject('BASIC_SCORING'),
    createFeatureObject('GITHUB_ANALYSIS'),
    createFeatureObject('SENIORITY_EVALUATION'),
    createFeatureObject('DETAILED_BREAKDOWN'),
    createFeatureObject('CATEGORY_SCORING'),
    createFeatureObject('RECOMMENDATIONS'),
    createFeatureObject('MARKET_BENCHMARKS'),
    createFeatureObject('PDF_EXPORT'),
    createFeatureObject('EVALUATION_HISTORY'),
    createFeatureObject('TREND_ANALYSIS'),
    createFeatureObject('BATCH_PROCESSING'),
    createFeatureObject('PROFILE_COMPARISON'),
    createFeatureObject('API_ACCESS'),
    createFeatureObject('WEBHOOK_NOTIFICATIONS'),
    createFeatureObject('PROFILE_MONITORING'),
    createFeatureObject('IMPROVEMENT_ALERTS'),
    createFeatureObject('PREDICTIVE_ANALYSIS'),
    createFeatureObject('POTENTIAL_SCORING'),
    createFeatureObject('CUSTOM_BRANDING'),
    createFeatureObject('UNLIMITED_RETENTION'),
  ],
};

export default PLAN_FEATURES;
