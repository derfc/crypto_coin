import { useState, useEffect } from "react";

import SettingSide from "./SettingSide";
import SettingGeneral from "./SettingGeneral";
import SettingHi from "./SettingHi";

const Setting = () => {
	const [settingContent, setSettingContent] = useState("General");
	const setContent = (content) => {
		setSettingContent(content);
	};

	return (
		<div className="row">
			<div className="col-3">
				<SettingSide setContent={setContent} />
			</div>
			<div className="col">
				{settingContent === "General" ? <SettingGeneral /> : <SettingHi />}
			</div>
		</div>
	);
};

export default Setting;
