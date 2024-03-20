const UserRepository = require("../repository/UserRepository");
const axios = require("axios");

const userRepository = new UserRepository();
const create = async (req, res) => {
  try {
    const { user_name, code_language, stdin, source_code, } = req.body;
    
    if (!user_name || !code_language || !stdin || !source_code) {
      res.status(400).json({ message: "All fields are required" });
    }
    const language_data = {
      "CPP": "52",
      "Python": "92",
      "java": "91",
      "javaScript": "93",
    };
    const language_id = language_data[code_language];
    console.log(language_id );
    const options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions",
      params: {
        base64_encoded: "true",
        fields: "*",
      },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "f790f87593msh7fc75facc5e80cdp12dff0jsnd051cac37375",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
      data: {
        language_id: language_id,
        source_code: source_code,
        stdin: stdin,
      },
    };

    try {
      const response = await axios.request(options);
      const token = response.data.token;
      console.log(token);
  if (!token) {
    res.status(500).json({ message: "Error in token" });
  } else {
    const options = {
      method: "GET",
      url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
      params: {
        base64_encoded: "true",
        fields: "*",
      },
      headers: {
        "X-RapidAPI-Key": "f790f87593msh7fc75facc5e80cdp12dff0jsnd051cac37375",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const stdout = response.data.status.description;
      const { user_name, code_language, stdin, source_code } = req.body;
      console.log(user_name, code_language, stdin, source_code, stdout);
      const data = await userRepository.create(
       { user_name,
        code_language,
        stdin,
        stdout,
        source_code}
      );
      res.status(201).json(data);
    } catch (error) {
      console.error(error);
    }
  }

      
    } catch (error) {
      console.error(error);
    }
  
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const findAll = async (req, res) => {
  try {
    const data = await userRepository.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
  findAll,
};
