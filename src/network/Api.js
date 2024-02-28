import axios from "axios";

export const getAccount = async () => {
  const response = await axios.get(
    "https://private-anon-e86cbded7b-itodpbni.apiary-mock.com/account"
  );
  return response.data;
};

export const getTransfer = async () => {
  const response = await axios.get(
    "https://private-anon-e86cbded7b-itodpbni.apiary-mock.com/menu/transfer"
  );
  return response.data;
};

export const getPPOB = async () => {
  const response = await axios.get(
    "https://private-anon-e86cbded7b-itodpbni.apiary-mock.com/menu/ppob"
  );
  return response.data;
};

export const getPromo = async () => {
  const response = await axios.get(
    "https://private-anon-e86cbded7b-itodpbni.apiary-mock.com/menu/promo"
  );
  return response.data;
};
