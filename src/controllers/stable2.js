const Stack = require("../models/Stack");
const axios = require("axios");
const url = "https://stablediffusionapi.com/api/v3/text2img";
const key = "oRohmu5T59LwALmfkXVxKojZ4nC9jygJRPQnyEKS0kJDlsmWwLl7ZBsVNgxo";

const consulta = async (req, res) => {
  let voltagePrompt = "";
  let tdsPrompt = "";
  let _searchText = "";
  let phPrompt = "";
  let searchController = req.body.prompt;

  const stack = await Stack.find({});
  console.log(stack[0]);
  let voltage = stack[0].volValue;
  let tds = stack[0].tds_value;
  let ph = stack[0].ph_act;

  if (0 <= voltage && voltage <= 0.099) {
    voltagePrompt =
      "dysfunctional, non-existent, hostile environment, anaerobic bacteria";
  }
  if (0.1 <= voltage && voltage <= 0.199) {
    voltagePrompt =
      "low activity, pure water, few anaerobic bacteria, synthetic biology";
  }
  if (0.2 <= voltage && voltage <= 0.299) {
    voltagePrompt =
      "continuous anaerobic bacterial flow, growing life, in process";
  }
  if (0.3 <= voltage && voltage <= 0.399) {
    voltagePrompt =
      "high activity, blooming, active anaerobic bacterial metabolism";
  }
  if (0.4 <= voltage && voltage <= 0.5) {
    voltagePrompt =
      "maximum yield, anaerobic bacterial hypercolonisation, foul water";
  }

  console.log(tds);

  if (0 <= tds && tds <= 0.099) {
    tdsPrompt = "10dpi";
  }
  if (0.1 <= tds && tds <= 0.199) {
    tdsPrompt = "20dpi";
  }
  if (0.2 <= tds && tds <= 0.299) {
    tdsPrompt = "40dpi";
  }
  if (0.3 <= tds && tds <= 0.399) {
    tdsPrompt = "50dpi";
  }
  if (0.4 <= tds && tds <= 0.5) {
    tdsPrompt = "72dpi";
  }
  if (5.5 <= ph && ph <= 6.0) {
    phPrompt = "color: black and white contrast:high";
  }
  if (6.0 < ph && ph <= 6.2) {
    phPrompt = "color: greyscale contrast: medium";
  }
  if (6.2 < ph && ph <= 6.7) {
    phPrompt = "color: greyscale contrast:low";
  }

  _searchText = `${searchController} ${voltagePrompt} ${phPrompt} ${tdsPrompt}`;
  console.log(_searchText);
  const prompt = _searchText;
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
    enhance_prompt: "no",
    seed: null,
    multi_lingual: "yes",
    guidance_scale: 7.5,
    webhook: null,
    track_id: null,
  };

  axios
    .post(url, body, { headers })
    .then((response) => {
      console.log(response.data);

      return res.status(200).json({
        prompt: prompt,
        data: response.data,
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { consulta };
