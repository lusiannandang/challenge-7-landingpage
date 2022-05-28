import axios from "axios";

const dataAction = () => {
  return async (dispatch) => {
    const { data } = await axios("https://rent-cars-api.herokuapp.com/admin/car");
    data.forEach((car) => {
      car.penumpang = "4 Orang";
      car.transmisi = "Manual";
      car.tahun = "Tahun 2020";
    });
    dispatch({ type: "SET_DATA_CAR", payload: data });
  };
};

export { dataAction };
