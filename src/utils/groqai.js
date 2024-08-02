import Groq from "groq-sdk";

const groqai = new Groq({
	apiKey: process.env.REACT_APP_GROQAI_KEY,
	dangerouslyAllowBrowser: true,
});

export default groqai;
