import { Info } from "lucide-preact";
import Container from "./Container";
const InfoTab = () => {
	return (
		<Container classCSS="info">
			<div className="mb-1 mr-1">
				<Info />
			</div>
			<p className="mb-1">This site is being redesigned</p>
		</Container>
	);
};

export default InfoTab;
