import React from "react";

export const Thank = ({ setSuccess }) => {
	return (
		<div className="thanks-container">
			<p>
				Thank you for submitting the form.We will get back to you soon on the
				email you provided.Further updates will also be sent to you.
			</p>
			<button className="close" onClick={(e) => setSuccess(false)}>
				Close
			</button>
		</div>
	);
};
export default Thank;
