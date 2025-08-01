import React from "react";
import styles from "./styles.module.css";
import UploadSlot from "../UploadSlot/UploadSlot";
import { range } from "../../utils";

// we don't need a frame number here, we need a list of urls like: [url, url, url,...] but that should not be set here it should instead be set in InsertCard
function PictureFrame({ frameNumber }) {
	if (frameNumber === undefined || frameNumber < 1) {
		frameNumber = 1;
	}
	if (frameNumber > 4) {
		frameNumber = 4;
	}

	const cardStyle = `c${frameNumber}`;
	const arr = range(frameNumber);

	return (
		<div className={`${styles.card} ${styles[cardStyle]}`}>
			{arr.map((item) => {
				const style = { gridArea: `item${item + 1}` };
				return <UploadSlot key={item} style={style} />;
			})}
		</div>
	);
}

export default PictureFrame;
