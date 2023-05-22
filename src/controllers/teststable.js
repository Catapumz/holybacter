const axios = require("axios");

const url = "https://stablediffusionapi.com/api/v3/text2img";
const key = "oRohmu5T59LwALmfkXVxKojZ4nC9jygJRPQnyEKS0kJDlsmWwLl7ZBsVNgxo";
const prompt = "searchText";

const consulta = async (req, res) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const body = {
    key: key,
    prompt: prompt,
    negative_prompt: "(out of frame)",
    width: "512",
    height: "512",
    samples: "1",
    num_inference_steps: "20",
    safety_checker: "no",
    enhance_prompt: "yes",
    seed: null,
    multi_lingual: "yes",
    guidance_scale: 7.5,
    webhook: null,
    track_id: null,
  };

  axios
    .post(url, body, { headers })
    .then((response) => {
      // Manejar la respuesta exitosa
      console.log(response.data);

      return res.status(200).json({
        data: response.data,
      });
    })
    .catch((error) => {
      // Manejar el error
      console.error(error);
    });
};

module.exports = { consulta };
