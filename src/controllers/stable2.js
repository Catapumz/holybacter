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

  let voltage = stack[0].volValue;
  let tds = stack[0].tds_Value;
  console.log(tds);
  let ph = stack[0].ph_act;

  if (0 <= voltage && voltage <= 0.099) {
    voltagePrompt =
      "dysfunctional, non-existent, hostile environment, anaerobic bacteria";
  }
  if (0.099 < voltage && voltage <= 0.199) {
    voltagePrompt =
      "low activity, pure water, few anaerobic bacteria, synthetic biology";
  }
  if (0.199 < voltage && voltage <= 0.299) {
    voltagePrompt =
      "continuous anaerobic bacterial flow, growing life, in process";
  }
  if (0.299 < voltage && voltage <= 0.399) {
    voltagePrompt =
      "high activity, blooming, active anaerobic bacterial metabolism";
  }
  if (0.399 < voltage && voltage <= 0.5) {
    voltagePrompt =
      "maximum yield, anaerobic bacterial hypercolonisation, foul water";
  }

  if (5.5 <= ph && ph <= 6.16) {
    phPrompt = "color: black and white contrast:high";
  }
  if (6.16 < ph && ph <= 6.82) {
    phPrompt = "color: greyscale contrast: medium";
  }

  if (6.82 < ph && ph <= 7.5) {
    phPrompt = "color: greyscale contrast:low";
  }

  if (600 <= tds && tds <= 633) {
    tdsPrompt = "resolution: 5dpi";
  }
  if (633 < tds && tds <= 666) {
    tdsPrompt = "resolution: 15dpi";
  }
  if (700 < tds && tds <= 733) {
    tdsPrompt = "resolution: 20dpi";
  }
  if (733 < tds && tds <= 766) {
    tdsPrompt = "resolution: 25dpi";
  }
  if (766 < tds && tds <= 800) {
    tdsPrompt = "resolution: 30dpi";
  }

  _searchText = `${searchController} ${voltagePrompt} ${phPrompt} ${tdsPrompt}`;

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
      return res.status(200).json({
        prompt: prompt,
        data: response.data,

        data2: voltagePrompt,
        data3: phPrompt,
        data4: tdsPrompt,
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { consulta };
