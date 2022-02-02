import React from "react";
import submitForm from "../../pages/index";

export const Right = ({
	setLinkedIn,
	setName,
	setPrimarySkills,
	setSecondarySkills,
	setExperience,
	setEmail,
	setGithub,
	setMessage,

	setCountry,
	submitForm,
}) => {
	return (
		<div className="right-container">
			<div className="card">
				<label class="field field_v1">
					<input
						class="field__input"
						placeholder="e.g. John Doe"
						onChange={(e) => setName(e.target.value)}
					/>
					<span class="field__label-wrap">
						<span class="field__label">
							Full Name <span className="span">*</span>
						</span>
					</span>
				</label>
				<label class="field field_v1">
					<input
						class="field__input"
						placeholder="e.g. Java,Python,C"
						onChange={(e) => setPrimarySkills(e.target.value)}
					/>
					<span class="field__label-wrap">
						<span class="field__label">
							Enter your primary skills <span className="span">*</span>
						</span>
					</span>
				</label>
				<label class="field field_v1">
					<input
						class="field__input"
						placeholder="e.g. UI/UX design"
						onChange={(e) => setSecondarySkills(e.target.value)}
					/>
					<span class="field__label-wrap">
						<span class="field__label">Enter your secondary skills</span>
					</span>
				</label>
				<label class="field field_v1">
					<input
						class="field__input"
						placeholder="e.g. 1"
						onChange={(e) => setExperience(e.target.value)}
					/>
					<span class="field__label-wrap">
						<span class="field__label">
							Enter your experience <span className="span">*</span>
						</span>
					</span>
				</label>
				<label class="field field_v1">
					<input
						class="field__input"
						placeholder="e.g. email@email.com"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<span class="field__label-wrap">
						<span class="field__label">
							Enter your email <span className="span">*</span>
						</span>
					</span>
				</label>
				<label class="field field_v1">
					<input
						class="field__input"
						placeholder="e.g. Dubai"
						onChange={(e) => setCountry(e.target.value)}
					/>
					<span class="field__label-wrap">
						<span class="field__label">
							Country <span className="span">*</span>
						</span>
					</span>
				</label>
				<label class="field field_v1">
					<input
						class="field__input"
						placeholder="e.g. aaa@github.com"
						onChange={(e) => setGithub(e.target.value)}
					/>
					<span class="field__label-wrap">
						<span class="field__label">Enter your github url</span>
					</span>
				</label>
				<label class="field field_v1">
					<input
						class="field__input"
						placeholder="e.g. aaa@linkedin.com"
						onChange={(e) => setLinkedIn(e.target.value)}
					/>
					<span class="field__label-wrap">
						<span class="field__label">Your linkedIn URL</span>
					</span>
				</label>
				<label class="field field_v1">
					<input
						class="field__input"
						placeholder="e.g. Hello !!"
						onChange={(e) => setMessage(e.target.value)}
					/>
					<span class="field__label-wrap">
						<span class="field__label">Any message or suggestions?</span>
					</span>
				</label>
				<button className="button" onClick={submitForm}>
					Submit
				</button>
			</div>
		</div>
	);
};
export default Right;
