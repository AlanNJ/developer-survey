import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Header from "./components/Header";
import Left from "./components/Left";
import Modal from "./components/Modal";
import Right from "./components/Right";
import Thank from "./components/Thank";
import { AiOutlineForm } from "react-icons/ai";
import ScrollTo, { scrollIntoView } from "react-scroll-into-view";

export const index = () => {
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [primarySkills, setPrimarySkills] = useState();
	const [secondarySkills, setSecondarySkills] = useState();
	const [github, setGithub] = useState();
	const [linkedIn, setLinkedIn] = useState();
	const [message, setMessage] = useState();
	const [country, setCountry] = useState();
	const [experience, setExperience] = useState();

	const submitForm = async (data) => {
		try {
			if (!name || !email || !country || !primarySkills || !experience) {
				toast.error("please fill all the required fields");
			} else {
				setLoading(true);
				const res = await axios.post("http://localhost:5000/post/submit-data", {
					name,
					email,
					primarySkills,
					secondarySkills,
					github,
					linkedIn,
					message,
					country,
					experience,
				});
				setLoading(false);
				if (res.data.ok === true) {
					setSuccess(true);
					setName("");
					setEmail("");
					setPrimarySkills("");
					setSecondarySkills("");
					setGithub("");
					setLinkedIn("");
					setMessage("");
					setCountry("");
					setExperience("");
				}
			}
		} catch (err) {
			toast.error("This email is taken");
			setLoading(false);
		}
	};
	return (
		<>
			{!loading ? (
				<div className="index">
					<Header />

					<div className="main-container">
						<Left />
						<Right
							setLinkedIn={setLinkedIn}
							setName={setName}
							setPrimarySkills={setPrimarySkills}
							setSecondarySkills={setSecondarySkills}
							setExperience={setExperience}
							setEmail={setEmail}
							setGithub={setGithub}
							setMessage={setMessage}
							setLinkedIn={setLinkedIn}
							setCountry={setCountry}
							submitForm={submitForm}
						/>
					</div>
					<ScrollTo selector=".h">
						<AiOutlineForm className="form" />
					</ScrollTo>
				</div>
			) : (
				<Modal />
			)}
			{success === true && <Thank setSuccess={setSuccess} />}
		</>
	);
};
export default index;
