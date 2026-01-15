import React, { useState } from "react";

const courses = [
	{
		name: "Full Stack Web Development",
		image:
			"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
		expertises: [
			"HTML, CSS, JavaScript",
			"React & Node.js",
			"MongoDB & Express",
			"REST APIs",
			"Deployment & DevOps",
		],
		description: "Master the MERN stack and build real-world web apps.",
	},
	{
		name: "Graphic Designing",
		image:
			"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
		expertises: [
			"Photoshop & Illustrator",
			"Branding & Logo Design",
			"UI/UX Basics",
			"Figma & Prototyping",
			"Portfolio Building",
		],
		description: "Design stunning graphics and user interfaces.",
	},
	{
		name: "Cloud Management",
		image:
			"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
		expertises: [
			"AWS & Azure",
			"Cloud Security",
			"Serverless Architecture",
			"CI/CD Pipelines",
			"Monitoring & Scaling",
		],
		description: "Deploy, manage, and secure cloud infrastructure.",
	},
	{
		name: "Data Science & AI",
		image:
			"https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
		expertises: [
			"Python & Pandas",
			"Machine Learning",
			"Deep Learning",
			"Data Visualization",
			"Real-world Projects",
		],
		description: "Analyze data and build intelligent systems.",
	},
	{
		name: "Mobile App Development",
		image:
			"https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
		expertises: [
			"Flutter & React Native",
			"App UI/UX",
			"APIs & Databases",
			"Publishing Apps",
			"Testing & Debugging",
		],
		description: "Create cross-platform mobile applications.",
	},
	{
		name: "Digital Marketing",
		image:
			"https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
		expertises: [
			"SEO & SEM",
			"Content Strategy",
			"Social Media Marketing",
			"Analytics & Reporting",
			"Email Campaigns",
		],
		description: "Grow brands with digital marketing strategies.",
	},
];

export default function Courses() {
	const [flipped, setFlipped] = useState(Array(courses.length).fill(false));

	const handleFlip = (idx) => {
		setFlipped((f) => f.map((v, i) => (i === idx ? !v : v)));
	};

	const handleEnroll = (courseName) => {
		// You can add enroll logic here
		alert(`Enrolled in ${courseName}!`);
	};

	return (
		<div className="cards-container">
			{courses.map((course, idx) => (
				<div
					className={`card${flipped[idx] ? " flipped" : ""}`}
					key={idx}
					onClick={() => handleFlip(idx)}
					style={{ cursor: "pointer" }}
				>
					<div className="card-inner">
						<div className="card-front">
							<div className="card-image">
								<img src={course.image} alt={course.name} />
							</div>
							<div className="card-title">{course.name}</div>
							<ul className="card-expertises">
								{course.expertises.map((exp, i) => (
									<li key={i}>{exp}</li>
								))}
							</ul>
							<button
								className="card-enroll-btn"
								onClick={(e) => {
									e.stopPropagation();
									handleEnroll(course.name);
								}}
							>
								Enroll Now
							</button>
						</div>
						<div className="card-back">
							<div
								style={{
									fontSize: 18,
									fontWeight: 600,
									marginBottom: 16,
								}}
							>
								{course.name}
							</div>
							<p style={{ fontSize: 15, marginBottom: 18 }}>
								{course.description}
							</p>
							<div
								style={{
									fontSize: 14,
									color: "#eebbc3",
								}}
							>
								Click to flip back
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
