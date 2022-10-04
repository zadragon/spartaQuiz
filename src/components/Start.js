import React from "react";
import img from "../logo.svg";

const Start = (props) => {
	// 컬러셋 참고: https://www.shutterstock.com/ko/blog/pastel-color-palettes-rococo-trend/
	return (
		<div
			style={{
				display: "flex",
				height: "100vh",
				width: "100vw",
				overflow: "hidden",
				padding: "16px",
				boxSizing: "border-box",
			}}
		>
			<div
				className="outter"
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					height: "100vh",
					width: "100vw",
					overflow: "hidden",
					padding: "0px 10vw",
					boxSizing: "border-box",
					maxWidth: "400px",
				}}
			>
				<img src={img} style={{ width: "80%", margin: "16px" }} />
				<h1 style={{ fontSize: "1.5em", margin: "0px", lineHeight: "1.4" }}>
					나는{" "}
					<span
						style={{
							backgroundColor: "#fef5d4",
							padding: "5px 10px",
							borderRadius: "30px",
						}}
					>
						{props.name}
					</span>
					에 대해 얼마나 알고 있을까?
				</h1>
				<input
					type="text"
					style={{
						padding: "10px",
						margin: "24px 0px",
						border: "1px solid #dadafc",
						borderRadius: "30px",
						width: "100%",
						// backgroundColor: "#dadafc55",
					}}
					placeholder="내 이름"
				/>
				<button
					style={{
						padding: "8px 24px",
						backgroundColor: "#dadafc",
						borderRadius: "30px",
						border: "#dadafc",
					}}
				>
					시작하기
				</button>
			</div>
		</div>
	);
};

export default Start;
