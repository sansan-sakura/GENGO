import { CREATE_USER_API, LOGIN_USER_API } from "../statics/fetchUrls";
import { CreateUser, LoginBody } from "../types/userType";

export const createUser = async (formData: CreateUser) => {
  try {
    const res = await fetch(CREATE_USER_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();

    if (res.status === 201) {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("userName", data.name);
      alert("Created a new User");
      return data;
    } else {
      console.log(data);
      throw new Error(data.message);
    }
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const loginUser = async (formData: LoginBody) => {
  try {
    const res = await fetch(LOGIN_USER_API, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email: formData.email, password: formData.password }),
    });
    const data = await res.json();

    if (res.status === 200) {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("userName", data.name);
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (err) {
    console.error(err);
    return { err: true, message: err };
  }
};
