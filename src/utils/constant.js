export const planMockData = [
    {
        name: "Free",
        desc: "Try out TurboBoost on a limited plan",
        monthlyPrice: 0,
        annuallyPrice: 0,
        pageViews: "5,000",
        CDN_bandWidth: "1.00GB",
        includes: [
            "5,000 page views per month",
            "1.00 GB CDN bandwidth per month",
            "Optimized by TurboBoost Badge",
            "Built-in global CDN",
            "Image Optimization Stack",
            "Advanced Caching Mechanism",
            "Fast and easy setup",
            "Basic Support",
        ],
    },
    {
        name: "Starter",
        desc: "For very small businesses",
        monthlyPrice: 15,
        annuallyPrice: 12.50,
        pageViews: "50,000",
        CDN_bandWidth: "25GB",
        includes: [
            "50,000 page views per month",
            "25 GB CDN bandwidth per month",
            "Built-in global CDN",
            "Image Optimization Stack",
            "Advanced Caching Mechanism",
            "All-in-one performance optimization",
            "Image Lazy Loading",
            "Critical CSS",
            "Delay Resource Loading",
            "Cache Warmup",
            "Lazy Load hidden images",
            "Combine CSS & JS",
            "Fast and easy setup",
            "Expert Support"
        ],
    },
    {
        name: "Growth",
        desc: "Our most popular plan for growing brands",
        monthlyPrice: 40,
        annuallyPrice: 33.30,
        pageViews: "200,000 ",
        CDN_bandWidth: "100GB ",
        includes: [
            "200,000 page views per month",
            "100 GB CDN bandwidth per month",
            "Optimized by TurboBoost Badge",
            "Built-in global CDN",
            "Image Optimization Stack",
            "Advanced Caching Mechanism",
            "All-in-one performance optimization",
            "Image Lazy Loading",
            "Critical CSS",
            "Delay Resource Loading",
            "Cache Warmup",
            "Lazy Load hidden images",
            "Combine CSS & JS",
            "Optimize Ads",
            "Image Optimization",
            "iFrame lazy loading",
            "Remove unused CSS",
            "Adaptive Image Sizing",
            "Generated sitemap",
            "Fast and easy setup",
            "24/7 Support"
        ],
    },
    {
        name: "Pro",
        desc: "Best for big brands",
        monthlyPrice: 150,
        annuallyPrice: 125,
        pageViews: "1,000,000",
        CDN_bandWidth: "500GB",
        includes: [
            "200,000 page views per month",
            "100 GB CDN bandwidth per month",
            "Optimized by TurboBoost Badge",
            "Built-in global CDN",
            "Image Optimization Stack",
            "Advanced Caching Mechanism",
            "All-in-one performance optimization",
            "Image Lazy Loading",
            "Critical CSS",
            "Delay Resource Loading",
            "Cache Warmup",
            "Lazy Load hidden images",
            "Combine CSS & JS",
            "Optimize Ads",
            "Image Optimization",
            "iFrame lazy loading",
            "Remove unused CSS",
            "Adaptive Image Sizing",
            "Font subsetting",
            "Excluded resources",
            "Generated sitemap",
            "Fast and easy setup",
            "24/7 Support"
        ],
    },
];

export const ComparePlans = [
    {
        title: "Optimized by TurboBoost Badge",
        free: true,
        starter: false,
        growth: false,
        pro: false,
    },
    {
        title: "Built-in Global CDN",
        free: true,
        starter: true,
        growth: true,
        pro: true,
    },
    {
        title: "Image Optimization Stack",
        free: true,
        starter: true,
        growth: true,
        pro: true,
    },
    {
        title: "Advanced Caching Machanism",
        free: true,
        starter: true,
        growth: true,
        pro: true,
    },
    {
        title: "Fast and Easy Setup",
        free: true,
        starter: true,
        growth: true,
        pro: true,
    },
    {
        title: "24/7 Support",
        free: false,
        starter: true,
        growth: true,
        pro: true,
    },
    {
        title: "All-in-one Performance Optimization",
        free: false,
        starter: true,
        growth: true,
        pro: true,
    },
    {
        title: "Image Lazy Loading",
        free: false,
        starter: true,
        growth: true,
        pro: true,
    },
    {
        title: "Critical CSS",
        free: false,
        starter: true,
        growth: true,
        pro: true,
    },
    {
        title: "Delay Resource Loading",
        free: false,
        starter: true,
        growth: true,
        pro: true,
    },
    {
        title: "Cache Warmup",
        free: false,
        starter: true,
        growth: true,
        pro: true,
    },
    {
        title: "Lazy Load Hidden Images",
        free: false,
        starter: true,
        growth: true,
        pro: true,
    },
    {
        title: "Combine CSS & JS",
        free: false,
        starter: true,
        growth: true,
        pro: true,
    },
    {
        title: "Excluded Resources",
        free: false,
        starter: false,
        growth: true,
        pro: true,
    },
    {
        title: "Image Optimization",
        free: false,
        starter: false,
        growth: true,
        pro: true,
    },
    {
        title: "iFrame Lazy Loading",
        free: false,
        starter: false,
        growth: true,
        pro: true,
    },
    {
        title: "Remove Unused CSS",
        free: false,
        starter: false,
        growth: true,
        pro: true,
    },
    {
        title: "Adaptive Image Subsetting",
        free: false,
        starter: false,
        growth: true,
        pro: true,
    },
    {
        title: "Generated Sitemap",
        free: false,
        starter: false,
        growth: true,
        pro: true,
    },

    {
        title: "Font Subsettings",
        free: false,
        starter: false,
        growth: true,
        pro: true,
    },
    {
        title: "Optimize Ads",
        free: false,
        starter: false,
        growth: true,
        pro: true,
    },
];

export const planChangeText = (item,currentPlan) => {
    let itemPlan = item.name;
    let buttenText = "";

    switch (currentPlan) {
        case "Free":
            if (itemPlan === "Free") {
                buttenText = "Current Plan";
            }
            if (itemPlan == "Starter") {
                buttenText = "Upgrade to Starter";
            }
            if (itemPlan == "Growth") {
                buttenText = "Upgrade to Growth";
            }
            if (itemPlan == "Pro") {
                buttenText = "Upgrade to Pro";
            }
    break;
        case "Starter":
            if (itemPlan === "Free") {
                buttenText = "Downgrade to Free";
            }
            if (itemPlan == "Starter") {
                buttenText = "Current Plan";
            }
            if (itemPlan == "Growth") {
                buttenText = "Upgrade to Growth";
            }
            if (itemPlan == "Pro") {
                buttenText = "Upgrade to Pro";
            }
    break;
        case "Growth":
            if (itemPlan === "Free") {
                buttenText = "Downgrade to Free";
            }
            if (itemPlan == "Starter") {
                buttenText = "Downgrade to Starter";
            }
            if (itemPlan == "Growth") {
                buttenText = "Current Plan";
            }
            if (itemPlan == "Pro") {
                buttenText = "Upgrade to Pro";
            }
    break;
        case "Pro":
            if (itemPlan === "Free") {
                buttenText = "Downgrade to Free";
            }
            if (itemPlan == "Starter") {
                buttenText = "Downgrade to Starter";
            }
            if (itemPlan == "Growth") {
                buttenText = "Downgrade to Growth";
            }
            if (itemPlan == "Pro") {
                buttenText = "Current Plan";
            }
    break;
        default:
            buttenText = "";
            break;
    }
    return buttenText;
};