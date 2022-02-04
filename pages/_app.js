import "./components/css/header.css";
import "./components/css/left.css";
import "./components/css/right.css";
import "./index.css";
import Head from "next/head";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function myApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>DevSurvey!Building something nice</title>
				<meta charset="UTF-8" />
				<meta name="description" content="Programmers survey" />
				<meta name="keywords" content="HTML, CSS, JavaScript" />
				<meta name="author" content="John Doe" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<ToastContainer position="top-center" autoClose={2500} />
			<Component {...pageProps} />
		</>
	);
}
export default myApp;
