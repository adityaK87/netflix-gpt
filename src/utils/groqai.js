import Groq from "groq-sdk";
import { GROQ_API_KEY } from "./constant";

const groqai = new Groq({
	apiKey: GROQ_API_KEY,
	dangerouslyAllowBrowser: true,
});

export default groqai;
