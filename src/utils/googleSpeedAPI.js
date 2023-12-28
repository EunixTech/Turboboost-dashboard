import axios from "axios";

export const googleSpeedAPI = async (storeName = "https://menehariya.netscapelabs.com/") => {

    const response = await axios.get(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${storeName}&category=best-practices&category=seo&category=performance&category=accessibility`);
    const data = response.data;
  
    const lighthouseData = data.lighthouseResult;
    const metrics = {
        "First Contentful Paint": lighthouseData.audits['first-contentful-paint'].displayValue,
        "Speed Index": lighthouseData.audits['speed-index'].displayValue,
        "Total Blocking Time": lighthouseData.audits['total-blocking-time'].displayValue,
        "Largest Contentful Paint": lighthouseData.audits['largest-contentful-paint'].displayValue,
        "Performance": lighthouseData.categories.performance.score * 100,
        "Accessibility": lighthouseData.categories.accessibility.score * 100,
        "Best Practices": lighthouseData.categories['best-practices'].score * 100,
        "SEO": lighthouseData.categories.seo.score * 100,
    };

    return metrics
}