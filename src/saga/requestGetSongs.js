import axios from "axios";

export default function requestGetSongs() {
  return axios.request({
    method: "GET",
    url: `https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR3sPFn_SN9AIMYB-v9-ZTlCIkxLg4g-GArhrHOj2KPI_v7hQtcz6iZ7plM`,
  });
}
