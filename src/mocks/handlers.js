import { rest } from "msw";

const baseURL = "https://drf-api-rc-fb80a7a94541.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        "pk": 5,
        "username": "gitpod3",
        "email": "",
        "first_name": "",
        "last_name": "",
        "profile_id": 5,
        "profile_image": "https://res.cloudinary.com/dvpclsumk/image/upload/v1/media/../default_profile_e3gzsa"
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];