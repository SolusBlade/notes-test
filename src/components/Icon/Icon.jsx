import icons from "../../assets/icons.svg";

const Icon = ({ name, width, height, className }) => (
	<svg width={width} height={height} className={className}>
		<use xlinkHref={`${icons}#${name}`} />
	</svg>
);

export default Icon;
