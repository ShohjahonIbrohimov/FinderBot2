const api_urls = {
  // OFFERS
  get_offers: "/universal/get-offers",
  post_offer: "/offers",
  get_offers_filter: "/universal/filter-offers",
  get_offers_all: "/universal/get-offers",
  // UPLOAD
  upload_image: "upload-image",
  // DOMAINS
  get_domains: "/domains/get-domains",
  create_domain: "/domains/create",
  delete_domain: "/domains/delete",
  get_finance: "/universal/finance-table",
  get_news: "/admin/news",
  get_requests: "/request/get-request-master",
  // filter
  // Offer settings
  get_direction_list: "/universal/direction-list",
  get_region_list: "/universal/region-list",
  get_streams: "/stream/get-streams",
  create_stream: "/generate-form/create",
  update_stream: "/generate-form/create?id=",
  delete_stream: "/stream/delete?id=",
  // Statistics & Scenario
  get_statistics: "/universal/statistics",
  get_scenarios: "/universal/scenario-list",
  get_instruments: "/admin/instrument-permission-list",
  get_managers: "/manager/all",
  get_users: "/users/all",
  update_user: "user/update/",
  //finance all
  get_finance_all: "/finance/all",
  update_finance: "/finance/all",
  upload_img: "/upload-image",
  // POST NEWS
  post_news: "/news",

  //creatives
  create_creative: "/creatives",
};

export default api_urls;
