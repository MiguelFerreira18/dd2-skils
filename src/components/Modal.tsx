import { HeroData } from "../types/types";

const Modal: React.FC<{
	position: { x: number; y: number };
	onClose: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
	heroData: {heroData:HeroData[]};
}> = ({ position, onClose, heroData: {heroData} }) => {
	const handleModalClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		event.stopPropagation(); // Prevent clicks from propagating to parent elements
	};
	return (
		<div
			className="modal"
			style={{ top: position.y, left: position.x }}
			onClick={handleModalClick}
		>	
			<div className="hero-grid">
				{heroData.map((hero) => (
					<div key={hero.heroId} className="card">
						<img src={hero.heroImage} alt={hero.heroName}></img>
					</div>
				))}
			</div>
			<span onClick={onClose}>X</span>
		</div>
	);
};

export default Modal;
